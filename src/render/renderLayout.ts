import initYoga from 'yoga-wasm-web/asm'
import type { Node } from 'yoga-wasm-web/asm'
import type { LeaferFlexType } from '../types'
import { flexLayoutMap } from './maps/attrsMap'

export function renderLayout(leafer: LeaferFlexType) {
  const Yoga = initYoga()
  const leaferNode = Yoga.Node.create()
  setFlexLayout(leaferNode, leafer)

  if (leafer.children.length === 0)
    return
  leafer.children.forEach((child, index) => {
    const node = Yoga.Node.create()
    setFlexLayout(node, child)

    leaferNode.insertChild(node, index)
    leaferNode.calculateLayout()

    const layout = node.getComputedLayout()
    child.x = layout.left
    child.y = layout.top
    child.width = layout.width
    child.height = layout.height
    if (child.children)
      renderLayout(child)
  })
}

const flexAttributes = [
  // flex child styles
  'position', 'flexGrow', 'flexShrink', 'flexBasis', 'alignSelf',
  // flex child sizes
  'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight',
  // flex child margin
  'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
  // flex child padding
  'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
  // flex child positions
  'left', 'top', 'right', 'bottom', 'x', 'y',
  // flex container styles
  'flexDirection', 'flexWrap', 'justifyContent', 'alignItems', 'alignContent',
]

function setFlexLayout(node: Node, leafer: LeaferFlexType) {
  for (const key in leafer) {
    if (flexAttributes.includes(key)) {
      const value = leafer[key as keyof typeof leafer]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      flexLayoutMap[key as keyof typeof flexLayoutMap](value, node)
    }
  }
}
