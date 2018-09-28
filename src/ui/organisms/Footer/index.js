import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link, Icon } from 'ui'


const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
`

const Credits = styled.div`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

export const Footer = (props) => (
  <Wrapper {...props}>
    <Credits>
        Made with
      <Icon icon="heart" /> by <Link href="https://github.com/diegohaz">Symblight</Link>
    </Credits>
  </Wrapper>
)
