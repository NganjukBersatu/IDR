<script setup>
import Icon from "../components/Icon.vue";
import HeroPos from "../components/HeroPos.vue";
import SolutionTabs from "../components/SolutionTabs.vue";
import PricingPlans from "../components/PricingPlans.vue";
import FaqList from "../components/FaqList.vue";
import { features, testimonials } from "../data/home";
import logo from '../assets/logo.png'

const orders = [
  ["Meja 4 · Kopi Susu ×2", "Diproses"],
  ["Meja 7 · Roti Bakar", "Siap"],
  ["Online · Nasi Goreng", "Baru"],
  ["Kasir 2 · Es Teh ×3", "Selesai"],
];
const channels = [
  ["Toko fisik", "Terhubung"],
  ["Marketplace", "Terhubung"],
  ["Website pesan online", "Terhubung"],
  ["WhatsApp pelanggan", "Aktif"],
];
const bars = [45, 62, 38, 80, 70, 95, 55];
const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

const eco = [
  {
    icon: "card",
    title: "Pembayaran digital",
    desc: "Terima tunai, QRIS, e-wallet, kartu, dan transfer bank dalam satu kasir.",
  },
  {
    icon: "link",
    title: "Integrasi marketplace",
    desc: "Sinkronkan produk dan stok dengan toko online dari satu dashboard.",
  },
  {
    icon: "receipt",
    title: "Perangkat & printer",
    desc: "Kompatibel dengan tablet, printer thermal, laci kas, dan barcode scanner.",
  },
  {
    icon: "support",
    title: "Pendampingan usaha",
    desc: "Tim onboarding membantu setup awal sampai kasirmu siap dipakai.",
  },
];

const cmp = [
  [
    "Semua dalam satu aplikasi",
    "Kasir, stok, laporan, dan pelanggan tanpa biaya tambahan",
    "Lengkap",
    "Terpisah-pisah",
  ],
  [
    "Multi pembayaran",
    "Tunai, QRIS, e-wallet, kartu, dan transfer",
    "Lengkap",
    "Terbatas",
  ],
  [
    "Keamanan terjamin",
    "Data terenkripsi dan hak akses per peran karyawan",
    "Terjamin",
    "Rawan hilang",
  ],
  [
    "Harga jelas",
    "Paket sesuai skala usaha, mulai dari gratis",
    "Transparan",
    "Biaya tak terduga",
  ],
];

const pts = [
  {
    icon: "target",
    title: "Dibuat untuk pelaku usaha",
    desc: "Antarmuka sederhana, bisa dipakai kasir baru dalam hitungan menit.",
  },
  {
    icon: "shield",
    title: "Aman dan andal",
    desc: "Data terenkripsi dan dicadangkan otomatis setiap hari.",
  },
  {
    icon: "support",
    title: "Tim lokal yang siap membantu",
    desc: "Dukungan berbahasa Indonesia, setiap hari kerja.",
  },
];

const steps = [
  { title: "Daftar gratis", desc: "Buat akun dan atur profil toko Anda." },
  { title: "Input produk", desc: "Tambah manual atau impor dari spreadsheet." },
  { title: "Mulai jualan", desc: "Buka kasir di HP, tablet, atau komputer." },
];

const apa = [
  {
    title: "Transaksi lebih cepat",
    desc: "Antrean pendek dan salah input berkurang.",
  },
  {
    title: "Stok real-time",
    desc: "Tahu kapan harus restock tanpa hitung manual.",
  },
  {
    title: "Laporan detail",
    desc: "Penjualan harian hingga bulanan siap dianalisis.",
  },
  {
    title: "Pelanggan terkelola",
    desc: "Riwayat belanja dan promo yang lebih tepat.",
  },
];
</script>

