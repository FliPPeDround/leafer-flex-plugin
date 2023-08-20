import type { ILeafer, IPlugin } from '@leafer-ui/interface'
import { LeaferEvent } from 'leafer-ui'
import { renderLayout } from './render/renderLayout'

export const plugin: IPlugin = {
  importVersion: '1.0.0-beta.9',
  import: ['Leafer'],
  run() {},
  onLeafer(leafer: ILeafer): void {
    leafer.on(LeaferEvent.START, ({ current }) => {
      renderLayout(current)
    })
  },
}
