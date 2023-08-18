import type { IRectInputData } from 'leafer-ui'
import { Box, Leafer, Rect, usePlugin } from 'leafer-ui'
import { plugin } from 'leafer-flex-plugin'

usePlugin(plugin)

const leafer = new Leafer({ view: window })

type RectFlexInputData = IRectInputData & { margin: number }

const rect = new Box({
  x: 10,
  width: 100,
  height: 100,
  fill: 'red',
  margin: 10,
  padding: 10,
  draggable: true,
} as RectFlexInputData)

const rect1 = new Rect({
  width: 50,
  height: 50,
  margin: 10,
  fill: 'blue',
})

leafer.add(rect)
rect.add(rect1)
