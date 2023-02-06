<template>
  <h1>CDP環境設定</h1>
  <ExampleComponent></ExampleComponent>
  {{ pageName }}
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

console.log(piniaCount, adultArray)
</script>
