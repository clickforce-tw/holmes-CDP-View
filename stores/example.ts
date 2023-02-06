import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})

export const useComputerStore = defineStore('computer', () => {
  const piniaCount = ref<number>(0)

  return {
    piniaCount,
  }
})
