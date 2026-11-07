export const features = [
  { icon: 'receipt', title: 'Kasir & Struk', desc: 'Cetak struk thermal, kirim lewat WhatsApp, atau struk digital.' },
  { icon: 'box', title: 'Manajemen Stok', desc: 'Multi-gudang, stok opname, dan notifikasi stok menipis.' },
  { icon: 'card', title: 'Multi Pembayaran', desc: 'Tunai, QRIS, kartu, e-wallet, dan transfer bank.' },
  { icon: 'chart', title: 'Laporan Penjualan', desc: 'Harian, bulanan, per produk, per kasir, hingga laba rugi.' },
  { icon: 'users', title: 'Pelanggan & Poin', desc: 'Data pelanggan, program member, dan diskon loyalitas.' },
  { icon: 'store', title: 'Multi Cabang', desc: 'Pantau semua outlet dari satu dashboard pusat.' },
  { icon: 'shield', title: 'Hak Akses Karyawan', desc: 'Atur peran pemilik, admin, dan kasir dengan aman.' },
  { icon: 'wifioff', title: 'Mode Offline', desc: 'Tetap jualan saat internet mati, data tersinkron otomatis.' },
  { icon: 'link', title: 'Integrasi', desc: 'Terhubung dengan marketplace, akuntansi, dan printer.' },
]

export const testimonials = [
  { name: 'Rina Wulandari', init: 'RW', role: 'Pemilik Toko Sembako Berkah', result: 'Waktu closing -70%',
    quote: 'Sejak pakai IDR, tutup toko tidak lagi lembur menghitung. Laporan harian langsung rapi dan stok barang selalu terpantau.' },
  { name: 'Budi Santoso', init: 'BS', role: 'Owner Kopi Sudut, 3 outlet', result: 'Omzet +28%',
    quote: 'Tiga cabang kini saya pantau dari satu layar. Kasir baru cepat paham, QRIS lancar, dan omzet naik sejak ada laporan produk terlaris.' },
  { name: 'Dewi Anggraeni', init: 'DA', role: 'Manajer Butik Lestari', result: 'Repeat order +35%',
    quote: 'Fitur member dan poin bikin pelanggan balik lagi. Dukungan timnya responsif, pertanyaan saya dijawab di hari yang sama.' },
]

export const faqs = [
  { q: 'Perangkat apa saja yang didukung?', a: 'IDR berjalan di Android, iOS, tablet, dan browser komputer. Satu akun bisa dipakai di banyak perangkat sekaligus.' },
  { q: 'Bagaimana cara kerja trial 14 hari?', a: 'Anda bisa memakai semua fitur paket Bisnis selama 14 hari tanpa kartu kredit. Setelah itu pilih paket atau tetap di Starter yang gratis.' },
  { q: 'Apakah data saya aman?', a: 'Data dienkripsi dan dicadangkan otomatis setiap hari, sehingga tetap aman meski perangkat hilang atau rusak.' },
  { q: 'Bisakah impor produk dari Excel?', a: 'Bisa. Unggah file spreadsheet sesuai template dan ratusan produk langsung masuk dalam hitungan detik.' },
  { q: 'Apakah IDR tetap jalan saat internet mati?', a: 'Ya, mode offline memungkinkan Anda tetap berjualan. Data otomatis tersinkron begitu internet kembali.' },
  { q: 'Printer struk apa yang kompatibel?', a: 'IDR mendukung printer thermal Bluetooth dan USB 58mm maupun 80mm yang umum di pasaran.' },
  { q: 'Bisakah pindah atau berhenti kapan saja?', a: 'Bisa. Tidak ada kontrak mengikat, Anda dapat upgrade, turun paket, atau berhenti kapan pun.' },
]

