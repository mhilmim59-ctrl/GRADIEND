/* GRADIEND — titik-titik latar yang menyala mengikuti kursor (efek ala Gemini).
   Satu <canvas> fixed di belakang konten; loop animasi berhenti sendiri saat tidak ada gerakan. */
(() => {
  if (window.__gradiendDots) return;
  window.__gradiendDots = true;

  const CFG = Object.assign({
    spacing: 26,      // jarak antar titik (px)
    baseRadius: 1.1,  // ukuran titik biasa
    glowRadius: 3.0,  // tambahan ukuran di pusat cahaya
    reach: 170,       // jangkauan cahaya dari kursor (px)
    follow: 0.16      // 0..1, makin kecil makin "meluncur" mengikuti kursor
  }, (window.GRADIEND_CONFIG || {}).cursorDots || {});

  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cv = document.createElement("canvas");
  cv.setAttribute("aria-hidden", "true");
  cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none";
  document.body.prepend(cv);
  const ctx = cv.getContext("2d");

  let W = 0, H = 0, dpr = 1, raf = 0;
  let tx = -9999, ty = -9999;      // posisi kursor sebenarnya
  let px = -9999, py = -9999;      // posisi cahaya (disaring agar halus)
  let glow = 0, glowTarget = 0;    // 0 = padam, 1 = menyala

  const isDark = () => document.body.classList.contains("dark");
  // [r,g,b] titik biasa, dan warna cahaya (emas) — menyesuaikan tema
  const palette = () => isDark()
    ? { base: [170, 210, 190], baseA: 0.16, hot: [239, 217, 142], hotA: 0.95 }
    : { base: [12, 107, 77],   baseA: 0.16, hot: [203, 150, 40],  hotA: 0.95 };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const pal = palette(), S = CFG.spacing, R = CFG.reach, R2 = R * R;
    const offX = (W % S) / 2, offY = (H % S) / 2;       // pusatkan grid di layar
    const lit = glow > 0.003;

    // 1) titik jauh: satu path, satu warna (cepat)
    ctx.fillStyle = `rgba(${pal.base[0]},${pal.base[1]},${pal.base[2]},${pal.baseA})`;
    ctx.beginPath();
    const near = [];
    for (let y = offY; y < H + S; y += S) {
      for (let x = offX; x < W + S; x += S) {
        if (lit) {
          const dx = x - px, dy = y - py;
          if (dx * dx + dy * dy < R2) { near.push(x, y); continue; }
        }
        ctx.moveTo(x + CFG.baseRadius, y);
        ctx.arc(x, y, CFG.baseRadius, 0, 6.2832);
      }
    }
    ctx.fill();

    // 2) titik dekat kursor: membesar, makin terang, bergeser dari warna dasar ke emas
    for (let i = 0; i < near.length; i += 2) {
      const x = near[i], y = near[i + 1];
      const d = Math.sqrt((x - px) * (x - px) + (y - py) * (y - py));
      let t = 1 - d / R; t = t * t * (3 - 2 * t) * glow;   // smoothstep
      const r = CFG.baseRadius + t * CFG.glowRadius;
      const a = pal.baseA + (pal.hotA - pal.baseA) * t;
      const c0 = pal.base, c1 = pal.hot;
      ctx.fillStyle = `rgba(${Math.round(c0[0] + (c1[0] - c0[0]) * t)},${Math.round(c0[1] + (c1[1] - c0[1]) * t)},${Math.round(c0[2] + (c1[2] - c0[2]) * t)},${a.toFixed(3)})`;
      ctx.beginPath(); ctx.arc(x, y, r, 0, 6.2832); ctx.fill();
    }
  }

  function loop() {
    raf = 0;
    px += (tx - px) * CFG.follow; py += (ty - py) * CFG.follow;
    glow += (glowTarget - glow) * 0.12;
    draw();
    const moving = Math.abs(tx - px) > 0.4 || Math.abs(ty - py) > 0.4;
    const fading = Math.abs(glowTarget - glow) > 0.004;
    if (moving || fading) raf = requestAnimationFrame(loop);
    else if (glowTarget === 0) { glow = 0; draw(); }
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

  if (!reduceMotion) {
    window.addEventListener("pointermove", e => {
      if (px < -9000) { px = e.clientX; py = e.clientY; }   // lompatan pertama: tanpa meluncur dari pojok
      tx = e.clientX; ty = e.clientY; glowTarget = 1; kick();
    }, { passive: true });
    window.addEventListener("pointerdown", e => { tx = e.clientX; ty = e.clientY; glowTarget = 1; kick(); }, { passive: true });
    // kursor keluar jendela / jari diangkat -> cahaya memudar
    document.addEventListener("mouseleave", () => { glowTarget = 0; kick(); });
    window.addEventListener("pointerup", e => { if (e.pointerType === "touch") { glowTarget = 0; kick(); } }, { passive: true });
    window.addEventListener("blur", () => { glowTarget = 0; kick(); });
  }

  // ganti tema (terang/gelap) -> gambar ulang dengan warna baru
  new MutationObserver(draw).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  window.addEventListener("resize", resize);
  resize();
})();
