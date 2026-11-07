<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import Icon from './Icon.vue'
import { bizDemo } from '../data/home'

const active = ref(0)
const cur = computed(() => bizDemo[active.value])
let timer = null

const bizEl = ref(null)
const dragging = ref(false)
const hasLeft = ref(false)
let down = false, moved = false, startX = 0, startLeft = 0

function pick(i) {
  clearInterval(timer)
  active.value = i
}

function onDown(e) {
  down = true
  moved = false
  startX = e.pageX
  startLeft = bizEl.value.scrollLeft
}
function onMove(e) {
  if (!down) return
  const dx = e.pageX - startX
  if (Math.abs(dx) > 4) {
    moved = true
    dragging.value = true
  }
  bizEl.value.scrollLeft = startLeft - dx
}
function onUp() {
  down = false
  dragging.value = false
}
function onScroll() {
  hasLeft.value = bizEl.value.scrollLeft > 4
}
function onClickCapture(e) {
  if (moved) {
    e.stopPropagation()
    e.preventDefault()
    moved = false
  }
}

watch(active, async () => {
  await nextTick()
  const el = bizEl.value
  const b = el?.querySelector('.on')
  if (b) el.scrollTo({ left: b.offsetLeft - (el.clientWidth - b.offsetWidth) / 2, behavior: 'smooth' })
})

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
    <div
      class="biz"
      :class="{ drag: dragging, 'has-left': hasLeft }"
      ref="bizEl"
      @mousedown="onDown"
      @mousemove="onMove"
      @mouseup="onUp"
      @mouseleave="onUp"
      @scroll="onScroll"
      @click.capture="onClickCapture"
    >
      <button v-for="(b, i) in bizDemo" :key="b.name" type="button" :class="{ on: active === i }" @click="pick(i)">
        {{ b.name }}
      </button>
    </div>
    <div class="pos">
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