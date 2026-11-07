<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import logo from '../assets/logo.png'

const open = ref(false)
const links = [
  { to: '/', label: 'Beranda' },
  { to: '/fitur', label: 'Fitur' },
  { to: '/harga', label: 'Harga' },
  { to: '/testimoni', label: 'Testimoni' },
  { to: '/tentang', label: 'Tentang' },
  { to: '/kontak', label: 'Kontak' },
]
</script>

<template>
  <div class="tb">
    <div class="wrap">
      <RouterLink class="tbl" to="/kontak">
        <Icon name="gift" /><b>Konsultasi gratis</b>
        <span class="hd">· ceritakan kebutuhan usaha Anda, tim kami siap membantu</span>
      </RouterLink>
      <div class="soc">
        <span class="hd">@idrofficialcorp</span>
        <a href="https://instagram.com/idrofficialcorp" target="_blank" rel="noopener" aria-label="Instagram"><Icon name="ig" /></a>
        <a href="https://tiktok.com/@idrofficialcorp" target="_blank" rel="noopener" aria-label="TikTok"><Icon name="tt" f /></a>
        <a href="https://x.com/idrofficialcorp" target="_blank" rel="noopener" aria-label="X / Twitter"><Icon name="xx" f /></a>
      </div>
    </div>
  </div>

  <header>
    <div class="wrap">
      <nav>
        <RouterLink to="/" aria-label="IDR"><img class="logo" :src="logo" alt="IDR" /></RouterLink>
        <ul class="menu" :class="{ open }">
          <li v-for="l in links" :key="l.to">
            <RouterLink :to="l.to" @click="open = false">{{ l.label }}</RouterLink>
          </li>
        </ul>
        <RouterLink class="btn" to="/kontak">Konsultasi Gratis <Icon name="arrow" /></RouterLink>
        <button class="burger" aria-label="Menu" @click="open = !open"><Icon name="i-menu" /></button>
      </nav>
    </div>
  </header>
</template>