<template>
  <div id="calculator">
    <input v-model="display" type="text" />
    <br /><br />
    <button v-for="(btn, index) in buttons" :key="index" @click="process(btn)">
      {{ btn }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const display = ref('0')
const buttons = [
  '1',
  '2',
  '3',
  '+',
  '4',
  '5',
  '6',
  '-',
  '7',
  '8',
  '9',
  '*',
  'C',
  '0',
  '=',
  '/',
]

function process(value: string) {
  switch (value) {
    case 'C':
      display.value = '0'
      break
    case '=':
      // eslint-disable-next-line no-eval
      display.value = eval(display.value)
      break
    default:
      if (display.value === '0') {
        display.value = value
      } else {
        display.value += value
      }
  }
}

onMounted(() => {
  console.log('Calculator mounted.')
})
</script>

<style>
#calculator {
  text-align: center;
}

input {
  width: 200px;
  height: 50px;
  font-size: 20px;
  text-align: right;
}

button {
  width: 50px;
  height: 50px;
  font-size: 20px;
}
</style>
