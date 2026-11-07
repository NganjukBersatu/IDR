<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'
import { plans } from '../data/home'

const yearly = ref(false)
const rp = (v) => (v === 0 ? 'Rp 0' : 'Rp ' + v.toLocaleString('id-ID'))
</script>

<template>
  <div class="plans-box">
    <div class="toggle">
      <button :class="{ on: !yearly }" @click="yearly = false">Bulanan</button>
      <button :class="{ on: yearly }" @click="yearly = true">Tahunan <em>HEMAT 20%</em></button>
    </div>

    <div class="plans">
      <div v-for="p in plans" :key="p.name" class="plan" :class="{ pop: p.pop }">
        <div v-if="p.pop" class="tag"><Icon name="star" f />PALING POPULER</div>
        <h3>{{ p.name }}</h3>
        <div class="d">{{ p.desc }}</div>
        <div class="price">{{ rp(yearly ? p.yearly : p.monthly) }}<small> /bulan</small></div>
        <div class="was">
          {{ yearly && p.monthly ? `Normal ${rp(p.monthly)}/bulan · ditagih tahunan` : p.monthly ? 'Ditagih bulanan' : 'Gratis selamanya' }}
        </div>
        <ul>
          <li v-for="f in p.features" :key="f"><Icon name="check" />{{ f }}</li>
        </ul>
        <RouterLink class="btn" :class="{ o: !p.pop }" to="/kontak">{{ p.cta }}</RouterLink>
      </div>
    </div>

    <div class="note">
      <span><Icon name="gift" />Gratis 14 hari semua fitur Bisnis</span>
      <span><Icon name="card" />Tanpa kartu kredit</span>
      <span><Icon name="shield" />Batal kapan saja</span>
    </div>
  </div>
</template>