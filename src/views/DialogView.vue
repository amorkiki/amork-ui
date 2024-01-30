<template>
  <div class="row">
    <amor-button @click="visible=true">open</amor-button>
    <amor-dialog v-model:visible="visible" @close="visible=false" title="主题配置">
      <amor-switch v-model="darkSwitch" icon="moon" type="dark">
        <template #before>dark</template>
      </amor-switch>
      <template #footer>
        <amor-button type="primary" @click="confirm">confirm</amor-button>
      </template>
    </amor-dialog>
  </div>
</template>
<script setup leng="ts">
import { ref } from 'vue'
const visible = ref(false)
const darkSwitch = ref(false)
const confirm = () => {
  const body = document.documentElement
  if (darkSwitch.value) {
    body.setAttribute('class', 'dark')
  } else {
    body.setAttribute('class', '')
  }
  visible.value = false;
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
