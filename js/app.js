
(() => {
  const cfg = window.GRADIEND_CONFIG || {};
  const configured = Boolean(cfg.supabaseUrl && cfg.supabaseAnonKey &&
    !cfg.supabaseUrl.includes("PASTE_") && !cfg.supabaseAnonKey.includes("PASTE_"));

  window.GRADIEND = {
    config: cfg,
    configured,
    sb: null,
    async client(){
      if(!configured) return null;
      if(!this.sb) this.sb = window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey,{
        auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}
      });
      return this.sb;
    }
  };

  window.escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  }[m]));
  window.initials = name => String(name||"Admin").split(/\s+/).filter(Boolean).slice(0,2).map(x=>x[0].toUpperCase()).join("") || "A";
  window.dateID = value => new Date(value+"T00:00:00").toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});

  window.toast = message => {
    let el=document.querySelector(".toast");
    if(!el){el=document.createElement("div");el.className="toast";document.body.appendChild(el)}
    el.textContent=message;el.classList.add("show");
    clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove("show"),2800);
  };

  document.addEventListener("DOMContentLoaded",()=>{
    const dark=localStorage.getItem("gradiend_theme")==="dark";
    if(dark) document.body.classList.add("dark");
    document.querySelector("[data-theme]")?.addEventListener("click",()=>{
      document.body.classList.toggle("dark");
      localStorage.setItem("gradiend_theme",document.body.classList.contains("dark")?"dark":"light");
    });
    const nav=document.querySelector(".nav");
    document.querySelector("[data-menu]")?.addEventListener("click",()=>nav?.classList.toggle("mobile-open"));
    document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("mobile-open")));

    const current=(location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".nav-links a[data-page]").forEach(a=>{
      if(a.dataset.page===current) a.classList.add("active");
    });

    const observer=new IntersectionObserver(entries=>entries.forEach(x=>x.isIntersecting&&x.target.classList.add("show")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
  });
})();
