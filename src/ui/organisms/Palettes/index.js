import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Block } from 'ui'


const Wrapper = styled(Block)`
  width: 100%;
  max-width: ${size('maxWidth')};
  margin: auto;
`

export const Palettes = () => (
  <Wrapper>
    <div>palettes</div>
    <div>menu</div>
  </Wrapper>
)
