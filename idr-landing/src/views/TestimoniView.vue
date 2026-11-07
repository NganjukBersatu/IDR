<script setup>
import { ref, computed } from 'vue'
import Icon from '../components/Icon.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import { testimonials, chips } from '../data/pages.js'

const active = ref('semua')
const list = computed(() =>
  active.value === 'semua'
    ? testimonials
    : testimonials.filter((t) => t.cat === active.value)
)
</script>

<template>
  <div class="page show">
    <div class="wrap pgh center">
      <h1>Cerita sukses dari <br>pelanggan IDR.</h1>
      <p class="lead">Dari warung hingga jaringan butik, ribuan pemilik usaha sudah merasakan kemudahan mengelola toko bersama IDR.</p>
    </div>

    <section style="padding-top:20px">
      <div class="wrap">
        <div class="rate">
          <div>
            <div class="big">4,9</div>
            <div class="stars"><Icon v-for="n in 5" :key="n" name="star" class="f" /></div>
            <small>dari 1.200+ ulasan</small>
          </div>
          <div>
            <div class="bar"><span>5★</span><i><b style="width:92%"></b></i><span>92%</span></div>
            <div class="bar"><span>4★</span><i><b style="width:6%"></b></i><span>6%</span></div>
            <div class="bar"><span>3★</span><i><b style="width:2%"></b></i><span>2%</span></div>
          </div>
          <div class="mini">
            <div><b>96%</b><span>Akan merekomendasikan</span></div>
            <div><b>5.000+</b><span>Toko aktif</span></div>
          </div>
        </div>

        <div class="chips">
          <button
            v-for="c in chips"
            :key="c.id"
            class="chip"
            :class="{ on: active === c.id }"
            @click="active = c.id"
          >{{ c.label }}</button>
        </div>

        <div class="tgrid all">
          <TestimonialCard v-for="t in list" :key="t.name" :t="t" />
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="ctab">
          <h2>Giliran usaha Anda bercerita.</h2>
          <p class="lead">Bergabung bersama ribuan pemilik usaha yang sudah naik kelas bersama IDR.</p>
          <RouterLink class="btn y" to="/kontak">Konsultasi Gratis Sekarang <Icon name="arrow" /></RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>