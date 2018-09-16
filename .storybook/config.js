import { injectGlobal } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { setOptions } from '@storybook/addon-options'
import JsxAddon from 'storybook-addon-jsx'
import { globalStyles } from '../client/components/ui/theme'


injectGlobal`
  ${globalStyles}
  html, body {
    background-color: inherit;
  }
`

setAddon(JsxAddon)

addDecorator(withKnobs)

setOptions({
    name: 'Colorix',
    showAddonPanel: true,
    showSearchBox: false,
    sortStoriesByKind: true,
  })

  configure(() => {
    const req = require.context('../client/', true, /\.story\.js$/)
  
    req.keys().forEach(req)
  }, module)