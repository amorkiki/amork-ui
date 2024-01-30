/**
 * width:宽度 默认240px
 * size:大小； large/small，默认为‘’， 中等
 * type: 主题 primary，success，error，dark
 */
export interface selectProps{
  width?: string
  size?: string
  type?: string
  clearable?: boolean
  modelValue: string | number | boolean | object
  placeholder?: string
}