<template>
  <!-- HERO -->
  <section class="hs">
    <div class="wrap hero">
      <div>
        <h1>Kasir pintar untuk usaha yang makin bertumbuh.</h1>
        <p class="lead">
          IDR (Integrated Digital Retail) menyatukan kasir, stok, laporan, dan
          pelanggan dalam satu aplikasi. Transaksi lebih cepat, catatan lebih
          rapi.
        </p>
        <div class="tags">
          <span>Kasir</span><span>Stok</span><span>Laporan</span
          ><span>Pelanggan</span><span>Karyawan</span><span>Order online</span>
        </div>
        <div class="cta">
          <RouterLink class="btn" to="/harga"
            >Cek harga<Icon name="arrow"
          /></RouterLink>
          <RouterLink class="btn o" to="/kontak">Konsultasi</RouterLink>
        </div>
        <div class="checks">
          <span><Icon name="check" />Setup 5 menit</span>
          <span><Icon name="check" />Tanpa kartu kredit</span>
          <span><Icon name="check" />Dukungan gratis</span>
        </div>
      </div>
      <HeroPos />
    </div>
  </section>

  <!-- STATISTIK -->
  <div class="stats">
    <div class="wrap">
      <div><b>5.000+</b><span>Toko aktif</span></div>
      <div><b>2 Juta+</b><span>Transaksi / bulan</span></div>
      <div><b>99,9%</b><span>Uptime sistem</span></div>
      <div><b>4,9/5</b><span>Rating pengguna</span></div>
    </div>
  </div>

  <!-- FITUR UNGGULAN -->
  <section>
    <div class="wrap center">
      <h2>Fitur untuk hemat waktu dan biaya operasional.</h2>
      <p class="lead">
        Dari pencatatan transaksi sampai laporan akhir bulan, semuanya terkelola
        dalam satu platform.
      </p>

      <div class="fb" style="text-align: left">
        <div>
          <h3>Alur pesanan lebih singkat, antrean lebih pendek</h3>
          <p>
            Pesanan dari kasir, meja, atau online langsung tercatat. Stok
            berkurang otomatis dan struk terkirim tanpa input ulang.
          </p>
          <div class="fl">
            <RouterLink to="/fitur">Kasir</RouterLink
            ><RouterLink to="/fitur">Karyawan</RouterLink
            ><RouterLink to="/fitur">Stok</RouterLink>
          </div>
        </div>
        <div class="fv">
          <div v-for="o in orders" :key="o[0]" class="ln">
            <span>{{ o[0] }}</span
            ><span class="st">{{ o[1] }}</span>
          </div>
        </div>
      </div>

      <div class="fb r" style="text-align: left">
        <div>
          <h3>Pantau performa usaha dari genggaman</h3>
          <p>
            Lihat penjualan harian, produk terlaris, dan laba rugi dari HP kapan
            saja, dengan akses khusus pemilik.
          </p>
          <div class="fl">
            <RouterLink to="/fitur">Laporan</RouterLink
            ><RouterLink to="/fitur">Akses pemilik</RouterLink
            ><RouterLink to="/fitur">Akuntansi</RouterLink>
          </div>
        </div>
        <div class="fv">
          <b>Penjualan minggu ini</b>
          <div class="chart">
            <i
              v-for="(h, i) in bars"
              :key="i"
              :class="{ hi: i === 5 }"
              :style="{ height: h + '%' }"
            ></i>
          </div>
          <div class="cl">
            <span v-for="d in days" :key="d">{{ d }}</span>
          </div>
        </div>
      </div>

      <div class="fb" style="text-align: left">
        <div>
          <h3>Kembangkan penjualan offline dan online</h3>
          <p>
            Satukan toko fisik, marketplace, dan program member dalam satu
            dashboard agar pelanggan terus kembali.
          </p>
          <div class="fl">
            <RouterLink to="/fitur">Member</RouterLink
            ><RouterLink to="/fitur">Integrasi</RouterLink
            ><RouterLink to="/fitur">Order online</RouterLink>
          </div>
        </div>
        <div class="fv">
          <div v-for="c in channels" :key="c[0]" class="ln">
            <span>{{ c[0] }}</span
            ><span class="st">{{ c[1] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- JENIS USAHA -->
  <section class="alt">
    <div class="wrap center">
      <h2>Pilihan tepat untuk berbagai jenis usaha.</h2>
      <p class="lead">
        Pilih jenis usahamu dan lihat fitur yang paling membantu.
      </p>
      <SolutionTabs />
    </div>
  </section>

  <!-- EKOSISTEM -->
  <section>
    <div class="wrap center">
      <h2>Ekosistem lengkap untuk menumbuhkan usaha.</h2>
      <p class="lead">
        Selain kasir, IDR melengkapi kebutuhan operasional harianmu.
      </p>
      <div class="g4" style="text-align: left">
        <div v-for="e in eco" :key="e.title" class="card">
          <div class="ic"><Icon :name="e.icon" /></div>
          <h3>{{ e.title }}</h3>
          <p>{{ e.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PERBANDINGAN -->
  <section class="alt">
    <div class="wrap center">
      <h2>Kenapa memilih IDR?</h2>
      <p class="lead">
        Fitur, layanan, dan pendampingan lengkap supaya usahamu cepat naik
        kelas.
      </p>
      <div class="tw" style="text-align: left">
        <table class="cmp">
          <thead>
            <tr>
              <th>Kebutuhan usaha</th>
              <th>IDR</th>
              <th>Catat manual / aplikasi terpisah</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in cmp" :key="r[0]">
              <td>
                <b>{{ r[0] }}</b
                ><small>{{ r[1] }}</small>
              </td>
              <td class="y"><Icon name="check" /> {{ r[2] }}</td>
              <td class="n">{{ r[3] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- TENTANG -->
  <section>
    <div class="wrap two">
      <div class="logo-box">
        <img :src="logo" alt="IDR" />
        <p>Integrated Digital Retail</p>
      </div>
      <div>
        <h2>Kami bantu retail Indonesia naik kelas.</h2>
        <p>
          IDR adalah aplikasi kasir all-in-one yang lahir dari satu masalah
          sederhana: pemilik usaha terlalu sibuk mencatat, sampai lupa
          bertumbuh. Kami menyatukan penjualan, stok, dan laporan agar Anda
          fokus pada pelanggan.
        </p>
        <ul class="pts">
          <li v-for="p in pts" :key="p.title">
            <div class="ic"><Icon :name="p.icon" /></div>
            <div>
              <b>{{ p.title }}</b
              ><span>{{ p.desc }}</span>
            </div>
          </li>
        </ul>
        <RouterLink class="btn o" to="/tentang"
          >Kenali kami lebih jauh <Icon name="arrow"
        /></RouterLink>
      </div>
    </div>
  </section>

  <!-- FITUR LAINNYA -->
  <section class="alt">
    <div class="wrap center">
      <h2>Dan masih banyak lagi dalam satu aplikasi.</h2>
      <p class="lead">Dari transaksi pertama hingga laporan akhir bulan.</p>
      <div class="grid" style="text-align: left">
        <div v-for="f in features.slice(0, 6)" :key="f.title" class="card">
          <div class="ic"><Icon :name="f.icon" /></div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3 LANGKAH -->
  <section>
    <div class="wrap center">
      <h2>Mulai dalam 3 langkah</h2>
      <p class="lead">
        Dari daftar sampai transaksi pertama, kurang dari 10 menit.
      </p>
      <div class="steps" style="text-align: left">
        <div v-for="(s, i) in steps" :key="s.title" class="step">
          <div class="n">{{ i + 1 }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONI -->
  <section class="alt">
    <div class="wrap center">
      <h2>Dipercaya pemilik usaha di seluruh Indonesia.</h2>
      <p class="lead">
        Cerita nyata dari toko, kafe, dan retail yang sudah beralih ke IDR.
      </p>
      <div class="tgrid" style="text-align: left">
        <div v-for="t in testimonials" :key="t.name" class="tc">
          <div class="tt">
            <div class="q"><Icon name="quote" f /></div>
            <span class="res">{{ t.result }}</span>
          </div>
          <div class="stars">
            <Icon v-for="n in 5" :key="n" name="star" f />
          </div>
          <p>“{{ t.quote }}”</p>
          <div class="who">
            <div class="av">{{ t.init }}</div>
            <div>
              <b>{{ t.name }}</b
              ><span>{{ t.role }}</span>
            </div>
          </div>
        </div>
      </div>
      <RouterLink class="btn o" style="margin-top: 36px" to="/testimoni"
        >Lihat semua testimoni <Icon name="arrow"
      /></RouterLink>
    </div>
  </section>

  <!-- HARGA -->
  <section>
    <div class="wrap center">
      <h2>Harga jelas, mulai dari gratis.</h2>
      <p class="lead">
        Semua paket berbayar bisa dicoba <b>gratis 14 hari</b>. Tanpa kartu
        kredit.
      </p>
      <PricingPlans />
    </div>
  </section>

  <!-- APA ITU POS -->
  <section class="alt">
    <div class="wrap">
      <div class="two" style="align-items: start">
        <div>
          <h2>Apa itu aplikasi kasir (POS)?</h2>
          <p>
            Aplikasi POS (Point of Sale) adalah sistem untuk memproses transaksi
            penjualan, mencatat stok, dan menyusun laporan secara otomatis.
            Dengan teknologi cloud, data usahamu tersimpan aman dan bisa
            dipantau dari mana saja.
          </p>
          <details class="more">
            <summary>Baca selengkapnya <Icon name="chev" /></summary>
            <div>
              <p>
                Aplikasi POS modern tidak hanya mencatat penjualan. Ia juga
                mengelola stok yang berkurang otomatis, menyimpan data
                pelanggan, dan terhubung dengan pembayaran digital serta
                marketplace.
              </p>
              <p>
                Saat memilih, cocokkan fitur dengan kebutuhan usahamu, pastikan
                dukungan pelanggannya responsif, cek integrasi dengan sistem
                lain, lalu coba dulu lewat masa uji sebelum berlangganan.
              </p>
            </div>
          </details>
        </div>
        <div
          class="grid apa-g"
          style="grid-template-columns: 1fr 1fr; margin-top: 0"
        >
          <div v-for="a in apa" :key="a.title" class="card">
            <h3>{{ a.title }}</h3>
            <p>{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faqs">
    <div class="wrap"><FaqList /></div>
  </section>

  <!-- CTA AKHIR -->
  <section>
    <div class="wrap">
      <div class="ctab">
        <h2>Mulai konsultasi sekarang, gratis!</h2>
        <p class="lead">
          Dari kasir, stok, sampai laporan, kami bantu atur semuanya agar usahamu lebih rapi dan siap bertumbuh. 
        </p>
        <div class="cta" style="justify-content: center">
          <RouterLink class="btn y" to="/kontak"
            >Konsultasi <Icon name="arrow"
          /></RouterLink>
          <RouterLink class="btn w" to="/harga">Lihat paket harga</RouterLink>
        </div>
        <div class="care">
          <span
            ><Icon name="support" />Tim kami siap membantu setiap hari
            kerja</span
          >
          <span><Icon name="phone" />+62 812-0000-0000</span>
        </div>
      </div>
    </div>
  </section>
</template>
