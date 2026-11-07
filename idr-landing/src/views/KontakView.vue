<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Icon from '../components/Icon.vue'
import { businessTypes, contactInfo, socials } from '../data/pages.js'

const open = ref(false)
const selected = ref(businessTypes[0].value)
const sent = ref(false)

function pick(value) {
  selected.value = value
  open.value = false
}
function close() {
  open.value = false
}
function onKey(e) {
  if (e.key === 'Escape') close()
}
function submit(e) {
  sent.value = true
  e.target.reset()
  selected.value = businessTypes[0].value
}

onMounted(() => {
  document.addEventListener('click', close)
  document.addEventListener('keydown', onKey)
})
onUnmounted(() => {
  document.removeEventListener('click', close)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="page show">
    <div class="wrap pgh">
      <h1>Konsultasi gratis, <br>hubungi kami.</h1>
      <p class="lead">Isi formulir untuk menjadwalkan konsultasi atau minta demo. Tim kami akan menghubungi Anda.</p>
    </div>

    <section style="padding-top:10px">
      <div class="wrap two" style="align-items:start">
        <form @submit.prevent="submit">
          <label>Nama<input required placeholder="Nama lengkap"></label>
          <label>Email / WhatsApp<input required placeholder="email@contoh.com"></label>

          <div class="lb">Jenis usaha
            <div class="dd" :class="{ open }">
              <button
                type="button"
                class="dd-b"
                aria-haspopup="listbox"
                :aria-expanded="open"
                @click.stop="open = !open"
              >
                <span>{{ selected }}</span>
                <Icon name="chev" />
              </button>
              <ul class="dd-l" role="listbox">
                <li
                  v-for="b in businessTypes"
                  :key="b.value"
                  :class="{ sel: selected === b.value }"
                  @click.stop="pick(b.value)"
                >
                  <Icon :name="b.icon" />{{ b.value }}
                </li>
              </ul>
              <input type="hidden" :value="selected">
            </div>
          </div>

          <label>Pesan<textarea rows="4" placeholder="Ceritakan kebutuhan Anda"></textarea></label>
          <button class="btn" type="submit">Kirim Permintaan Konsultasi <Icon name="arrow" /></button>
          <div class="ok" :style="{ display: sent ? 'block' : 'none' }">Terima kasih! Tim IDR akan segera menghubungi Anda.</div>
        </form>

        <div class="info">
          <div v-for="c in contactInfo" :key="c.label">
            <div class="ic"><Icon :name="c.icon" /></div>
            <span><b>{{ c.label }}</b>{{ c.value }}</span>
          </div>
          <div class="sc">
            <span><b>Ikuti kami</b>@idrofficialcorp</span>
            <div class="soc">
              <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noopener" :aria-label="s.label">
                <Icon :name="s.icon" :class="{ f: s.filled }" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>