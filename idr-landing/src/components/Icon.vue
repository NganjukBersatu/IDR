<script setup>
defineProps({ name: String, f: Boolean })
const base = import.meta.env.BASE_URL
</script>

<template>
  <svg :class="['i', { f }]" aria-hidden="true">
    <use :href="`${base}icons.svg#${name}`" />
  </svg>
</template>