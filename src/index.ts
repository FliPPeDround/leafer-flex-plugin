import type { ILeafer, IObject, IPlugin } from '@leafer-ui/interface'
import { LeaferEvent } from 'leafer-ui'

import initYoga from 'yoga-wasm-web/asm'

export const plugin: IPlugin = {
  importVersion: '1.0.0-beta.9',
  import: ['Leafer'],
  run(LeaferUI: IObject, config?: IObject): void {
  },
  onLeafer(leafer: ILeafer): void {
    leafer.on(LeaferEvent.START, ({ current }) => {
      const _leafer = <ILeafer>current
      renderLayout(_leafer)
    })
  },
}

function renderLayout(leafer: ILeafer) {
  const Yoga = initYoga()
  const leaferNode = Yoga.Node.create()
  leaferNode.setWidth(leafer.width!)
  leaferNode.setHeight(leafer.height!)
  leaferNode.setFlexDirection(Yoga.FLEX_DIRECTION_ROW)

  if (leafer.children.length === 0)
    return
  leafer.children.forEach((child, index) => {
    const node = Yoga.Node.create()
    node.setWidth(child.width!)
    node.setHeight(child.height!)
    if (child.margin)
      node.setMargin(Yoga.EDGE_ALL, child.margin)

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
