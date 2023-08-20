import { EDGE_ALL, EDGE_BOTTOM, EDGE_HORIZONTAL, EDGE_LEFT, EDGE_RIGHT, EDGE_TOP, EDGE_VERTICAL, type Node } from 'yoga-wasm-web/asm'
import yogaMap from './yogaMap'

// flex child styles
function handlePosition(val: keyof typeof yogaMap['position'], node: Node) {
  node.setPositionType(yogaMap.position[val])
}
function handleFlexGrow(val: number, node: Node) {
  node.setFlexGrow(val)
}
function handleFlexShrink(val: number, node: Node) {
  node.setFlexShrink(val)
}
function handleFlexBasis(val: number, node: Node) {
  node.setFlexBasis(val)
}
function handleAlignSelf(val: keyof typeof yogaMap['alignSelf'], node: Node) {
  node.setAlignSelf(yogaMap.alignSelf[val])
}

// flex child sizes
function handleHeight(val: number, node: Node) {
  node.setHeight(val)
}
function handleWidth(val: number, node: Node) {
  node.setWidth(val)
}
function handleMinHeight(val: number, node: Node) {
  node.setMinHeight(val)
}
function handleMinWidth(val: number, node: Node) {
  node.setMinWidth(val)
}
function handleMaxHeight(val: number, node: Node) {
  node.setMaxHeight(val)
}

// flex child margin
function handleMargin(
  val: number | [number, number] | [number, number, number, number],
  node: Node,
) {
  if (typeof val === 'number') {
    node.setMargin(EDGE_ALL, val)
  }
  else if (Array.isArray(val)) {
    switch (val.length) {
      case 2:
        node.setMargin(EDGE_VERTICAL, val[0])
        node.setMargin(EDGE_HORIZONTAL, val[1])
        break
      case 4:
        node.setMargin(EDGE_TOP, val[0])
        node.setMargin(EDGE_RIGHT, val[1])
        node.setMargin(EDGE_BOTTOM, val[2])
        node.setMargin(EDGE_LEFT, val[3])
        break
      default:
        throw new Error('margin length must be 2 or 4')
    }
  }
}
function handleMarginTop(val: number, node: Node) {
  node.setMargin(EDGE_TOP, val)
}
function handleMarginRight(val: number, node: Node) {
  node.setMargin(EDGE_RIGHT, val)
}
function handleMarginBottom(val: number, node: Node) {
  node.setMargin(EDGE_BOTTOM, val)
}
function handleMarginLeft(val: number, node: Node) {
  node.setMargin(EDGE_LEFT, val)
}

// flex child padding
function handlePadding(
  val: number | [number, number] | [number, number, number, number],
  node: Node,
) {
  if (typeof val === 'number') {
    node.setPadding(EDGE_ALL, val)
  }
  else if (Array.isArray(val)) {
    switch (val.length) {
      case 2:
        node.setPadding(EDGE_VERTICAL, val[0])
        node.setPadding(EDGE_HORIZONTAL, val[1])
        break
      case 4:
        node.setPadding(EDGE_TOP, val[0])
        node.setPadding(EDGE_RIGHT, val[1])
        node.setPadding(EDGE_BOTTOM, val[2])
        node.setPadding(EDGE_LEFT, val[3])
        break
      default:
        throw new Error('Padding length must be 2 or 4')
    }
  }
}
function handlePaddingTop(val: number, node: Node) {
  node.setPadding(EDGE_TOP, val)
}
function handlePaddingRight(val: number, node: Node) {
  node.setPadding(EDGE_RIGHT, val)
}
function handlePaddingBottom(val: number, node: Node) {
  node.setPadding(EDGE_BOTTOM, val)
}
function handlePaddingLeft(val: number, node: Node) {
  node.setPadding(EDGE_LEFT, val)
}

// flex child positions
function handleLeft(val: number, node: Node) {
  node.setPosition(EDGE_LEFT, val)
}
function handleTop(val: number, node: Node) {
  node.setPosition(EDGE_TOP, val)
}
function handleRight(val: number, node: Node) {
  node.setPosition(EDGE_RIGHT, val)
}
function handleBottom(val: number, node: Node) {
  node.setPosition(EDGE_BOTTOM, val)
}

// flex container styles
function handleFlexDirection(val: keyof typeof yogaMap['flexDirection'], node: Node) {
  node.setFlexDirection(yogaMap.flexDirection[val])
}

function handleFlexWrap(val: keyof typeof yogaMap['flexWrap'], node: Node) {
  node.setFlexWrap(yogaMap.flexWrap[val])
}

function handleJustifyContent(val: keyof typeof yogaMap['justifyContent'], node: Node) {
  node.setJustifyContent(yogaMap.justifyContent[val])
}

function handleAlignItems(val: keyof typeof yogaMap['alignItems'], node: Node) {
  node.setAlignItems(yogaMap.alignItems[val])
}

function handleAlignContent(val: keyof typeof yogaMap['alignContent'], node: Node) {
  node.setAlignContent(yogaMap.alignContent[val])
}

export const flexLayoutMap = {
  // flex child styles
  position: handlePosition,
  flexGrow: handleFlexGrow,
  flexShrink: handleFlexShrink,
  flexBasis: handleFlexBasis,
  alignSelf: handleAlignSelf,

  // flex child sizes
  height: handleHeight,
  width: handleWidth,
  minHeight: handleMinHeight,
  minWidth: handleMinWidth,
  maxHeight: handleMaxHeight,

  // flex child margin
  margin: handleMargin,
  marginTop: handleMarginTop,
  marginRight: handleMarginRight,
  marginBottom: handleMarginBottom,
  marginLeft: handleMarginLeft,

  // flex child padding
  padding: handlePadding,
  paddingTop: handlePaddingTop,
  paddingRight: handlePaddingRight,
  paddingBottom: handlePaddingBottom,
  paddingLeft: handlePaddingLeft,

  // flex child positions
  top: handleTop,
  x: handleTop,
  right: handleRight,
  bottom: handleBottom,
  left: handleLeft,
  y: handleLeft,

  // flex container styles
  flexDirection: handleFlexDirection,
  flexWrap: handleFlexWrap,
  justifyContent: handleJustifyContent,
  alignItems: handleAlignItems,
  alignContent: handleAlignContent,
} as const
