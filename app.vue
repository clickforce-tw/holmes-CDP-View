<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script>
import { useCounterStore } from '@/stores/example'
export default {
  step() {
    const store = useCounterStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
}
</script>