export const plans = [
  { name: 'Starter', desc: 'Untuk usaha yang baru mulai.', monthly: 0, yearly: 0, cta: 'Mulai Gratis',
    features: ['1 kasir & 1 outlet', 'Hingga 100 produk', 'Laporan penjualan dasar', 'Struk digital', 'Dukungan via email'] },
  { name: 'Bisnis', desc: 'Untuk toko yang sedang berkembang.', monthly: 149000, yearly: 119000, cta: 'Konsultasi Gratis', pop: true,
    features: ['5 kasir & 1 outlet', 'Produk tak terbatas', 'Laporan lengkap & laba rugi', 'Member, poin & diskon', 'Mode offline', 'Dukungan WhatsApp'] },
  { name: 'Enterprise', desc: 'Untuk jaringan multi cabang.', monthly: 399000, yearly: 319000, cta: 'Konsultasi Gratis',
    features: ['Kasir & outlet tak terbatas', 'Dashboard pusat multi cabang', 'Integrasi & API', 'Hak akses lanjutan', 'Manajer akun khusus', 'Dukungan prioritas 24/7'] },
]

export const bizDemo = [
  { name: 'Kafe & F&B', caption: 'QR E-Menu: pelanggan pesan langsung dari meja', total: 'Rp 69.000',
    rows: [['Kopi Susu Aren ×2', 'Rp 36.000'], ['Roti Bakar Coklat', 'Rp 18.000'], ['Air Mineral ×3', 'Rp 15.000']] },
  { name: 'Toko Retail', caption: 'Scan barcode, varian ukuran dan warna otomatis', total: 'Rp 235.000',
    rows: [['Kaos Polos M ×2', 'Rp 130.000'], ['Tote Bag Kanvas', 'Rp 45.000'], ['Topi Baseball', 'Rp 60.000']] },
  { name: 'Jasa & Bengkel', caption: 'Riwayat servis dengan pengingat otomatis', total: 'Rp 260.000',
    rows: [['Ganti Oli Mesin', 'Rp 85.000'], ['Servis Rem', 'Rp 120.000'], ['Filter Udara', 'Rp 55.000']] },
  { name: 'Salon & Beauty', caption: 'Komisi karyawan dan jadwal booking terpantau', total: 'Rp 165.000',
    rows: [['Potong Rambut', 'Rp 50.000'], ['Creambath', 'Rp 75.000'], ['Hair Tonic', 'Rp 40.000']] },
]

export const solusi = [
  { name: 'Food & Beverages', desc: 'Kelola pesanan, meja, stok bahan, dan laporan dalam satu sistem untuk restoran, kafe, dan katering.',
    points: ['Denah meja dan QR E-Menu', 'Stok bahan dan resep otomatis', 'Printer dapur dan struk terpisah'],
    types: ['Restoran', 'Kafe', 'Katering', 'Bakery', 'Cloud kitchen', 'Foodcourt'] },
  { name: 'Retail & Grosir', desc: 'Scan barcode, kelola varian dan harga bertingkat, lalu pantau stok semua gudang.',
    points: ['Barcode dan varian produk', 'Harga grosir dan member', 'Stok opname dan notifikasi menipis'],
    types: ['Minimarket', 'Toko kelontong', 'Fashion', 'Toko bangunan', 'Pet shop', 'Elektronik'] },
  { name: 'Jasa & Beauty', desc: 'Atur jadwal booking, komisi karyawan, dan riwayat pelanggan untuk salon, bengkel, dan layanan lain.',
    points: ['Booking dan pengingat otomatis', 'Komisi per layanan dan produk', 'Riwayat pelanggan lengkap'],
    types: ['Salon', 'Barbershop', 'Klinik kecantikan', 'Spa', 'Bengkel', 'Car wash'] },
  { name: 'Multi Cabang', desc: 'Pantau banyak outlet dari satu dashboard pusat dengan hak akses yang rapi.',
    points: ['Dashboard pusat semua outlet', 'Hak akses pemilik, admin, kasir', 'Laporan gabungan per cabang'],
    types: ['Franchise', 'Waralaba', 'Jaringan toko', 'Mall tenant', 'Event dan pop-up'] },
]