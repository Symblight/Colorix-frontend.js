import React from 'react'
import styled from 'styled-components'

import { PageTemplate, Header, PanelEditor, Colour } from 'ui'


const WrapColours = styled.div`
  display: flex;
  height: 100%;
`

export const EditorPage = () => (
  <PageTemplate
    header={<Header />}
  >
    <PanelEditor />
    <WrapColours>
      <Colour color="#3498db" title="PETER RIVER" />
      <Colour color="#f1c40f" title="HOLEWISTERIA" />
      <Colour color="#9b59b6" title="HRITISBELIZE" />
      <Colour color="#e74c3c" title="GREEN SEANEP" />
      <Colour color="#34495e" title="WET ASPHALT" />
    </WrapColours>
  </PageTemplate>
)
