<template>
  <i class="amor-icon" :class="{[`amor-icon-${type}`]:type}">
    <font-awesome-icon v-bind="props"/>
  </i>
</template>

<script lang="ts" setup>
import type {IProps} from './props'
defineOptions({
  name: 'amor-icon',
})
const props = defineProps<IProps>()


</script>
