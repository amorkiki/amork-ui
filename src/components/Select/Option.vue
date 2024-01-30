<template>
    <li 
      class="amor-option"
      :class="{
        'is-disabled': disabled
      }"
      @click.stop="clickOption"
      >
      {{ label }}
    </li>
</template>

<script setup lang="ts">
import { inject, reactive} from 'vue'
import type { optionProps } from '../Select/optionProps'
import { selectKey } from '../Select/token'
defineOptions({
  name:'amor-option'
})
const props = withDefaults(defineProps<optionProps>(), {
  disabled:false
})

const currentOption = reactive({
  label: props.label,
  value: props.value,
})

const giveOutValue:(obj:object)=>void = inject(selectKey)
const clickOption = () => {
  giveOutValue(currentOption)
}

</script>

<style scoped>

</style>