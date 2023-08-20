import { EDGE_ALL, EDGE_BOTTOM, EDGE_HORIZONTAL, EDGE_LEFT, EDGE_RIGHT, EDGE_TOP, EDGE_VERTICAL, type Node } from 'yoga-wasm-web/asm'
import yogaMap from './yogaMap'

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

function handleAlignSelf(val: keyof typeof yogaMap['alignSelf'], node: Node) {
  node.setAlignSelf(yogaMap.alignSelf[val])
}

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

export const flexLayoutMap = {
  flexDirection: handleFlexDirection,
  flexWrap: handleFlexWrap,
  justifyContent: handleJustifyContent,
  alignItems: handleAlignItems,
  alignContent: handleAlignContent,
  alignSelf: handleAlignSelf,
  margin: handleMargin,
  padding: handlePadding,
} as const
