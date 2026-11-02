/* FloraKu - UTS Pemrograman Web Dasar. Frontend murni; data contoh disimpan di localStorage. */
const $ = (s) => document.querySelector(s),
  rp = (n) => 'Rp' + Number(n).toLocaleString('id-ID');
const ST = {
  menunggu_pembayaran: 'Menunggu pembayaran',
  menunggu_verifikasi: 'Menunggu verifikasi',
  diproses: 'Diproses',
  dikirim: 'Dikirim',
  selesai: 'Selesai',
  dibatalkan: 'Dibatalkan',
};
const mk = (id, n, l, k, h, s, u, p, c, e, d) => ({
  id,
  n,
  l,
  k,
  h,
  s,
  u,
  p,
  c,
  e,
  d,
  w: 800,
  a: 1,
});
const KEY = 'floraku-uts';
let D = JSON.parse(localStorage.getItem(KEY) || 'null') || {
  k: ['Tanaman Daun', 'Tanaman Bunga', 'Kaktus dan Sukulen', 'Anggrek', 'Tanaman Gantung'],
  u: [
    {
      id: 1,
      n: 'Admin FloraKu',
      e: 'admin@floraku.id',
      hp: '081200000001',
      pw: 'admin123',
      r: 'admin',
      a: 1,
    },
    {
      id: 2,
      n: 'Nizar Ilham P.F.',
      e: 'nizar@mail.com',
      hp: '081200000002',
      pw: 'user123',
      r: 'pelanggan',
      a: 1,
    },
  ],
  p: [
    mk(
      1,
      'Monstera Deliciosa',
      'Monstera deliciosa',
      'Tanaman Daun',
      185000,
      12,
      'Tinggi 40 cm',
      'sedang',
      'sedang',
      '🌿',
      'Daun besar berlubang, cocok untuk dekorasi ruang tamu. Siram saat media atas mengering.',
    ),
    mk(
      2,
      'Lidah Mertua',
      'Sansevieria trifasciata',
      'Tanaman Daun',
      65000,
      25,
      'Tinggi 30 cm',
      'mudah',
      'teduh',
      '🌱',
      'Tahan banting dan jarang disiram, cocok untuk pemula.',
    ),
    mk(
      3,
      'Kaktus Mini',
      'Echinopsis sp.',
      'Kaktus dan Sukulen',
      25000,
      40,
      'Pot 6 cm',
      'mudah',
      'penuh',
      '🌵',
      'Butuh cahaya penuh dan penyiraman sangat sedikit.',
    ),
    mk(
      4,
      'Aglaonema Merah',
      'Aglaonema sp.',
      'Tanaman Daun',
      120000,
      8,
      'Tinggi 35 cm',
      'sedang',
      'teduh',
      '🪴',
      'Daun merah cerah, tumbuh baik di tempat teduh.',
    ),
    mk(
      5,
      'Anggrek Bulan',
      'Phalaenopsis amabilis',
      'Anggrek',
      150000,
      4,
      'Tinggi 45 cm',
      'sulit',
      'sedang',
      '🌸',
      'Bunga tahan lama, perlu kelembapan dan media khusus.',
    ),
    mk(
      6,
      'Echeveria',
      'Echeveria elegans',
      'Kaktus dan Sukulen',
      30000,
      30,
      'Pot 8 cm',
      'mudah',
      'penuh',
      '🌼',
      'Sukulen berbentuk mawar, mudah diperbanyak.',
    ),
    mk(
      7,
      'Pothos Gantung',
      'Epipremnum aureum',
      'Tanaman Gantung',
      45000,
      20,
      'Panjang 50 cm',
      'mudah',
      'teduh',
      '🍃',
      'Menjuntai indah dan membantu menyegarkan ruangan.',
    ),
    mk(
      8,
      'Bougenville',
      'Bougainvillea spectabilis',
      'Tanaman Bunga',
      80000,
      0,
      'Tinggi 60 cm',
      'mudah',
      'penuh',
      '🌺',
      'Berbunga lebat saat terkena matahari penuh.',
    ),
  ],
  kr: [
    { id: 1, n: 'JNE', t: 12000, es: '2-3 hari', a: 1 },
    { id: 2, n: 'J&T', t: 10000, es: '2-4 hari', a: 1 },
    { id: 3, n: 'SiCepat', t: 11000, es: '1-3 hari', a: 1 },
  ],
  mp: [
    { id: 1, n: 'BCA', no: '1234567890', an: 'FloraKu', a: 1 },
    { id: 2, n: 'BRI', no: '0987654321', an: 'FloraKu', a: 1 },
  ],
  al: [
    {
      id: 1,
      u: 2,
      pn: 'Nizar Ilham P.F.',
      hp: '081200000002',
      al: 'Jl. Melati No. 5',
      kota: 'Kota Contoh',
      pv: 'Jawa Timur',
      pos: '60111',
      ut: 1,
    },
  ],
  c: [],
  ul: [
    { p: 1, u: 'Rina', r: 5, k: 'Tanaman sehat dan kemasan rapi.' },
    { p: 2, u: 'Budi', r: 4, k: 'Sesuai foto, pengiriman cepat.' },
  ],
  t: [
    {
      id: 1,
      kode: 'FLR-20261020-001',
      u: 2,
      al: 1,
      kr: 1,
      it: [{ p: 1, q: 1, h: 185000 }],
      sub: 185000,
      ong: 12000,
      tot: 197000,
      st: 'selesai',
      tgl: '2026-10-20',
      bt: '',
      resi: 'JNE123456',
      met: 1,
      bukti: 'bukti1.jpg',
      cat: '',
    },
    {
      id: 2,
      kode: 'FLR-20261030-002',
      u: 2,
      al: 1,
      kr: 2,
      it: [
        { p: 3, q: 2, h: 25000 },
        { p: 6, q: 1, h: 30000 },
      ],
      sub: 80000,
      ong: 10000,
      tot: 90000,
      st: 'menunggu_verifikasi',
      tgl: '2026-10-30',
      bt: '',
      resi: '',
      met: 2,
      bukti: 'bukti2.jpg',
      cat: '',
    },
  ],
  me: null,
};
const save = () => localStorage.setItem(KEY, JSON.stringify(D));
const P = (id) => D.p.find((x) => x.id == id),
  U = (id) => D.u.find((x) => x.id == id),
  TR = (id) => D.t.find((x) => x.id == id);
