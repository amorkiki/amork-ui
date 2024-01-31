# AmorK·UI

This is a mini vue3+vite UI libaray written in Typescritp.

## Installation and usage

```sh
npm install amork-ui
```
when it successed, import it in mian.js
```js
import AmorkUI from 'amork-ui'
import 'amork-ui/style.css'
createApp(App).use(AmorkUI).mount('#app')
```

now you can use them in pages

## Useage and Props

- Button
  ```html
    <amor-button>clean</amor-button>
    <amor-button type="warning">warning</amor-button>
    <amor-button type="primary" round>round</amor-button>
    <amor-button type="info" circle>circle</amor-button>
    <amor-button type="danger" loading>loading</amor-button>
    <amor-button disabled plain>disabled</amor-button>
  ```
- Icon (based on fontawsome)
  ```html
    <amor-icon icon='home' size="lg" spin></amor-icon>
    <amor-icon icon='phone' size="sm"></amor-icon>
    <amor-icon icon='user' size="lg" beat></amor-icon>
    <amor-icon icon='check' size="lg" type="warning"></amor-icon>
    <amor-icon icon='download' size="lg" color="green"></amor-icon>
  ```
- Dialog
  ```html
    <amor-button @click="visible=true">open</amor-button>
    <amor-dialog v-model:visible="visible" @close="visible=false" title="title">
      content~~
      <template #footer>
        <amor-button type="primary" @click="confirm">confirm</amor-button>
      </template>
    </amor-dialog>
  ```
- Switch
  ```html
  <amor-switch type="warning" icon="moon" v-model="value1">
    <template #before>before</template>
    <template #after>after</template>
  </amor-switch>
  <amor-switch disabled v-model="value2" size="large">
    <template #before>禁用</template>
  </amor-switch>
  <amor-switch loading v-model="value3" size="small">
    <template #before>加载</template>
  </amor-switch>
  ```
- Select
  ```html
  <Amor-select size="large" clearable v-model="selectVal" placeholder="select...">
      <Amor-option 
        v-for = 'item in options'
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></Amor-option>
    </Amor-select>
  ```
- Tooltip (based on popper.js)
  ```html
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
    <amor-tooltip 
      placement="bottom" 
      :open-delay="1000"
      :close-delay="1000"
      @visible-change="handle">
        <amor-button type="success">延时1秒钟</amor-button>
        <template #content>自定义content~~延时1秒钟~</template>
    </amor-tooltip>
  ```




