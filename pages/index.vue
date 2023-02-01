<template>
  <div>
    {{ pageName }}
    <div class="grid grid-rows-2 grid-cols-2">
      <div class="w-[150px] bg-slate-200">
        <Switch
          v-model:switchStatus="switchStatus"
          :label="'開關'"
          :required="false"
        />
      </div>
      <div>
        <h2>Computer:</h2>
        <input
          class="w-4/6 border-2 text-right focus:outline-none"
          type="text"
          disabled
        />
        <div class="bg-gray-200 w-4/6">
          <div class="grid grid-rows-3 grid-cols-3 gap-5 text-center">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>+</span>
            <span>-</span>
            <span>*</span>
            <span>/</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useComputerStore } from '../stores/example'
const computerStore = useComputerStore()
const { count } = storeToRefs(computerStore)

interface AdultArray {
  value: Number
  label: String
}

const pageName = ref<string>('元件測試:')
const switchStatus = ref<Boolean>(true)
const adultArray = ref<AdultArray[]>([
  { value: 0, label: '僅接受一般訂單' },
  { value: 1, label: '僅接受成人訂單' },
  { value: 2, label: '接受一般與成人訂單' },
])
</script>

<style></style>
