<script setup>
import Icon from '../components/Icon.vue'
import logo from '../assets/logo.png'
</script>

<template>
  <div class="page show">
    <section class="hs">
      <div class="wrap two">
        <div>
          <h1>Tentang IDR</h1>
          <p class="lead"><b>IDR</b> adalah singkatan dari <b>Integrated Digital Retail</b>: satu ekosistem digital yang menyatukan seluruh proses retail, dari kasir sampai laporan.</p>
          <p>Kami percaya setiap pelaku usaha, kecil maupun besar, berhak punya alat yang canggih namun mudah dipakai.</p>
        </div>
        <div class="logo-box"><img :src="logo" alt="Logo IDR"></div>
      </div>
    </section>

    <section class="alt">
      <div class="wrap">
        <h2>Visi &amp; Misi</h2>
        <div class="steps" style="grid-template-columns:1fr 1fr">
          <div class="step">
            <div class="n"><Icon name="target" /></div>
            <h3>Visi</h3>
            <p>Menjadi platform retail digital terpercaya yang memajukan usaha di seluruh Indonesia.</p>
          </div>
          <div class="step">
            <div class="n"><Icon name="trend" /></div>
            <h3>Misi</h3>
            <p>Menyediakan teknologi kasir yang cepat, terjangkau, dan mudah digunakan siapa saja.</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <h2>Nilai kami</h2>
        <div class="vals">
          <div class="card"><div class="ic"><Icon name="bolt" /></div><h3>Cepat</h3><p>Setiap detik berharga bagi pelanggan.</p></div>
          <div class="card"><div class="ic"><Icon name="shield" /></div><h3>Terpercaya</h3><p>Data Anda aman dan transparan.</p></div>
          <div class="card"><div class="ic"><Icon name="heart" /></div><h3>Sederhana</h3><p>Fitur kuat tanpa kerumitan.</p></div>
          <div class="card"><div class="ic"><Icon name="trend" /></div><h3>Bertumbuh</h3><p>Berkembang bersama usaha Anda.</p></div>
        </div>
      </div>
    </section>
  </div>
</template>