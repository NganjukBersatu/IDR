<script setup>
import Icon from '../components/Icon.vue'
import FaqList from '../components/FaqList.vue'
import { features } from '../data/pages.js'
</script>

<template>
  <div class="page show">
    <div class="wrap pgh">
      <h1>Fitur lengkap, <br>tanpa ribet.</h1>
      <p class="lead">Semua yang dibutuhkan untuk menjalankan retail modern dalam satu aplikasi.</p>
    </div>

    <section style="padding-top:10px">
      <div class="wrap">
        <div class="grid" style="margin-top:0">
          <div v-for="f in features" :key="f.title" class="card">
            <div class="ic"><Icon :name="f.icon" /></div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="faqs">
      <div class="wrap"><FaqList /></div>
    </section>
  </div>
</template>