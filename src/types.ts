import type { ILeafer } from '@leafer-ui/interface'

export interface FlexType {
  flexDirection?: 'row' | 'column'
  flexWrap?: 'wrap' | 'nowrap'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'auto' | 'space-between' | 'space-around'
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' | 'auto' | 'space-between' | 'space-around'
  flex?: number
  flexGrow?: number
  flexShrink?: number
  flexBasis?: number
  gap?: number
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  margin?: number
  padding?: number
  display?: 'flex' | 'none'
}

export interface LeaferFlexType extends FlexType, ILeafer {
  children: LeaferFlexType[]
}
