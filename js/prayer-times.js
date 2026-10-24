/* GRADIEND — kalkulasi waktu salat langsung dari koordinat (tanpa API, tanpa "kota terdekat").
   Metode mengikuti kriteria Kemenag RI: Subuh -20°, Isya -18°, Ashar mazhab Syafi'i (bayangan = 1x tinggi benda),
   Terbit/Terbenam -0.833°, Dhuha 4.5°, Imsak = Subuh - 10 menit, ditambah ihtiyat (pengaman) per waktu. */
(() => {
  const D2R = Math.PI / 180, R2D = 180 / Math.PI;
  const sin = d => Math.sin(d * D2R), cos = d => Math.cos(d * D2R), tan = d => Math.tan(d * D2R);
  const asin = x => Math.asin(x) * R2D, acos = x => Math.acos(x) * R2D, atan = x => Math.atan(x) * R2D;
  const atan2 = (y, x) => Math.atan2(y, x) * R2D;
  const fix = (a, b) => { a = a - b * Math.floor(a / b); return a < 0 ? a + b : a; };

  // Parameter default (bisa ditimpa lewat GRADIEND_CONFIG.prayer)
  const DEFAULTS = {
    fajrAngle: 20, ishaAngle: 18, dhuhaAngle: 4.5, sunriseAngle: 0.833,
    imsakMinutes: 10,
    // ihtiyat (menit) — dibulatkan ke atas, kecuali terbit (dikurangi)
    ihtiyat: { subuh: 2, terbit: -2, dhuha: 2, dzuhur: 3, ashar: 2, maghrib: 3, isya: 2 }
  };

  // Julian Date pukul 00:00 UT untuk tanggal kalender (y, m, d)
  function julian(y, m, d) {
    if (m <= 2) { y -= 1; m += 12; }
    const A = Math.floor(y / 100), B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
  }
  // Deklinasi matahari & equation of time pada JD tertentu
  function sunPos(jd) {
    const D = jd - 2451545.0;
    const g = fix(357.529 + 0.98560028 * D, 360);
    const q = fix(280.459 + 0.98564736 * D, 360);
    const L = fix(q + 1.915 * sin(g) + 0.020 * sin(2 * g), 360);
    const e = 23.439 - 0.00000036 * D;
    const RA = fix(atan2(cos(e) * sin(L), cos(L)) / 15, 24);
    return { decl: asin(sin(e) * sin(L)), eqt: q / 15 - RA > 12 ? q / 15 - RA - 24 : (q / 15 - RA < -12 ? q / 15 - RA + 24 : q / 15 - RA) };
  }

  /* Hitung semua waktu (dalam jam desimal waktu lokal) untuk satu tanggal & koordinat.
     tz = selisih jam dari UTC (WIB 7, WITA 8, WIT 9). */
  function compute(y, m, d, lat, lng, tz, opts) {
    const o = Object.assign({}, DEFAULTS, opts || {});
    o.ihtiyat = Object.assign({}, DEFAULTS.ihtiyat, (opts && opts.ihtiyat) || {});
    const jd0 = julian(y, m, d); // 00:00 UT
    const jdAt = t => jd0 + (t - tz) / 24; // t = jam waktu lokal -> Julian Date (UT)

    // Waktu transit (Dzuhur astronomis), iteratif
    let noon = 12 + tz - lng / 15;
    for (let i = 0; i < 4; i++) noon = 12 + tz - lng / 15 - sunPos(jdAt(noon)).eqt;

    // Waktu saat matahari berada di ketinggian 'alt' (derajat; negatif = di bawah horizon)
    // dir = -1 sebelum transit, +1 sesudah. Iteratif agar deklinasi tepat pada waktu kejadian.
    function atAltitude(alt, dir) {
      let t = noon;
      for (let i = 0; i < 4; i++) {
        const dec = sunPos(jdAt(t)).decl;
        const c = (sin(alt) - sin(dec) * sin(lat)) / (cos(dec) * cos(lat));
        if (c < -1 || c > 1) return NaN; // matahari tidak mencapai sudut ini (lintang tinggi)
        t = noon + dir * acos(c) / 15;
      }
      return t;
    }
    // Ashar: panjang bayangan = n x tinggi benda + bayangan saat zawal (Syafi'i n=1)
    function asharTime(n) {
      let t = noon;
      for (let i = 0; i < 4; i++) {
        const dec = sunPos(jdAt(t)).decl;
        const alt = atan(1 / (n + tan(Math.abs(lat - dec))));
        const c = (sin(alt) - sin(dec) * sin(lat)) / (cos(dec) * cos(lat));
        if (c < -1 || c > 1) return NaN;
        t = noon + acos(c) / 15;
      }
      return t;
    }

    const raw = {
      subuh: atAltitude(-o.fajrAngle, -1),
      terbit: atAltitude(-o.sunriseAngle, -1),
      dhuha: atAltitude(o.dhuhaAngle, -1),
      dzuhur: noon,
      ashar: asharTime(1),
      maghrib: atAltitude(-o.sunriseAngle, 1),
      isya: atAltitude(-o.ishaAngle, 1)
    };
    // ke menit (dibulatkan ke atas setelah ihtiyat; terbit dibulatkan ke bawah agar aman)
    const out = {};
    for (const k in raw) {
      if (isNaN(raw[k])) { out[k] = null; continue; }
      const mins = raw[k] * 60 + o.ihtiyat[k];
      out[k] = k === "terbit" ? Math.floor(mins + 1e-6) : Math.ceil(mins - 1e-6);
    }
    out.imsak = out.subuh == null ? null : out.subuh - o.imsakMinutes;
    return out; // menit sejak 00:00 waktu lokal
  }

  const hhmm = m => m == null ? "--:--" : String(Math.floor(((m % 1440) + 1440) % 1440 / 60)).padStart(2, "0") + ":" + String(((m % 60) + 60) % 60).padStart(2, "0");

  window.GRADIEND_PRAYER = { compute, hhmm, DEFAULTS };
})();
