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

const WrapLikes = styled.div`
  min-height: 200px;
  margin-bottom: 12px;
`

export class MenuPalettes extends PureComponent {
  render() {
    return (
      <Wrapper>
        <WrapLikes>likes</WrapLikes>
        <Button to='/editor'>Create palettes</Button>
      </Wrapper>
    )
  }
}