const nid = (a) => a.reduce((m, x) => Math.max(m, x.id), 0) + 1;
const msg = (t) => {
  const e = $('#toast');
  e.textContent = t;
  e.style.display = 'block';
  clearTimeout(msg.t);
  msg.t = setTimeout(() => (e.style.display = 'none'), 2600);
};
const bd = (s) => `<span class="bd ${s}">${ST[s]}</span>`;
const T = (h, rows) =>
  `<div class="tw"><table><tr>${h.map((x) => '<th>' + x + '</th>').join('')}</tr>${rows.map((r) => '<tr>' + r.map((x) => '<td>' + x + '</td>').join('') + '</tr>').join('') || '<tr><td colspan=' + h.length + '>Belum ada data.</td></tr>'}</table></div>`;
const opt = (a, f, v) =>
  a
    .map((x) => `<option value="${f(x)}" ${f(x) == v ? 'selected' : ''}>${x.n || x}</option>`)
    .join('');
const rt = (id) => {
  const x = D.ul.filter((u) => u.p == id);
  return x.length
    ? (x.reduce((a, b) => a + b.r, 0) / x.length).toFixed(1) + ' ★ (' + x.length + ' ulasan)'
    : 'Belum ada ulasan';
};
const card = (p) =>
  `<div class="card"><a href="#/detail/${p.id}"><div class="ph">${p.e}</div><h3 style="margin:6px 0 0">${p.n}</h3></a><i style="font-size:13px">${p.l}</i><b>${rp(p.h)}</b><div><span class="tag ${p.s ? '' : 'x'}">${p.s ? 'Stok ' + p.s : 'Habis'}</span> <span class="tag">${p.p}</span></div></div>`;
const mine = () => D.c.filter((x) => x.u == D.me.id).map((x) => ({ ...x, pr: P(x.p) }));
const sum = (c) => c.reduce((a, x) => a + x.pr.h * x.q, 0);
function sweep() {
  D.t.forEach((t) => {
    if (t.st == 'menunggu_pembayaran' && t.bt && new Date(t.bt) < new Date()) A.cancel(t.id, 1);
  });
}

/* ---------- Halaman ---------- */
let F = { q: '', k: '', c: '', p: '', o: '' },
  E = null;
