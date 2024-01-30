<template>
  <div 
      class="amor-select" 
      :class="{
        [`amor-select--${size}`]: size,
      }"
      @mouseenter="handleEnter"
      @mouseleave="handleLeave"
      :modelValue="currentValue"
      @input="changeInput"
      >
      <amor-tooltip 
        ref="tooltipRef"
        trigger="click" 
        placement="bottom" 
        :open-delay="500" 
        @visible-change="handleDropdown"
        >
        <div 
          class="amor-select__wrapper" 
          :class="{
            [`amor-select-open--${type}`]: isOpen ?  type : '' 
          }"
          :style="{ 'width': width }"
          >
          <span class="amor-select-span" v-if="currentValue=== ''">{{ placeholder }}</span>
          <input 
            type="text" 
            class="amor-select-input" 
            :value="currentLabel" 
            readonly="true"
            >
          <amor-icon :icon="isOpen ? 'chevron-up' : 'chevron-down'" ></amor-icon>
          <amor-icon icon="xmark" v-if="isHover && !isOpen" @click.stop="handleClear"></amor-icon>
        </div>
        <template #content>
          <div class="popper-scroll-wrapper">
            <slot/>
          </div>
        </template>

      </amor-tooltip>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'

import type {selectProps} from './selectProps'
import { selectKey } from './token';
defineOptions({
  name:'amor-select'
})
const props = withDefaults(defineProps<selectProps>(), {
  width: '240px',
  type: 'primary',
  clearable: false,
})
let currentValue = ref(props.modelValue);
let currentLabel = ref()
const emit = defineEmits(['update:modelValue'])
const tooltipRef = ref(null)

let isHover = ref(false)
const handleEnter = (): void => {
  if (!props.clearable) return
  isHover.value = true;
}
const handleLeave = (): void => {
  if (!props.clearable) return
  isHover.value = false;
}

const handleClear = (): void => {
  currentLabel.value = '';
  currentValue.value = '';
  emit('update:modelValue', currentLabel.value)
}

const isOpen = ref(false)
const handleDropdown = (isShow: boolean) => {
  isOpen.value = isShow
}
watch(isOpen, (newVal) => {
  // console.log('newVal',newVal);
})

const getOptions = (option)=> {
  currentValue.value = option.value
  currentLabel.value = option.label
  isOpen.value = !isOpen.value
  tooltipRef.value.hide();
  emit('update:modelValue', currentValue.value)
}
provide(selectKey, getOptions)


const changeInput = ()=>{}


</script>

<style scoped lang="scss">
.amor-tooltip ::v-deep(.amor-tooltip__popper){
  padding: 0;
}
.popper-scroll-wrapper{ //添加scrollbar并解决伪元素消失的问题
  max-height:200px;
  overflow: scroll;
}
</style>