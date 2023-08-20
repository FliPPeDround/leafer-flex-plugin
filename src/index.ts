import type { ILeafer, IObject, IPlugin } from '@leafer-ui/interface'
import { LeaferEvent } from 'leafer-ui'
import { renderLayout } from './render/renderLayout'
import type { LeaferFlexType } from './types'

export const plugin: IPlugin = {
  importVersion: '1.0.0-beta.9',
  import: ['Leafer'],
  run(LeaferUI: IObject, config?: IObject): void {
  },
  onLeafer(leafer: ILeafer): void {
    leafer.on(LeaferEvent.START, ({ current }) => {
      const _leafer = <LeaferFlexType>current
      renderLayout(_leafer)
    })
  },
}
