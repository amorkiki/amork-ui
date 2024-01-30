/**
 * type     : 主题颜色 
 * size     : 大小
 * plain    : 是否朴素
 * round    : 是否圆角
 * circle   : 是否圆形
 * disabled : 是否禁用
 * loading  : 是否加载中
 * icon     : 图标
 */
export interface Props {
  type?: string
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: string
  size?: string
}