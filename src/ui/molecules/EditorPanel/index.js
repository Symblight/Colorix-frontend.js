import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Button, Input } from 'ui'


const Wrapper = styled.nav`
    display: flex;
    height: 56px;
    background-color: ${palette('grayscale', 4)};
`

export const PanelEditor = () => (
  <Wrapper>
    <Input />
    <Button>Save</Button>
  </Wrapper>
)
