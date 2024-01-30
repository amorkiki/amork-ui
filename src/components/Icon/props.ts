/**
 * icon 设置图标 
 * size 图标大小 
 * rotation 旋转
 * flip翻转
 * beat动画
 * beat-fade动画
 * bounce动画
 * fade动画  
 * shake动画 
 * spin动画  
 * spin-reverse动画
 * spin-pulse动画  
 * type主题类型: success, primary, error, warnig, info
 * color自定义颜色
 */
export interface IProps{
  icon: string
  size?: string
  rotation?: string | number
  flip?: string | number
  beat?: boolean
  bounce?: boolean
  fade?: boolean
  'beat-fade'?: boolean
  shake?: boolean
  spin?: boolean
  'spin-reverse'?: boolean
  'spin-pulse'?: boolean
  type?: string
  color?:string
}