<script setup>
defineProps({ name: String, f: Boolean })
</script>

<template>
  <svg :class="['i', { f }]"><use :href="'#' + name" /></svg>
</template>