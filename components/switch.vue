<template>
  <div
    :class="[
      'flex',
      layout === 'col'
        ? 'flex-col items-start'
        : 'justify-between items-center',
      { 'opacity-[0.5]': disabled },
    ]"
  >
    <label
      :class="[
        ' text-secondary-2 text-[16px]',
        layout === 'col' ? 'mb-[22px]' : '',
      ]"
      >{{ label
      }}<span v-show="required" class="text-primary_1-100">*</span></label
    >
    <div class="flex items-center gap-[10px]">
      <label class="toggle">
        <input
          v-model="inputVal"
          type="checkbox"
          :name="`switch-${label}`"
          :checked="switchStatus"
          :disabled="disabled"
        />
        <span class="slider"></span>
      </label>
      <div
        :class="[
          'text-[16px] font-bold transition-all ease-out',
          switchStatus ? 'text-primary_1-100' : 'text-secondary-2',
        ]"
      >
        {{ status }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, computed } from 'vue'

const emit = defineEmits(['update:switchStatus'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  switchStatus: {
    type: Boolean,
  },
  layout: {
    type: String,
    default: 'col',
  },
  customOptions: {
    type: Array,
    default: () => ['關', '開'],
  },
})

const inputVal = computed({
  get: () => props.switchStatus,
  set: (val) => emit('update:switchStatus', val),
})

const status = computed(() => {
  //   if (props.switchStatus) {
  //     return props.customOptions[1]
  //   }
  //   if (!props.switchStatus) {
  //     return props.customOptions[0]
  //   }
  return props.customOptions[props.switchStatus ? 1 : 0]
})
</script>

<style scoped>
/* styling lable */
.toggle {
  --width: 50px;
  --height: calc(var(--width) / 3);
  position: relative;
  display: inline-block;
  width: var(--width);
  height: var(--height);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  border-radius: var(--height);
  background-color: #c4c4c4;
  cursor: pointer;
}

/* hiding checkbox */
.toggle input {
  display: none;
}

/* Creating slider */
.toggle .slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background-color: #ccc;
  transition: all 0.3s ease-in-out;
}

.toggle .slider::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  width: 28px;
  height: 28px;
  border-radius: calc(28px / 2);
  background-color: #ececec;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}

/* Adding slider effect */
.toggle input:checked + .slider {
  /* 如果active底色有要換色可以換這 */
  background-color: #c4c4c4;
}

.toggle input:checked + .slider::before {
  background-color: #ff7527;
  transform: translateX(calc(var(--width) - var(--height)));
}
</style>
