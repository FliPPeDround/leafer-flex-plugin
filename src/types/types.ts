import type {
  IBoxInputData,
  ICanvasInputData,
  IEllipseInputData,
  IFrameInputData,
  IGroupInputData,
  IImageInputData,
  ILeafer,
  ILineInputData,
  IPlugin,
  IPolygonInputData,
  IRectInputData,
  IStarInputData, ITextInputData,
} from '@leafer-ui/interface'

declare const plugin: IPlugin

export { plugin as default }
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

export interface FrameFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IFrameInputData {}
export interface BoxFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IBoxInputData {}
export interface GroupFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IGroupInputData {}

export interface RectFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IRectInputData {}
export interface EllipseFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IEllipseInputData {}
export interface StarFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IStarInputData {}
export interface LineFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, ILineInputData {}
export interface PolygonFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IPolygonInputData {}

export interface ImageFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, IImageInputData {}
export interface CanvasFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, ICanvasInputData {}

export interface TextFlexData extends Omit<FlexLayoutType, 'height' | 'width'>, ITextInputData {}
