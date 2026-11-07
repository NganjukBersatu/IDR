<script setup>
import FaqList from '../components/FaqList.vue'
import PricingPlans from '../components/PricingPlans.vue'
import TestimonialCard from '../components/TestimonialCard.vue'
import { testimonials } from '../data/pages.js'

const topThree = testimonials.slice(0, 3)
</script>

<template>
  <div class="page show">
    <div class="wrap pgh center">
      <h1>Harga jelas, <br>tanpa biaya tersembunyi.</h1>
      <p class="lead">Pilih paket sesuai ukuran usaha. Coba gratis 14 hari, upgrade atau turun paket kapan saja.</p>
    </div>

    <section style="padding-top:0">
      <div class="wrap center">
        <div class="plans-box"><PricingPlans /></div>
      </div>
    </section>

    <section class="alt">
      <div class="wrap center">
        <h2>Apa kata pelanggan kami</h2>
        <div class="tgrid" style="text-align:left">
          <TestimonialCard v-for="t in topThree" :key="t.name" :t="t" />
        </div>
      </div>
    </section>

    <section class="faqs">
      <div class="wrap"><FaqList /></div>
    </section>
  </div>
</template>