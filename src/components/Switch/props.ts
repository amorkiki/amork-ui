
/**
 * type: 主题：success，info，primary，danger，warning
 * icon: switch中显示的icon
 * disabled:禁用zhuangtai
 * loading：加载状态（同时也是禁用状态）
 */
export interface Props{
  type?: string
  size?: string
  icon?: string
  disabled?: boolean
  loading?: boolean 
  modelValue: boolean
  
}