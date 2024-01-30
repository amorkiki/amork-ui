<template>
  <button 
    ref="_ref"
    class="amor-button"
    :class="{
      [`amor-button--${type}`]: type,
      [`amor-button--${size}`]:size,
      'is-plain': plain,
      'is-round':round,
      'is-circle': circle,
      'is-disabled': disabled || loading,
      }"
    :disabled="disabled || loading"
  >
    <amor-icon icon="spinner" spin v-if="loading"></amor-icon>
    <amor-icon :icon="icon" v-if="icon"></amor-icon>
    <span v-if="$slots.default">
      <slot/>
    </span>

  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type {Props} from './props'
defineOptions({
  name:'amor-button'
})
withDefaults(defineProps<Props>(), {
  type: 'default',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false
})

const _ref = ref(null)
defineExpose({ref: _ref})

</script>
