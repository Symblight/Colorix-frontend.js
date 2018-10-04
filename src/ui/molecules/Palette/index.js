import React from 'react'
import styled from 'styled-components'

import { Icon } from 'ui'


const Wrapper = styled.article`

`

export const Palette = () => (
  <Wrapper>
    <div>palette</div>
    <div>
      <Icon icon="heart" />
      <span>time</span>
    </div>
  </Wrapper>
)
