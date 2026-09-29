/* GRADIEND — Admin panel
 * Login: username (config.adminUsername) + password akun Supabase Auth.
 * Setelah login, admin langsung bisa tambah / edit / hapus event.
 */
(() => {
  "use strict";

  const $ = id => document.getElementById(id);
  const bucket = () => GRADIEND.config.eventBucket || "event-images";
  const MAX_IMAGE_MB = 5;

  let sb = null;
  let editId = null;
  let currentImagePath = null;
  let saving = false;
  const rows = new Map(); // id -> event lengkap (termasuk isi artikel)

  /* ---------- tampilan ---------- */
  function showLogin() {
    $("login-card").style.display = "block";
    $("admin-panel").style.display = "none";
  }
  function showPanel() {
    $("login-card").style.display = "none";
    $("admin-panel").style.display = "block";
    loadRows();
  }
  function setBusy(btn, busy, idleHtml) {
    if (!btn) return;
    btn.disabled = busy;
    if (busy) { btn.dataset.idle = btn.innerHTML; btn.textContent = "Memproses..."; }
    else btn.innerHTML = idleHtml || btn.dataset.idle || btn.innerHTML;
  }

  /* ---------- auth ---------- */
  async function getUser() {
    const { data } = await sb.auth.getUser();
    return data?.user || null;
  }
  async function isAdmin() {
    const u = await getUser();
    if (!u) return false;
    const { data } = await sb.from("profiles").select("role").eq("id", u.id).maybeSingle();
    return data?.role === "admin";
  }

  async function boot() {
    if (!GRADIEND.configured) {
      showLogin();
      toast("Isi js/config.js dahulu (Supabase URL & key).");
      return;
    }
    sb = await GRADIEND.client();
    sb.auth.onAuthStateChange(event => { if (event === "SIGNED_OUT") showLogin(); });
    const { data: { session } } = await sb.auth.getSession();
    if (session && await isAdmin()) showPanel(); else showLogin();
  }

  $("login-form").onsubmit = async e => {
    e.preventDefault();
    if (!GRADIEND.configured) { toast("Supabase belum dikonfigurasi."); return; }
    const btn = e.target.querySelector("button");
    const username = $("username").value.trim();
    const password = $("password").value;
    const expected = String(GRADIEND.config.adminUsername || "rohis62").toLowerCase();

    if (username.toLowerCase() !== expected) { toast("Username atau password salah."); return; }

    setBusy(btn, true);
    try {
      const { error } = await sb.auth.signInWithPassword({ email: GRADIEND.config.adminAuthEmail, password });
      if (error) {
        toast(/confirm/i.test(error.message)
          ? "Akun admin belum dikonfirmasi di Supabase (centang Auto Confirm User)."
          : "Username atau password salah.");
        return;
      }
      if (await isAdmin()) { $("password").value = ""; showPanel(); }
      else {
        await sb.auth.signOut();
        toast("Akun belum berstatus admin. Jalankan supabase/schema.sql sekali lagi.");
      }
    } finally {
      setBusy(btn, false);
    }
  };

  $("logout").onclick = async () => { await sb.auth.signOut(); rows.clear(); showLogin(); };

  /* ---------- form ---------- */
  function clearForm() {
    editId = null;
    currentImagePath = null;
    $("edit-id").value = "";
    $("event-form").reset();
    $("author-name").value = "Admin";
    $("status").value = "published";
    $("form-title").textContent = "Tambah Event";
    if ($("image-hint")) $("image-hint").textContent = "";
  }
  $("clear").onclick = clearForm;

  async function uploadImage(file) {
    if (!file.type.startsWith("image/")) throw new Error("File harus berupa gambar.");
    if (file.size > MAX_IMAGE_MB * 1024 * 1024) throw new Error(`Ukuran gambar maksimal ${MAX_IMAGE_MB} MB.`);
    const ext = (file.name.split(".").pop() || "jpg").replace(/[^a-z0-9]/gi, "") || "jpg";
    const path = `${crypto.randomUUID()}.${ext}`;
    const { error } = await sb.storage.from(bucket()).upload(path, file, { contentType: file.type, upsert: false });
    if (error) throw error;
    const { data } = sb.storage.from(bucket()).getPublicUrl(path);
    return { path, url: data.publicUrl };
  }

  $("event-form").onsubmit = async e => {
    e.preventDefault();
    if (saving) return;
    saving = true;
    const btn = e.target.querySelector('button:not([type="button"])');
    setBusy(btn, true);
    let uploaded = null;
    try {
      const u = await getUser();
      if (!u || !(await isAdmin())) { toast("Sesi habis atau akun bukan admin. Silakan masuk lagi."); showLogin(); return; }

      const payload = {
        title: $("title").value.trim(),
        event_date: $("event-date").value,
        category: $("category").value,
        status: $("status").value,
        author_name: $("author-name").value.trim() || "Admin",
        excerpt: $("excerpt").value.trim(),
        content: $("content").value.trim()
      };

      const file = $("image").files[0];
      if (file) {
        uploaded = await uploadImage(file);
        payload.image_url = uploaded.url;
        payload.image_path = uploaded.path;
      }

      const res = editId
        ? await sb.from("events").update({ ...payload, updated_at: new Date().toISOString() }).eq("id", editId)
        : await sb.from("events").insert({ ...payload, author_id: u.id });

      if (res.error) throw res.error;

      // gambar lama dihapus hanya setelah data berhasil tersimpan
      if (uploaded && currentImagePath) await sb.storage.from(bucket()).remove([currentImagePath]);

      toast(editId ? "Event diperbarui." : "Event ditambahkan.");
      uploaded = null;
      clearForm();
      loadRows();
    } catch (err) {
      console.error(err);
      if (uploaded) await sb.storage.from(bucket()).remove([uploaded.path]); // bersihkan upload yatim
      toast(err.message || "Gagal menyimpan.");
    } finally {
      saving = false;
      setBusy(btn, false);
    }
  };

  /* ---------- daftar event ---------- */
  async function loadRows() {
    const { data, error } = await sb
      .from("events")
      .select("id,title,event_date,category,status,author_name,excerpt,content,image_url,image_path")
      .order("created_at", { ascending: false });

    if (error) {
      $("rows").innerHTML = '<tr><td colspan="5">Gagal memuat data.</td></tr>';
      return;
    }
    rows.clear();
    (data || []).forEach(ev => rows.set(ev.id, ev));

    $("rows").innerHTML = (data || []).map(ev => `<tr>
      <td><img class="thumb" src="${escapeHtml(ev.image_url || "assets/gradiend-logo.png")}" alt=""></td>
      <td><b>${escapeHtml(ev.title)}</b><div>${dateID(ev.event_date)}</div></td>
      <td>${escapeHtml(ev.author_name || "Admin")}</td>
      <td>${ev.status === "published" ? "Published" : "Draft"}</td>
      <td>
        <button type="button" class="icon-btn" data-act="edit" data-id="${escapeHtml(ev.id)}" aria-label="Edit"><i class="fa-solid fa-pen"></i></button>
        <button type="button" class="icon-btn" data-act="delete" data-id="${escapeHtml(ev.id)}" aria-label="Hapus"><i class="fa-solid fa-trash"></i></button>
      </td></tr>`).join("") || '<tr><td colspan="5">Belum ada event.</td></tr>';
  }

  function startEdit(ev) {
    editId = ev.id;
    currentImagePath = ev.image_path || null;
    $("edit-id").value = ev.id;
    $("title").value = ev.title || "";
    $("event-date").value = ev.event_date || "";
    $("category").value = ev.category || "Lainnya";
    $("status").value = ev.status || "published";
    $("author-name").value = ev.author_name || "Admin";
    $("excerpt").value = ev.excerpt || "";
    $("content").value = ev.content || "";
    $("image").value = "";
    $("form-title").textContent = "Edit Event";
    if ($("image-hint")) $("image-hint").textContent = ev.image_url
      ? "Cover saat ini dipertahankan bila tidak memilih file baru."
      : "Belum ada cover.";
    toast("Mode edit aktif.");
    $("event-form").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function removeEvent(ev) {
    if (!confirm(`Hapus event "${ev.title}"?`)) return;
    const { error } = await sb.from("events").delete().eq("id", ev.id);
    if (error) { toast(error.message); return; }
    if (ev.image_path) await sb.storage.from(bucket()).remove([ev.image_path]);
    if (editId === ev.id) clearForm();
    toast("Event dihapus.");
    loadRows();
  }

  $("rows").addEventListener("click", e => {
    const btn = e.target.closest("button[data-act]");
    if (!btn) return;
    const ev = rows.get(btn.dataset.id);
    if (!ev) return;
    if (btn.dataset.act === "edit") startEdit(ev);
    else if (btn.dataset.act === "delete") removeEvent(ev);
  });

  document.addEventListener("DOMContentLoaded", boot);
})();
