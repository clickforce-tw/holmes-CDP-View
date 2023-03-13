<template>
  <button
    class="btn flex min-w-fit items-center rounded-3xl px-10 text-base text-white"
    :class="{
      [`bg-gradient-to-r from-[#FF7527] to-[#DD2476]`]:
        color == 'gradient' && !outline,
      [`border border-gray-600 bg-transparent text-gray-600`]:
        color == 'transparent' && outline,
      [`bg-${color}-300`]: !outline,
    }"
    @click="updateClick('btn click!')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  outline: Boolean,
})
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
const updateClick = (val: string) => {
  emit('update', val)
}
</script>

<style scoped></style>
