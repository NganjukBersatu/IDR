<script setup>
import Icon from './Icon.vue'
import footerLogo from '../assets/footer-logo.png'
import { socials } from '../data/pages.js'
</script>

<template>
  <footer>
    <div class="wrap">
      <div class="fg">
        <div>
          <img class="logo" :src="footerLogo" alt="IDR">
          <p style="display:block">Integrated Digital Retail. Aplikasi kasir modern untuk usaha yang ingin bertumbuh.</p>
          <div class="soc">
            <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" :aria-label="s.label">
              <Icon :name="s.icon" :class="{ f: s.filled }" />
            </a>
          </div>
        </div>

        <div>
          <h4>Menu</h4>
          <RouterLink to="/">Beranda</RouterLink>
          <RouterLink to="/fitur">Fitur</RouterLink>
          <RouterLink to="/harga">Harga</RouterLink>
          <RouterLink to="/testimoni">Testimoni</RouterLink>
          <RouterLink to="/tentang">Tentang</RouterLink>
          <RouterLink to="/kontak">Kontak</RouterLink>
        </div>

        <div>
          <h4>Produk</h4>
          <RouterLink to="/fitur">Kasir</RouterLink>
          <RouterLink to="/fitur">Stok</RouterLink>
          <RouterLink to="/fitur">Laporan</RouterLink>
          <RouterLink to="/harga">Paket Harga</RouterLink>
        </div>

        <div>
          <h4>Bantuan</h4>
          <RouterLink to="/kontak">Konsultasi</RouterLink>
          <RouterLink to="/harga">Paket harga</RouterLink>
          <RouterLink to="/kontak">Hubungi kami</RouterLink>
          <RouterLink to="/testimoni">Testimoni</RouterLink>
        </div>

        <div>
          <h4>Kontak</h4>
          <p><Icon name="mail" />idrofficialcorp@gmail.com</p>
          <p><Icon name="phone" />+62 812-0000-0000</p>
          <p><Icon name="pin" />Indonesia</p>
        </div>
      </div>

      <div class="copy">© 2026 IDR – Integrated Digital Retail. Hak cipta dilindungi.</div>
    </div>
  </footer>
</template>