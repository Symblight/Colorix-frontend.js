import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'ui'


const Wrapper = styled.div`
    font-size: 24px;
    h3 {
      margin: 0;
      padding: 0;
    }
    a {
      color: ${palette('white', 0)};
      &.active{
        color: ${palette('white', 0)};
      }
    }
`

export const Logo = (
  props,
) => (
  <Wrapper {...props}>
    <Link palette="secondary" to="/" activeClassName="active"><h3>Colorix</h3></Link>
  </Wrapper>
)

Logo.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Logo.defaultProps = {
  palette: 'grayscale',
}
