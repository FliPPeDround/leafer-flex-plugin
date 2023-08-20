import initYoga from 'yoga-wasm-web/asm'
import type { Node } from 'yoga-wasm-web/asm'
import type { LeaferFlexType } from '../types'
import { flexLayoutMap } from './maps/attrsMap'

export function renderLayout(leafer: LeaferFlexType) {
  const Yoga = initYoga()
  const leaferNode = Yoga.Node.create()
  leaferNode.setWidth(leafer.width!)
  leaferNode.setHeight(leafer.height!)
  setFlexLayout(leaferNode, leafer)

  if (leafer.children.length === 0)
    return
  leafer.children.forEach((child, index) => {
    const node = Yoga.Node.create()
    node.setWidth(child.width!)
    node.setHeight(child.height!)
    setFlexLayout(node, child)

    leaferNode.insertChild(node, index)
    leaferNode.calculateLayout()

    const layout = node.getComputedLayout()
    child.set({
      x: layout.left,
      y: layout.top,
      width: layout.width,
      height: layout.height,
    })
    if (child.children)
      renderLayout(child)
  })
}

const flexAttributes = [
  'flexDirection', 'flexWrap',
  'justifyContent', 'alignItems', 'alignContent',
  'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection',
  'margin', 'padding',
]

function setFlexLayout(node: Node, leafer: LeaferFlexType) {
  for (const key in leafer) {
    if (flexAttributes.includes(key)) {
      const value = leafer[key as keyof LeaferFlexType]
      flexLayoutMap[key as keyof typeof flexLayoutMap](value, node)
    }
  }
}
