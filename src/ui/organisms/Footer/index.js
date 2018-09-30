import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link, Icon, Block } from 'ui'


const Wrapper = styled(Block)`
  padding: 2rem;
`

const Credits = styled.div`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

export const Footer = (props) => (
  <Wrapper opaque reverse {...props}>
    <Credits>
        Made with
      <Icon icon="heart" /> by <Link href="https://github.com/diegohaz">Symblight</Link>
    </Credits>
  </Wrapper>
)
