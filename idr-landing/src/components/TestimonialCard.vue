<script setup>
import Icon from './Icon.vue'
defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <div class="tc">
    <div class="tt">
      <div class="q"><Icon name="quote" class="f" /></div>
      <span class="res">{{ t.result }}</span>
    </div>
    <div class="stars"><Icon v-for="n in 5" :key="n" name="star" class="f" /></div>
    <p>“{{ t.text }}”</p>
    <div class="who">
      <div class="av">{{ t.initial }}</div>
      <div><b>{{ t.name }}</b><span>{{ t.role }}</span></div>
    </div>
  </div>
</template>