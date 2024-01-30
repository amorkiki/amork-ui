<template>
  <div class="amor-tooltip" v-on="outerEvents">
    <!-- 触发插槽-->
    <div class="amor-tooltip__trigger" ref="triggerRef" v-on="events">
      <slot />
    </div>

    <!-- 提示内容插槽 -->
    <div class="amor-tooltip__popper" ref="popperRef" v-if="isOpen">
      <slot name="content">
        {{ content }}
      </slot>
      <!-- 三角箭头 -->
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue'
import type { Props } from './props'
import { debounce } from 'lodash-es'
import { createPopper } from '@popperjs/core'


defineOptions({ name: 'amor-tooltip' })

const props = withDefaults(defineProps<Props>(), {
  placement: 'left',
  trigger: 'hover',
  customize: false,
  openDelay: 100,
  closeDelay: 100
})
const emit = defineEmits(['visible-change'])
const triggerRef = ref(null)
const popperRef = ref(null)

// 控制提示框是否要显示
const isOpen = ref(false)

//createPopper创建的实例
// let popperInstance: { destroyed?: any; state?: State; destroy?: () => void; forceUpdate?: () => void; update?: () => Promise<Partial<State>>; setOptions?: (setOptionsAction: Partial<OptionsGeneric<any>> | ((prev: Partial<OptionsGeneric<any>>) => Partial<OptionsGeneric<any>>)) => Promise<Partial<State>>; } | null = null
let popperInstance = null;
/**
 * 构建 createPopper 方法的第三个参数
 */
const popperOptions= computed(() => {
  return {
    placement: props.placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 10]
      },
    }]
  }
})

/**
 * popper 实例是在 isOpen 发生变化的时候创建----监听isOpen
 */
watch(isOpen, (newValue) => {
  if (newValue) {
    if (triggerRef.value && popperRef.value) {
      popperInstance = createPopper(triggerRef.value, popperRef.value, popperOptions.value)
    } else {
      popperInstance?.destroyed()
    }
  }
}, { flush: 'post' }) //post在dom渲染后运行  



const openDebounce = debounce(() => {
  isOpen.value = true
  emit('visible-change', true)
}, props.openDelay)

const closeDebounce = debounce(() => {
  isOpen.value = false
  emit('visible-change', false)
}, props.closeDelay)

const open = () => {
  closeDebounce.cancel()
  openDebounce()
}
const close = () => {
  openDebounce.cancel()
  closeDebounce()
}


interface BindEvent {
  [key: string]: () => void
}
// 存储各种事件
let events = reactive<BindEvent>({})
let outerEvents = reactive<BindEvent>({})
/**
 * 给触发元素绑定事件：hover or click
 */
const attachEvents = () => {
  // 先判断触发方式
  if (props.trigger === 'hover') {  // 鼠标移入触发
    events['mouseenter'] = open
    outerEvents['mouseleave'] = close
  } else if (props.trigger === 'click') {
    events['click'] = () => { isOpen.value ? close() : open() }
  }
}

/**
 * 绑定事件前，判断用户是否要自定义处理
*/
if (!props.customize) {
  attachEvents()
}

/**
 * 暴露打开/关闭方法
 */
defineExpose({
  show: open,
  hide: close
})

</script>