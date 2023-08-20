import type { ILeafer } from '@leafer-ui/interface'

export interface FlexLayoutType {
  // flex child styles
  position?: 'relative' | 'absolute'
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number
  alignSelf?: 'auto' | FlexLayoutType['alignItems']

  // flex child sizes
  height?: number
  width?: number
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number

  // flex child padding
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number

  // flex child margin
  margin?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number

  // flex child positions
  left?: number
  top?: number
  right?: number
  bottom?: number

  // flex container styles
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
  alignContent?: 'flex-start' | 'flex-end' | 'stretch' | 'center' | 'space-between' | 'space-around'
}

export interface LeaferFlexType extends Omit<FlexLayoutType, 'height' | 'width'>, ILeafer {
  children: LeaferFlexType[]
}
