
/**
 * content 提示内容  
 * trigger 触发方式  
 * placement 出现位置  
 * customize 自定义触发
 * openDelay 延时打开  
 * closeDelay延时关闭  
 */
export interface Props{
  content?: string
  placement?: any
  trigger?: string
  customize?: boolean
  openDelay?: number
  closeDelay?: number
  
}
