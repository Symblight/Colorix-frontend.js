import React, { PureComponent } from 'react'
import styled, { keyframes } from 'styled-components'

import { PanelEditor, Colour, Button } from 'ui'


const show = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(15px);
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  height: 500px;
  animation-duration: .4s;
  transform-origin: top;
  animation-name: ${show};
  animation-fill-mode: backwards;
`

const Layout = styled.div`
  margin: 72px auto;
  width: 100%;
  max-width: 500px;
  text-align: center;
`

export class PaletteEditor extends PureComponent {
  render() {
    return (
      <Layout>
        <PanelEditor label='Title' />
        <Wrapper>
          <Colour color="#3498db" title="PETER RIVER" />
          <Colour color="#f1c40f" title="HOLEWISTERIA" />
          <Colour color="#9b59b6" title="HRITISBELIZE" />
          <Colour color="#e74c3c" title="GREEN SEANEP" />
        </Wrapper>
        <Button>Save</Button>
      </Layout>
    )
  }
}
