<template>
  <div class="row">
    <amor-tooltip content="略略略~" @visible-change="handle">
      <amor-button type="primary">default</amor-button>
    </amor-tooltip>
    <amor-tooltip content="略略略~"  placement="bottom" trigger="click">
        <amor-button type="danger">点击</amor-button>
        <template #content>自定义content~~延时1秒钟~</template>
    </amor-tooltip>
    <amor-tooltip content="略略略~"  placement="right">
      <amor-button type="info">right</amor-button>
    </amor-tooltip>
    <amor-tooltip content="略略略~"  placement="bottom" manual ref="tooltipRef">
      <amor-button type="warning">手动触发</amor-button>
    </amor-tooltip>
  </div>
    <div class="row">
    <amor-tooltip 
      placement="bottom" 
      :open-delay="1000"
      :close-delay="1000"
      @visible-change="handle">
        <amor-button type="success">延时1秒钟</amor-button>
        <template #content>自定义content~~延时1秒钟~</template>
    </amor-tooltip>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const handle = (isShow: any) => {
  if (isShow) { console.log('show'); } else { console.log('hide'); }
}
</script>

<style lang="scss" scoped>
.row {
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 20px auto;
  margin-bottom: 30px;
}
</style>