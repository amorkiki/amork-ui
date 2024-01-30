<template>
  <div class="row">
    <amor-switch 
      type="warning"
      icon="moon"
      v-model="value1"
      >
      <template #before>before</template>
      <template #after>after</template>
      </amor-switch>
      <amor-switch disabled v-model="value2">
        <template #before>禁用</template>
      </amor-switch>
      <amor-switch loading v-model="value3">
        <template #before>加载</template>
      </amor-switch>
  </div>
  <div class="row">
    <amor-switch size="large" v-model="value4"></amor-switch>
    <amor-switch size="small" v-model="value5"></amor-switch>
  </div>
  <div class="row">
    {{ val ? '开' : '关' }}
    <amor-switch v-model="val">
        <template #after>{{ val }}</template>
    </amor-switch>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref(true)
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
const value5 = ref(true)

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

