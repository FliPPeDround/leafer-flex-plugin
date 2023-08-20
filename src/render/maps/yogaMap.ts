import {
  ALIGN_AUTO,
  ALIGN_BASELINE,
  ALIGN_CENTER,
  ALIGN_FLEX_END,
  ALIGN_FLEX_START,
  ALIGN_SPACE_AROUND,
  ALIGN_SPACE_BETWEEN,
  ALIGN_STRETCH,
  FLEX_DIRECTION_COLUMN,
  FLEX_DIRECTION_COLUMN_REVERSE,
  FLEX_DIRECTION_ROW,
  FLEX_DIRECTION_ROW_REVERSE,
  JUSTIFY_CENTER,
  JUSTIFY_FLEX_END,
  JUSTIFY_FLEX_START,
  JUSTIFY_SPACE_AROUND,
  JUSTIFY_SPACE_BETWEEN,
  JUSTIFY_SPACE_EVENLY,
  POSITION_TYPE_ABSOLUTE,
  POSITION_TYPE_RELATIVE,
  POSITION_TYPE_STATIC,
  WRAP_NO_WRAP,
  WRAP_WRAP,
  WRAP_WRAP_REVERSE,
} from 'yoga-wasm-web/asm'

const position = {
  static: POSITION_TYPE_STATIC,
  relative: POSITION_TYPE_RELATIVE,
  absolute: POSITION_TYPE_ABSOLUTE,
}

const flexDirection = {
  'row': FLEX_DIRECTION_ROW,
  'row-reverse': FLEX_DIRECTION_ROW_REVERSE,
  'column': FLEX_DIRECTION_COLUMN,
  'column-reverse': FLEX_DIRECTION_COLUMN_REVERSE,
} as const

const flexWrap = {
  'nowrap': WRAP_NO_WRAP,
  'wrap': WRAP_WRAP,
  'wrap-reverse': WRAP_WRAP_REVERSE,
} as const

const alignContent = {
  'flex-start': ALIGN_FLEX_START,
  'flex-end': ALIGN_FLEX_END,
  'stretch': ALIGN_STRETCH,
  'center': ALIGN_CENTER,
  'space-between': ALIGN_SPACE_BETWEEN,
  'space-around': ALIGN_SPACE_AROUND,
} as const

const justifyContent = {
  'flex-start': JUSTIFY_FLEX_START,
  'flex-end': JUSTIFY_FLEX_END,
  'center': JUSTIFY_CENTER,
  'space-between': JUSTIFY_SPACE_BETWEEN,
  'space-around': JUSTIFY_SPACE_AROUND,
  'space-evenly': JUSTIFY_SPACE_EVENLY,
} as const

const alignItems = {
  'stretch': ALIGN_STRETCH,
  'flex-start': ALIGN_FLEX_START,
  'center': ALIGN_CENTER,
  'flex-end': ALIGN_FLEX_END,
  'baseline': ALIGN_BASELINE,
} as const

const alignSelf = {
  auto: ALIGN_AUTO,
  ...alignItems,
} as const

export default {
  // flex child styles
  position,
  flexDirection,
  flexWrap,
  alignContent,
  justifyContent,
  alignItems,
  alignSelf,
} as const