const R = {
  beranda:
    () => `<div class="hero"><h1>Tanaman hias pilihan, langsung ke rumah Anda</h1><p>Katalog lengkap dengan panduan perawatan, tersedia 24 jam.</p>
<form onsubmit="F.q=this.q.value;location.hash='#/katalog';return false" style="max-width:420px;margin:auto;display:flex;gap:6px"><input name="q" placeholder="Cari tanaman..." style="margin:0"><button>Cari</button></form></div>
<h2>Kategori</h2><div class="f">${D.k.map((k) => `<a class="btn s" href="#/katalog" onclick="F.k='${k}'">${k}</a>`).join('')}</div>
<h2>Tanaman terbaru</h2><div class="grid">${D.p
      .filter((p) => p.a)
      .slice(-4)
      .reverse()
      .map(card)
      .join('')}</div>
<h2>Tanaman terlaris</h2><div class="grid">${D.p
      .filter((p) => p.a)
      .slice(0, 4)
      .map(card)
      .join('')}</div>`,
  register: () =>
    `<div class="box" style="max-width:440px;margin:auto"><h1>Registrasi</h1><label>Nama</label><input id="n"><label>Email</label><input id="e" type="email"><label>Nomor HP</label><input id="hp"><label>Kata sandi</label><input id="pw" type="password"><label>Konfirmasi kata sandi</label><input id="pw2" type="password"><div class="err" id="er"></div><button onclick="A.reg()">Daftar</button> <a href="#/login">Sudah punya akun?</a></div>`,
  login:
    () => `<div class="box" style="max-width:420px;margin:auto"><h1>Login</h1><label>Email</label><input id="e" type="email"><label>Kata sandi</label><input id="pw" type="password"><div class="err" id="er"></div><button onclick="A.login()">Masuk</button> <a href="#/register">Daftar akun</a>
<p style="font-size:12px">Demo: admin@floraku.id / admin123 &nbsp;|&nbsp; nizar@mail.com / user123</p></div>`,
  katalog:
    () => `<h1>Katalog Tanaman</h1><div class="box f"><div><label>Cari</label><input value="${F.q}" oninput="F.q=this.value;A.L()"></div>
<div><label>Kategori</label><select onchange="F.k=this.value;A.L()"><option value="">Semua</option>${opt(D.k, (x) => x, F.k)}</select></div>
<div><label>Perawatan</label><select onchange="F.p=this.value;A.L()"><option value="">Semua</option>${opt(['mudah', 'sedang', 'sulit'], (x) => x, F.p)}</select></div>
<div><label>Cahaya</label><select onchange="F.c=this.value;A.L()"><option value="">Semua</option>${opt(['teduh', 'sedang', 'penuh'], (x) => x, F.c)}</select></div>
<div><label>Urutkan</label><select onchange="F.o=this.value;A.L()"><option value="">Default</option><option value="a" ${F.o == 'a' ? 'selected' : ''}>Harga termurah</option><option value="d" ${F.o == 'd' ? 'selected' : ''}>Harga termahal</option></select></div></div><div id="list" class="grid"></div>`,
  detail: (id) => {
    const p = P(id);
    if (!p) return '<p>Tanaman tidak ditemukan.</p>';
    return `<div class="row"><div class="ph" style="font-size:140px">${p.e}</div><div><h1>${p.n}</h1><i>${p.l}</i><h2>${rp(p.h)}</h2>
<p>${p.d}</p><p>Ukuran: <b>${p.u}</b><br>Perawatan: <b>${p.p}</b><br>Cahaya: <b>${p.c}</b><br>Stok: <b>${p.s}</b><br>Rating: <b>${rt(p.id)}</b></p>
<div class="f"><input id="qty" type="number" min="1" value="1" style="max-width:90px"><button ${p.s ? '' : 'disabled'} onclick="A.add(${p.id})">${p.s ? 'Tambah ke keranjang' : 'Stok habis'}</button></div></div></div>
<h2>Ulasan</h2>${
      D.ul
        .filter((u) => u.p == p.id)
        .map((u) => `<div class="box"><b>${u.u}</b> ${'★'.repeat(u.r)}<br>${u.k}</div>`)
        .join('') || '<p>Belum ada ulasan.</p>'
    }`;
  },
  keranjang: () => {
    const c = mine();
    return `<h1>Keranjang</h1>${T(
      ['Tanaman', 'Harga', 'Jumlah', 'Subtotal', ''],
      c.map((x) => [
        x.pr.e + ' ' + x.pr.n,
        rp(x.pr.h),
        `<input type="number" min="1" max="${x.pr.s}" value="${x.q}" onchange="A.q(${x.p},this.value)">`,
        rp(x.pr.h * x.q),
        `<button class="d" onclick="A.del(${x.p})">Hapus</button>`,
      ]),
    )}
<h2>Total: ${rp(sum(c))}</h2><a class="btn" href="#/checkout" ${c.length ? '' : 'style="display:none"'}>Checkout</a> <a class="btn s" href="#/katalog">Lanjut belanja</a>`;
  },
  checkout: () => {
    const c = mine(),
      al = D.al.filter((a) => a.u == D.me.id);
    if (!c.length) return '<p>Keranjang kosong. <a href="#/katalog">Belanja dulu</a></p>';
    return `<h1>Checkout dan Konfirmasi</h1><div class="row"><div class="box"><label>Alamat pengiriman</label>${al.length ? `<select id="al" onchange="A.sum()">${al.map((a) => `<option value="${a.id}" ${a.ut ? 'selected' : ''}>${a.pn} - ${a.al}, ${a.kota}</option>`).join('')}</select>` : '<p class="err">Belum ada alamat. <a href="#/profil">Tambah alamat</a></p>'}
<label>Kurir</label><select id="kr" onchange="A.sum()">${D.kr
      .filter((k) => k.a)
      .map((k) => `<option value="${k.id}">${k.n} - ${rp(k.t)}/kg (${k.es})</option>`)
      .join('')}</select></div><div class="box" id="sm"></div></div>`;
  },
  pembayaran: (id) => {
    const t = TR(id);
    if (!t) return '<p>Transaksi tidak ditemukan.</p>';
    return `<h1>Pembayaran</h1><div class="box"><p>Kode: <b>${t.kode}</b> ${bd(t.st)}<br>Total bayar: <b>${rp(t.tot)}</b><br>Batas bayar: <b>${t.bt ? new Date(t.bt).toLocaleString('id-ID') : '-'}</b></p>
${t.cat ? `<p class="err">Catatan admin: ${t.cat}</p>` : ''}${
      t.st == 'menunggu_pembayaran'
        ? `<label>Metode pembayaran</label><select id="mp">${D.mp
            .filter((m) => m.a)
            .map((m) => `<option value="${m.id}">${m.n} - ${m.no} a.n. ${m.an}</option>`)
            .join('')}</select>
<label>Bukti bayar (gambar, maks 2 MB)</label><input id="bk" type="file" accept="image/*"><button onclick="A.pay(${t.id})">Kirim bukti bayar</button>`
        : '<p>Bukti bayar sudah dikirim.</p>'
    }<a class="btn s" href="#/dtrx/${t.id}">Detail transaksi</a></div>`;
  },
  riwayat: () => {
    const s = F.s || '';
    return `<h1>Riwayat Transaksi</h1><select onchange="F.s=this.value;A.go()" style="max-width:260px"><option value="">Semua status</option>${Object.keys(
      ST,
    )
      .map((k) => `<option value="${k}" ${s == k ? 'selected' : ''}>${ST[k]}</option>`)
      .join('')}</select>
${T(
  ['Kode', 'Tanggal', 'Total', 'Status', ''],
  D.t
    .filter((t) => t.u == D.me.id && (!s || t.st == s))
    .reverse()
    .map((t) => [
      t.kode,
      t.tgl.slice(0, 10),
      rp(t.tot),
      bd(t.st),
      `<a href="#/dtrx/${t.id}">Detail</a>`,
    ]),
)}`;
  },
  dtrx: (id) => {
    const t = TR(id);
    if (!t || (t.u != D.me.id && D.me.r != 'admin')) return '<p>Transaksi tidak ditemukan.</p>';
    const a = D.al.find((x) => x.id == t.al),
      k = D.kr.find((x) => x.id == t.kr);
    return `<h1>${t.kode}</h1><p>${bd(t.st)} &nbsp; Resi: <b>${t.resi || '-'}</b></p>${T(
      ['Tanaman', 'Jumlah', 'Harga', 'Subtotal'],
      t.it.map((i) => [P(i.p).n, i.q, rp(i.h), rp(i.q * i.h)]),
    )}
<div class="box">Alamat: ${a ? a.pn + ', ' + a.al + ', ' + a.kota : '-'}<br>Kurir: ${k ? k.n : '-'}<br>Ongkir: ${rp(t.ong)}<br><b>Total: ${rp(t.tot)}</b></div>
${t.st == 'menunggu_pembayaran' ? `<a class="btn" href="#/pembayaran/${t.id}">Bayar</a> <button class="d" onclick="A.cancel(${t.id})">Batalkan pesanan</button>` : ''}
${t.st == 'dikirim' ? `<button onclick="A.recv(${t.id})">Pesanan diterima</button>` : ''}
${t.st == 'selesai' ? '<h2>Beri ulasan</h2>' + t.it.map((i) => `<div class="box"><b>${P(i.p).n}</b><div class="f"><select id="r${i.p}"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select><input id="k${i.p}" placeholder="Komentar"><button onclick="A.rev(${i.p})">Kirim</button></div></div>`).join('') : ''}`;
  },
  profil: () => {
    const m = D.me;
    return `<h1>Profil</h1><div class="row"><div class="box"><h2>Data diri</h2><label>Nama</label><input id="n" value="${m.n}"><label>Email</label><input value="${m.e}" disabled><label>Nomor HP</label><input id="hp" value="${m.hp}"><button onclick="A.prof()">Simpan</button></div>
<div class="box"><h2>Ganti kata sandi</h2><label>Kata sandi lama</label><input id="o" type="password"><label>Kata sandi baru (min. 6)</label><input id="np" type="password"><div class="err" id="er"></div><button onclick="A.pw()">Ganti</button></div></div>
${
  m.r == 'admin'
    ? ''
    : `<h2>Alamat pengiriman</h2>${T(
        ['Penerima', 'Alamat', 'Utama', ''],
        D.al
          .filter((a) => a.u == m.id)
          .map((a) => [
            a.pn + '<br>' + a.hp,
            a.al + ', ' + a.kota + ', ' + a.pv + ' ' + a.pos,
            a.ut ? 'Ya' : `<button class="s" onclick="A.ut(${a.id})">Jadikan utama</button>`,
            `<button class="d" onclick="A.dal(${a.id})">Hapus</button>`,
          ]),
      )}
<div class="box"><h2>Tambah alamat</h2><div class="f"><input id="a1" placeholder="Nama penerima"><input id="a2" placeholder="No. HP"><input id="a3" placeholder="Alamat lengkap"><input id="a4" placeholder="Kota"><input id="a5" placeholder="Provinsi"><input id="a6" placeholder="Kode pos"></div><button onclick="A.aal()">Tambah</button></div>`
}`;
  },
  /* admin */
  'a-dashboard': () => {
    const ok = D.t.filter((t) => ['diproses', 'dikirim', 'selesai'].includes(t.st)),
      today = new Date().toISOString().slice(0, 10);
    return `<h1>Dashboard Admin</h1><div class="st"><div>Transaksi hari ini<b>${D.t.filter((t) => t.tgl.slice(0, 10) == today).length}</b></div><div>Omzet<b>${rp(ok.reduce((a, t) => a + t.tot, 0))}</b></div><div>Menunggu verifikasi<b>${D.t.filter((t) => t.st == 'menunggu_verifikasi').length}</b></div><div>Stok menipis<b>${D.p.filter((p) => p.s <= 5).length}</b></div></div>
<h2>Tanaman stok menipis</h2>${T(
      ['Tanaman', 'Stok'],
      D.p.filter((p) => p.s <= 5).map((p) => [p.n, p.s]),
    )}`;
  },
  'a-produk': () => {
    const p = E
      ? P(E)
      : { n: '', l: '', k: D.k[0], h: '', s: '', u: '', p: 'mudah', c: 'teduh', e: '🌿', d: '' };
    return `<h1>Kelola Kategori dan Produk</h1>${T(
      ['', 'Nama', 'Kategori', 'Harga', 'Stok', 'Status', ''],
      D.p.map((x) => [
        x.e,
        x.n,
        x.k,
        rp(x.h),
        x.s,
        x.a ? 'Aktif' : 'Nonaktif',
        `<button class="s" onclick="E=${x.id};A.go()">Ubah</button> <button class="s" onclick="A.tg('p',${x.id})">${x.a ? 'Nonaktifkan' : 'Aktifkan'}</button>`,
      ]),
    )}
<div class="box"><h2>${E ? 'Ubah' : 'Tambah'} produk</h2><div class="f"><input id="pn" placeholder="Nama" value="${p.n}"><input id="pl" placeholder="Nama latin" value="${p.l}"><select id="pk">${opt(D.k, (x) => x, p.k)}</select><input id="ph" type="number" placeholder="Harga" value="${p.h}"><input id="ps" type="number" placeholder="Stok" value="${p.s}"><input id="pu" placeholder="Ukuran" value="${p.u}"><select id="pp">${opt(['mudah', 'sedang', 'sulit'], (x) => x, p.p)}</select><select id="pc">${opt(['teduh', 'sedang', 'penuh'], (x) => x, p.c)}</select><input id="pe" placeholder="Emoji/foto" value="${p.e}"></div><textarea id="pd" placeholder="Deskripsi">${p.d}</textarea><div class="err" id="er"></div><button onclick="A.sp()">Simpan</button> ${E ? '<button class="s" onclick="E=null;A.go()">Batal</button>' : ''}</div>
<div class="box"><h2>Kategori</h2>${D.k.join(', ')}<div class="f"><input id="nk" placeholder="Kategori baru"><button onclick="A.ak()">Tambah kategori</button></div></div>`;
  },
  'a-stok': () =>
    `<h1>Kelola Stok</h1>${T(
      ['Tanaman', 'Stok', 'Ubah stok'],
      D.p.map((p) => [
        p.n,
        `<span class="${p.s <= 5 ? 'low' : ''}">${p.s}${p.s <= 5 ? ' (menipis)' : ''}</span>`,
        `<div class="f"><input type="number" min="0" id="s${p.id}" value="${p.s}"><button onclick="A.stk(${p.id})">Simpan</button></div>`,
      ]),
    )}`,
  'a-transaksi': () =>
    `<h1>Kelola Transaksi dan Verifikasi</h1>${T(
      ['Kode', 'Pemesan', 'Total', 'Status', 'Bukti', 'Aksi'],
      D.t
        .slice()
        .reverse()
        .map((t) => [
          t.kode,
          U(t.u).n,
          rp(t.tot),
          bd(t.st),
          t.bukti || '-',
          (t.st == 'menunggu_verifikasi'
            ? `<button onclick="A.ver(${t.id},1)">Terima</button> <button class="d" onclick="A.ver(${t.id},0)">Tolak</button>`
            : '') +
            (t.st == 'diproses' ? `<button onclick="A.resi(${t.id})">Kirim + resi</button>` : '') +
            ` <a href="#/dtrx/${t.id}">Detail</a>`,
        ]),
    )}`,
  'a-pengguna': () =>
    `<h1>Kelola Pengguna</h1>${T(
      ['Nama', 'Email', 'Peran', 'Status', ''],
      D.u.map((u) => [
        u.n,
        u.e,
        u.r,
        u.a ? 'Aktif' : 'Nonaktif',
        u.r == 'admin'
          ? ''
          : `<button class="s" onclick="A.tg('u',${u.id})">${u.a ? 'Nonaktifkan' : 'Aktifkan'}</button>`,
      ]),
    )}`,
  'a-pengaturan': () => `<h1>Pengaturan Pembayaran dan Kurir</h1><h2>Metode pembayaran</h2>${T(
    ['Bank', 'No. rekening', 'Atas nama', 'Status', ''],
    D.mp.map((m) => [
      m.n,
      m.no,
      m.an,
      m.a ? 'Aktif' : 'Nonaktif',
      `<button class="s" onclick="A.tg('mp',${m.id})">${m.a ? 'Nonaktifkan' : 'Aktifkan'}</button>`,
    ]),
  )}
<div class="f"><input id="m1" placeholder="Bank"><input id="m2" placeholder="No. rekening"><input id="m3" placeholder="Atas nama"><button onclick="A.amp()">Tambah</button></div>
<h2>Kurir</h2>${T(
    ['Kurir', 'Tarif/kg', 'Estimasi', 'Status', ''],
    D.kr.map((k) => [
      k.n,
      rp(k.t),
      k.es,
      k.a ? 'Aktif' : 'Nonaktif',
      `<button class="s" onclick="A.tg('kr',${k.id})">${k.a ? 'Nonaktifkan' : 'Aktifkan'}</button>`,
    ]),
  )}
<div class="f"><input id="k1" placeholder="Nama kurir"><input id="k2" type="number" placeholder="Tarif/kg"><input id="k3" placeholder="Estimasi"><button onclick="A.akr()">Tambah</button></div>`,
  'a-laporan': () =>
    `<h1>Laporan Penjualan</h1><div class="f" style="max-width:480px"><div><label>Dari</label><input type="date" id="d1" oninput="A.lap()"></div><div><label>Sampai</label><input type="date" id="d2" oninput="A.lap()"></div></div><div id="lap"></div>`,
};

