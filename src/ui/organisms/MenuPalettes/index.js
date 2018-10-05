import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { Button } from 'ui'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    position: fixed;
    width: 220px;
    direction: ltr;
`

export class MenuPalettes extends PureComponent {
  render() {
    return (
      <Wrapper>
        <div>input search</div>
        <div>likes</div>
        <Button to='/editor'>Create palettes</Button>
      </Wrapper>
    )
  }
}
