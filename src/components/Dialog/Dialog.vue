<template>
  <transition name="dialog-fade">
    <div class="amor-dialog_wrapper" v-show="visible">
      <div class="amor-dialog" :style="{ width, marginTop: top }">
        <div class="amor-dialog_header">
          <slot name="title">
            <span class="amor-dialog_title">{{ title }}</span>
          </slot>
          <button class="amor-dialog_headerbtn" @click="clickHandle">
            <amor-icon icon="xmark"></amor-icon>
          </button>
        </div>
        <!-- 内容 -->
        <div class="amor-dialog_body">
          <slot />
        </div>
        <!-- 底部插槽 -->
        <div class="amor-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { Props } from './props'
defineOptions({ name: 'amor-dialog' })
withDefaults(defineProps<Props>(), {
  visible: false,
  title: '提示',
  width: '50%',
  top: '15vh'
})

const emit = defineEmits(['close'])
function clickHandle() {
  emit('close')
}
</script>
