<template>
  <h1
    class="extra-title1 bg-gradient-to-r from-[#DD2476] to-[#FF7527] text-center text-background-1">
    CDP環境設定
  </h1>
  <ExampleComponent></ExampleComponent>
  {{ pageName }}
  <div class="grid grid-cols-2 grid-rows-2">
    <BaseButton :color="'gradient'" @update="buttonClick"> 確認 </BaseButton>
    <div class="w-[150px] bg-slate-200">
      <Switch v-model:switchStatus="status" :label="'開關'" :required="false" />
    </div>
    <div>
      <h2>Computer:</h2>
      <p>pinia:{{ piniaCount }}</p>
      <input
        v-model="currentCount"
        class="w-4/6 border-2 text-right focus:outline-none"
        type="text"
        disabled />
      <div class="w-4/6 bg-gray-200">
        <div class="grid grid-cols-4 grid-rows-3 gap-5 text-center">
          <span
            v-for="(count, index) in counts"
            :key="index"
            class="cursor-pointer p-1"
            @click="addCount(count)"
            >{{ Number(count) }}</span
          >
          <span class="cursor-pointer p-1" @click="operationProcess('add')"
            >+</span
          >
          <span
            class="cursor-pointer p-1"
            @click="operationProcess('substract')"
            >-</span
          >
          <span class="cursor-pointer p-1" @click="operationProcess('multiply')"
            >*</span
          >
          <span class="cursor-pointer p-1" @click="operationProcess('divide')"
            >/</span
          >
          <span class="cursor-pointer p-1" @click="addDot">.</span>
          <span class="cursor-pointer p-1" @click="equal">=</span>
          <span class="cursor-pointer p-1" @click="percentage">%</span>
          <span class="cursor-pointer p-1" @click="setNegativeOrPositive"
            >+/-</span
          >
          <span class="cursor-pointer p-1" @click="clear">C</span>
        </div>
      </div>
    </div>
    <Calculator />
  </div>
  <h1
    class="bg-gradient-to-r from-[#DD2476] to-[#FF7527] text-center text-background-1">
    Typeface
  </h1>
  <div class="grid grid-cols-2">
    <div>
      <h2>@Regular</h2>
      <p class="extra-title1-regular">Extra Tittle / Big Number</p>
      <p class="extra-title2-regular">Extra Tittle 2 / Big Number 2</p>
      <p class="extra-title3-regular">Popup Tittle / Hello</p>
      <p class="header1-regular">Header 1</p>
      <p class="data-title-regular">Data Tittle</p>
      <p class="sub-title1-regular">
        Sub Menu Tittle / Body Text / List Tittle Words / Search Words / Filter
        Words
      </p>
      <p class="sub-title2-regular">
        Sub Menu Tittle / Body Text / List Tittle Words / Search Words / Filter
        Words
      </p>
      <p class="notice-regular">Notice / Page number</p>
    </div>
    <div>
      <h2>@Bold</h2>
      <p class="extra-title1-bold">Extra Tittle / Big Number</p>
      <p class="extra-title2-bold">Extra Tittle 2 / Big Number 2</p>
      <p class="extra-title3-bold">Popup Tittle / Hello</p>
      <p class="header1-bold">Header 1</p>
      <p class="data-title-bold">Data Tittle</p>
      <p class="sub-title1-bold">
        Sub Menu Tittle / Body Text / List Tittle Words / Search Words / Filter
        Words
      </p>
      <p class="sub-title2-bold">
        Sub Menu Tittle / Body Text / List Tittle Words / Search Words / Filter
        Words
      </p>
      <p class="notice-bold">Notice / Page number</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useComputerStore } from '../stores/example'
const computerStore = useComputerStore()
const { piniaCount } = storeToRefs(computerStore)

interface AdultArray {
  value: Number
  label: String
}

const pageName = ref<string>('元件測試:')
const status = ref<Boolean>(true)
const adultArray = ref<AdultArray[]>([
  { value: 0, label: '僅接受一般訂單' },
  { value: 1, label: '僅接受成人訂單' },
  { value: 2, label: '接受一般與成人訂單' },
])
const counts = ref<string[]>(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])

const currentCount = ref<string>('0')
const prevCount = ref<string>('')
const operation = ref<any>()
const operationClicked = ref<Boolean>(false)

const clear = () => {
  currentCount.value = '0'
  prevCount.value = ''
  operationClicked.value = false
}
const addCount = (num: string) => {
  if (operationClicked.value) {
    currentCount.value = ''
    operationClicked.value = false
  }
  currentCount.value === '0'
    ? (currentCount.value = `${num}`)
    : (currentCount.value = `${currentCount.value}${num}`)
}
const setNegativeOrPositive = () => {
  if (currentCount.value === '0') return
  currentCount.value =
    currentCount.value[0] === '-'
      ? currentCount.value.slice(1)
      : `-${currentCount.value}`
}
const addDot = () => {
  if (currentCount.value.includes('.')) return
  currentCount.value = `${currentCount.value}.`
}
const percentage = () => {
  currentCount.value = `${parseFloat(currentCount.value) / 100}`
}
const operationProcess = (str: any) => {
  if (str === 'add') {
    operation.value = (a: any, b: any) => {
      return parseFloat(a) + parseFloat(b)
    }
  } else if (str === 'divide') {
    operation.value = (a: any, b: any) => {
      return parseFloat(a) / parseFloat(b)
    }
  } else if (str === 'substract') {
    operation.value = (a: any, b: any) => {
      return parseFloat(a) - parseFloat(b)
    }
  } else if (str === 'multiply') {
    operation.value = (a: any, b: any) => {
      return parseFloat(a) * parseFloat(b)
    }
  }
  if (operationClicked.value) {
    currentCount.value = `${operation.value(
      prevCount.value,
      currentCount.value
    )}`
  }
  operationClicked.value = true
  prevCount.value = currentCount.value
}
const equal = () => {
  operationClicked.value = false
  if (prevCount.value !== '') {
    currentCount.value = `${operation.value(
      prevCount.value,
      currentCount.value
    )}`
    prevCount.value = ''
  }
}
watch(currentCount, (curVal) => {
  if (curVal.length > 12) {
    currentCount.value = curVal.slice(0, 12)
  }
})

const buttonClick = (a: String) => {
  console.log(a)
}

console.log(piniaCount, adultArray)
</script>
