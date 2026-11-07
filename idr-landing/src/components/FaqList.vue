<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import { faqs } from '../data/home'

const open = ref(0)
</script>

<template>
  <div class="faqwrap">
    <div>
      <h2>Pertanyaan yang sering ditanyakan</h2>
      <p class="lead">Belum menemukan jawabannya? Tim kami siap membantu setiap hari kerja.</p>
      <RouterLink class="btn y" to="/kontak">Hubungi kami <Icon name="arrow" /></RouterLink>
    </div>
    <div class="faq">
      <details v-for="(x, i) in faqs" :key="x.q" :open="open === i">
        <summary @click.prevent="open = open === i ? -1 : i">
          {{ x.q }}<span class="pm"></span>
        </summary>
        <p>{{ x.a }}</p>
      </details>
    </div>
  </div>
</template>