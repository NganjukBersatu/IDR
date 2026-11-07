<script setup>
import { ref, computed } from 'vue'
import Icon from './Icon.vue'
import { solusi } from '../data/home'

const active = ref(0)
const cur = computed(() => solusi[active.value])
</script>

<template>
  <div class="tabs">
    <button v-for="(s, i) in solusi" :key="s.name" type="button" :class="{ on: active === i }" @click="active = i">
      {{ s.name }}
    </button>
  </div>
  <div class="sol" style="text-align: left">
    <div>
      <h3>{{ cur.name }}</h3>
      <p>{{ cur.desc }}</p>
      <ul>
        <li v-for="l in cur.points" :key="l"><Icon name="check" />{{ l }}</li>
      </ul>
      <RouterLink class="btn" to="/kontak">Konsultasikan usaha saya <Icon name="arrow" /></RouterLink>
    </div>
    <div class="types"><span v-for="t in cur.types" :key="t">{{ t }}</span></div>
  </div>
</template>