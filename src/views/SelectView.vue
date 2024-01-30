<template>
  <div class="row">
    <Amor-select size="large" clearable v-model="selectVal" placeholder="select...">
      <Amor-option 
        v-for = 'item in options'
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></Amor-option>
    </Amor-select>
    <!-- <amor-select> -->
      <!-- <amor-option></amor-option> -->
    <!-- </amor-select> -->
    <!-- <amor-select size="small"> -->
      <!-- <amor-option></amor-option> -->
    <!-- </amor-select> -->
  </div>
    <div><span>v-model:{{ selectVal }}</span></div>

</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'

const selectVal = ref('')
watch(selectVal, (newVal) => {
  // console.log('v-model',typeof newVal)
})

const options = [
  {
    value: 'value1',
    label: 'Label1',
  },
  {
    value: 'value2',
    label: 'Label2',
  },
  {
    value: 'value3',
    label: 'Label3',
    disabled:true
  },
  {
    value: 'value4',
    label: 'Label4',
  },
  {
    value: 'value5',
    label: 'Label5',
  },
  {
    value: 'value6',
    label: 'Label6',
  },
  {
    value: 'value7',
    label: 'Label7',
  }
]
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
