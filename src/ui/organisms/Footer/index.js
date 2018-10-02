import React, { Fragment } from 'react'
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
  color: ${palette('grayscale', 2, true)};
`
const Line = styled.span`
  height: 6px;
  background-image: linear-gradient(to right,#b973ff 0,#73d6ff 24%,#61dac8 50%,#73d6ff 77%,#b973ff 100%);
  display: block;
  background-size: 100% auto;
`

export const Footer = (props) => (
  <Fragment>
    <Line />
    <Wrapper opaque reverse {...props}>
      <Credits>
        Made with
        <Icon icon="heart" /> by <Link href="https://github.com/symblight">Symblight</Link>
      </Credits>
    </Wrapper>
  </Fragment>
)