/* ---------- Aksi ---------- */
const A = {
  go() {
    go();
  },
  L() {
    const l = D.p.filter(
      (p) =>
        p.a &&
        (!F.q || (p.n + p.l).toLowerCase().includes(F.q.toLowerCase())) &&
        (!F.k || p.k == F.k) &&
        (!F.p || p.p == F.p) &&
        (!F.c || p.c == F.c),
    );
    if (F.o) l.sort((a, b) => (F.o == 'a' ? a.h - b.h : b.h - a.h));
    $('#list').innerHTML = l.map(card).join('') || '<p>Tidak ada tanaman yang sesuai.</p>';
  },
  login() {
    const u = D.u.find((x) => x.e == $('#e').value.trim() && x.pw == $('#pw').value);
    if (!u) return ($('#er').textContent = 'Email atau kata sandi salah.');
    if (!u.a) return ($('#er').textContent = 'Akun nonaktif.');
    D.me = u;
    save();
    location.hash = u.r == 'admin' ? '#/a-dashboard' : '#/beranda';
  },
  out() {
    D.me = null;
    save();
    location.hash = '#/beranda';
  },
  reg() {
    const v = (i) => $('#' + i).value.trim(),
      e = $('#er');
    if (!v('n') || !v('e') || !v('hp') || !v('pw'))
      return (e.textContent = 'Semua kolom wajib diisi.');
    if (!/^\S+@\S+\.\S+$/.test(v('e'))) return (e.textContent = 'Format email tidak valid.');
    if (!/^08\d{8,12}$/.test(v('hp')))
      return (e.textContent = 'Nomor HP harus berawalan 08 (10-14 digit).');
    if (v('pw').length < 6) return (e.textContent = 'Kata sandi minimal 6 karakter.');
    if (v('pw') != v('pw2')) return (e.textContent = 'Konfirmasi kata sandi tidak sama.');
    if (D.u.some((u) => u.e == v('e'))) return (e.textContent = 'Email sudah terdaftar.');
    D.u.push({
      id: nid(D.u),
      n: v('n'),
      e: v('e'),
      hp: v('hp'),
      pw: v('pw'),
      r: 'pelanggan',
      a: 1,
    });
    save();
    msg('Registrasi berhasil, silakan login.');
    location.hash = '#/login';
  },
  add(id) {
    if (!D.me) {
      msg('Silakan login terlebih dahulu.');
      return (location.hash = '#/login');
    }
    const p = P(id),
      q = +$('#qty').value,
      c = D.c.find((x) => x.u == D.me.id && x.p == id),
      tot = (c ? c.q : 0) + q;
    if (!(q > 0)) return msg('Jumlah tidak valid.');
    if (tot > p.s) return msg('Jumlah melebihi stok (' + p.s + ').');
    c ? (c.q = tot) : D.c.push({ u: D.me.id, p: id, q });
    save();
    msg('Ditambahkan ke keranjang.');
    A.nav();
  },
  q(id, v) {
    const c = D.c.find((x) => x.u == D.me.id && x.p == id),
      p = P(id);
    c.q = Math.max(1, Math.min(+v || 1, p.s));
    save();
    go();
  },
  del(id) {
    D.c = D.c.filter((x) => !(x.u == D.me.id && x.p == id));
    save();
    go();
  },
  sum() {
    const c = mine(),
      k = D.kr.find((x) => x.id == $('#kr').value),
      kg = Math.ceil(c.reduce((a, x) => a + x.q * x.pr.w, 0) / 1000),
      o = k ? k.t * kg : 0,
      s = sum(c);
    $('#sm').innerHTML =
      `<h2>Ringkasan</h2>${c.map((x) => `<div>${x.pr.n} x ${x.q} = ${rp(x.pr.h * x.q)}</div>`).join('')}<hr>Subtotal: ${rp(s)}<br>Ongkir (${kg} kg): ${rp(o)}<h2>Total: ${rp(s + o)}</h2><button onclick="A.co()" ${$('#al') ? '' : 'disabled'}>Buat pesanan</button>`;
    A.o = o;
  },
  co() {
    const c = mine(),
      s = sum(c),
      id = nid(D.t),
      n = new Date();
    if (c.some((x) => x.q > x.pr.s)) return msg('Stok tidak mencukupi.');
    c.forEach((x) => (x.pr.s -= x.q));
    D.t.push({
      id,
      kode:
        'FLR-' + n.toISOString().slice(0, 10).replace(/-/g, '') + '-' + String(id).padStart(3, '0'),
      u: D.me.id,
      al: +$('#al').value,
      kr: +$('#kr').value,
      it: c.map((x) => ({ p: x.p, q: x.q, h: x.pr.h })),
      sub: s,
      ong: A.o,
      tot: s + A.o,
      st: 'menunggu_pembayaran',
      tgl: n.toISOString(),
      bt: new Date(n.getTime() + 864e5).toISOString(),
      resi: '',
      met: 0,
      bukti: '',
      cat: '',
    });
    D.c = D.c.filter((x) => x.u != D.me.id);
    save();
    location.hash = '#/pembayaran/' + id;
  },
  pay(id) {
    const f = $('#bk').files[0];
    if (!f) return msg('Pilih berkas bukti bayar.');
    if (!f.type.startsWith('image/')) return msg('Berkas harus berupa gambar.');
    if (f.size > 2097152) return msg('Ukuran maksimal 2 MB.');
    const t = TR(id);
    t.met = +$('#mp').value;
    t.bukti = f.name;
    t.st = 'menunggu_verifikasi';
    t.cat = '';
    save();
    msg('Bukti bayar terkirim.');
    location.hash = '#/dtrx/' + id;
  },
  cancel(id, auto) {
    const t = TR(id);
    t.st = 'dibatalkan';
    t.it.forEach((i) => (P(i.p).s += i.q));
    save();
    if (!auto) {
      msg('Pesanan dibatalkan, stok dikembalikan.');
      go();
    }
  },
  recv(id) {
    TR(id).st = 'selesai';
    save();
    go();
  },
  rev(p) {
    const k = $('#k' + p).value.trim();
    if (!k) return msg('Isi komentar.');
    if (D.ul.some((u) => u.p == p && u.u == D.me.n)) return msg('Anda sudah mengulas tanaman ini.');
    D.ul.push({ p, u: D.me.n, r: +$('#r' + p).value, k });
    save();
    msg('Ulasan tersimpan.');
  },
  prof() {
    const n = $('#n').value.trim(),
      h = $('#hp').value.trim();
    if (!n || !/^08\d{8,12}$/.test(h)) return msg('Nama dan nomor HP (08...) wajib valid.');
    D.me.n = n;
    D.me.hp = h;
    save();
    msg('Profil diperbarui.');
    A.nav();
  },
  pw() {
    if ($('#o').value != D.me.pw) return ($('#er').textContent = 'Kata sandi lama salah.');
    if ($('#np').value.length < 6)
      return ($('#er').textContent = 'Kata sandi baru minimal 6 karakter.');
    D.me.pw = $('#np').value;
    save();
    msg('Kata sandi diganti.');
    go();
  },
  aal() {
    const v = (i) => $('#a' + i).value.trim();
    if ([1, 2, 3, 4, 5, 6].some((i) => !v(i))) return msg('Semua kolom alamat wajib diisi.');
    D.al.push({
      id: nid(D.al),
      u: D.me.id,
      pn: v(1),
      hp: v(2),
      al: v(3),
      kota: v(4),
      pv: v(5),
      pos: v(6),
      ut: D.al.some((a) => a.u == D.me.id) ? 0 : 1,
    });
    save();
    go();
  },
  dal(id) {
    D.al = D.al.filter((a) => a.id != id);
    save();
    go();
  },
  ut(id) {
    D.al.forEach((a) => {
      if (a.u == D.me.id) a.ut = a.id == id ? 1 : 0;
    });
    save();
    go();
  },
  tg(c, id) {
    const o = D[c].find((x) => x.id == id);
    o.a = o.a ? 0 : 1;
    save();
    go();
  },
  sp() {
    const v = (i) => $('#p' + i).value.trim(),
      h = +v('h'),
      s = +v('s');
    if (!v('n') || !(h > 0) || !(s >= 0) || $('#ps').value === '')
      return ($('#er').textContent = 'Nama, harga (>0), dan stok (>=0) wajib diisi.');
    const o = {
      n: v('n'),
      l: v('l'),
      k: v('k'),
      h,
      s,
      u: v('u'),
      p: v('p'),
      c: v('c'),
      e: v('e') || '🌿',
      d: $('#pd').value,
    };
    E ? Object.assign(P(E), o) : D.p.push({ id: nid(D.p), w: 800, a: 1, ...o });
    E = null;
    save();
    msg('Produk disimpan.');
    go();
  },
  ak() {
    const k = $('#nk').value.trim();
    if (!k || D.k.includes(k)) return msg('Kategori kosong atau sudah ada.');
    D.k.push(k);
    save();
    go();
  },
  stk(id) {
    const v = +$('#s' + id).value;
    if (!(v >= 0)) return msg('Stok tidak valid.');
    P(id).s = v;
    save();
    msg('Stok diperbarui.');
    go();
  },
  ver(id, ok) {
    const t = TR(id);
    if (ok) t.st = 'diproses';
    else {
      t.cat = prompt('Alasan penolakan:') || 'Bukti tidak valid';
      t.st = 'menunggu_pembayaran';
      t.bukti = '';
    }
    save();
    go();
  },
  resi(id) {
    const r = prompt('Masukkan nomor resi:');
    if (!r) return;
    const t = TR(id);
    t.resi = r;
    t.st = 'dikirim';
    save();
    go();
  },
  amp() {
    const v = (i) => $('#m' + i).value.trim();
    if (!v(1) || !v(2) || !v(3)) return msg('Lengkapi data.');
    D.mp.push({ id: nid(D.mp), n: v(1), no: v(2), an: v(3), a: 1 });
    save();
    go();
  },
  akr() {
    const v = (i) => $('#k' + i).value.trim();
    if (!v(1) || !(+v(2) > 0) || !v(3)) return msg('Lengkapi data (tarif > 0).');
    D.kr.push({ id: nid(D.kr), n: v(1), t: +v(2), es: v(3), a: 1 });
    save();
    go();
  },
  lap() {
    const a = $('#d1').value,
      b = $('#d2').value,
      l = D.t.filter(
        (t) =>
          ['diproses', 'dikirim', 'selesai'].includes(t.st) &&
          (!a || t.tgl.slice(0, 10) >= a) &&
          (!b || t.tgl.slice(0, 10) <= b),
      ),
      m = {};
    l.forEach((t) => t.it.forEach((i) => (m[i.p] = (m[i.p] || 0) + i.q)));
    $('#lap').innerHTML =
      `<div class="st"><div>Jumlah pesanan<b>${l.length}</b></div><div>Total omzet<b>${rp(l.reduce((s, t) => s + t.tot, 0))}</b></div></div><h2>Tanaman terlaris</h2>${T(
        ['Tanaman', 'Terjual'],
        Object.entries(m)
          .sort((x, y) => y[1] - x[1])
          .map(([i, q]) => [P(i).n, q]),
      )}<h2>Transaksi</h2>${T(
        ['Kode', 'Tanggal', 'Total', 'Status'],
        l.map((t) => [t.kode, t.tgl.slice(0, 10), rp(t.tot), bd(t.st)]),
      )}`;
  },
  nav() {
    const m = D.me,
      n = m ? mine().length : 0;
    $('#nav').innerHTML = !m
      ? '<a href="#/beranda">Beranda</a><a href="#/katalog">Katalog</a><a href="#/login">Login</a><a href="#/register">Daftar</a>'
      : m.r == 'admin'
        ? [
            'dashboard|Dashboard',
            'produk|Produk',
            'stok|Stok',
            'transaksi|Transaksi',
            'pengguna|Pengguna',
            'pengaturan|Pengaturan',
            'laporan|Laporan',
          ]
            .map((x) => `<a href="#/a-${x.split('|')[0]}">${x.split('|')[1]}</a>`)
            .join('') + '<a href="#/profil">Profil</a><a href="#" onclick="A.out()">Keluar</a>'
        : `<a href="#/beranda">Beranda</a><a href="#/katalog">Katalog</a><a href="#/keranjang">Keranjang (${n})</a><a href="#/riwayat">Riwayat</a><a href="#/profil">${m.n.split(' ')[0]}</a><a href="#" onclick="A.out()">Keluar</a>`;
  },
};

/* ---------- Router ---------- */
function go() {
  sweep();
  let [r, a] = (location.hash.slice(2) || 'beranda').split('/');
  const m = D.me;
  if (r.startsWith('a-') && (!m || m.r != 'admin')) r = 'login';
  if (['keranjang', 'checkout', 'pembayaran', 'riwayat', 'dtrx', 'profil'].includes(r) && !m)
    r = 'login';
  if (!R[r]) r = 'beranda';
  A.nav();
  $('#app').innerHTML = R[r](a);
  if (r == 'katalog') A.L();
  if (r == 'checkout' && $('#kr')) A.sum();
  if (r == 'a-laporan') A.lap();
  scrollTo(0, 0);
}
window.addEventListener('hashchange', () => {
  E = null;
  go();
});
go();
