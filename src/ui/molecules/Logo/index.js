import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'ui'


const Wrapper = styled.div`
    margin-right: 12px;
    margin-bottom: auto;
    margin-top: auto;
`

export const Logo = (
  props,
) => (
  <Wrapper {...props}>
    <Link palette="secondary" to="/" activeClassName="active">Colorix</Link>
  </Wrapper>
)

Logo.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Logo.defaultProps = {
  palette: 'grayscale',
}
