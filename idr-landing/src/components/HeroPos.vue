<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Icon from './Icon.vue'
import { bizDemo } from '../data/home'

const active = ref(0)
const cur = computed(() => bizDemo[active.value])
let timer = null

function pick(i) {
  clearInterval(timer)
  active.value = i
}

onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    active.value = (active.value + 1) % bizDemo.length
  }, 6000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="hr">
    <div class="biz">
      <button v-for="(b, i) in bizDemo" :key="b.name" type="button" :class="{ on: active === i }" @click="pick(i)">
        {{ b.name }}
      </button>
    </div>
    <div class="pos">
      <div class="badge"><Icon name="bolt" />Transaksi 3 detik</div>
      <div class="top"><span>IDR Kasir</span><span>#0231</span></div>
      <div class="cap">{{ cur.caption }}</div>
      <div>
        <div v-for="r in cur.rows" :key="r[0]" class="row"><span>{{ r[0] }}</span><span>{{ r[1] }}</span></div>
      </div>
      <div class="tot"><span>Total</span><span>{{ cur.total }}</span></div>
      <div class="pay"><Icon name="qr" />BAYAR · QRIS / Tunai / Kartu</div>
    </div>
  </div>
</template>