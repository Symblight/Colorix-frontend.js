import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'
import backgrounds from '@storybook/addon-backgrounds'
import JsxAddon from 'storybook-addon-jsx'

setAddon(JsxAddon)

addDecorator(withKnobs)

setOptions({
    name: 'Colorix',
    showAddonPanel: true,
    showSearchBox: false,
    sortStoriesByKind: true,
  })

  configure(() => {
    const req = require.context('../src/client/', true, /\.story\.js$/)
  
    req.keys().forEach(req)
  }, module)