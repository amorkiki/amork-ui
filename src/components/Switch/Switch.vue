<template>
  <div 
    ref="switchWrapRef" 
    class="amor-switch" 
    @click.prevent="switchValue" 
    :class="{
      'is-checked': modelValue,
      [`amor-switch--${type}`]: type,
      [`amor-switch--${size}`]: size,
      'is-disabled':disabled || loading 
    }"
  >
    <input 
      ref="inputRef"
      class="amor-switch__input" 
      type="checkbox"
      @change="switchValue"
      @keydown.enter="switchValue"
      :disabled="disabled"
    >
    <!-- 前面文字 -->
    <span class="amor-switch-span">
      <slot name="before"/>
    </span>
    <!-- 开关 -->
    <span class="amor-switch__core">
      <div class="amor-switch__action" >
        <amor-icon :icon="icon" size="xs" v-if="icon && modelValue"></amor-icon>
        <amor-icon icon="spinner" spin v-if="loading"></amor-icon>
      </div>
    </span>
    <!-- 后面文字 -->
    <span class="amor-switch-span">
      <slot name="after"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import type {Props} from './props'
import { ref } from "vue";

defineOptions({
  name: 'amor-switch'
})
const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
  modelValue: false,
})
let modelValue = ref(props.modelValue)

const emit = defineEmits(['update:modelValue'])
const switchValue = (): void => {  
  if (props.disabled || props.loading) {
    return
  }
  modelValue.value = !modelValue.value  
  emit('update:modelValue', modelValue.value)
}

</script>


<style scoped>

</style>