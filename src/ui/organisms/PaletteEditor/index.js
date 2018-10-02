import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'

import { PanelEditor, Colour } from 'ui'


const Wrapper = styled.div`
  display: flex;
  height: 100%;
`

export class PaletteEditor extends PureComponent {
  render() {
    return (
      <Fragment>
        <PanelEditor />
        <Wrapper>
          <Colour color="#3498db" title="PETER RIVER" />
          <Colour color="#f1c40f" title="HOLEWISTERIA" />
          <Colour color="#9b59b6" title="HRITISBELIZE" />
          <Colour color="#e74c3c" title="GREEN SEANEP" />
          <Colour color="#34495e" title="WET ASPHALT" />
        </Wrapper>
      </Fragment>
    )
  }
}
