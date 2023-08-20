import { Box, Leafer, Rect, UI, usePlugin } from 'leafer-ui'
import { plugin } from 'leafer-flex-plugin'

usePlugin(plugin)

const leafer = new Leafer({
  view: window,
})

const box = new Box({
  width: 100,
  height: 100,
  fill: 'red',
  draggable: true,
  y: 100,
  margin: 10,
  flexDirection: 'row',
  alignItems: 'center',
})

const rect = new Rect({
  width: 50,
  height: 50,
  fill: 'blue',
})

const ui = UI.one({
  tag: 'Rect',
  alignContent: 'center',
  width: 30,
  height: 30,
  fill: '#fff',
})

leafer.add(box)
box.add(rect)
box.add(ui)
