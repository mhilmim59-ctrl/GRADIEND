// GRADIEND V5 - browser configuration
// Put only PUBLIC Supabase connection values here.
// NEVER put a service_role/secret key or your admin password in this file.

window.GRADIEND_CONFIG = {
  supabaseUrl: "PASTE_SUPABASE_PROJECT_URL_HERE",
  supabaseAnonKey: "PASTE_SUPABASE_PUBLISHABLE_KEY_HERE",

  // Supabase Auth uses this internal email.
  // Visitors only see the username "rohis62" on the admin page.
  adminAuthEmail: "admin@gradiend.local",
  adminUsername: "rohis62",

  eventBucket: "event-images",

  // Prayer data provider currently documented as sourced from Kemenag RI.
  prayerApiBase: "https://api.myquran.com/v3/sholat",
  kemenagUrl: "https://bimasislam.kemenag.dev/jadwal-sholat"
};
