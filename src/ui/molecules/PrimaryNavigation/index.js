import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from '../../atoms'


const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`

export const PrimaryNavigation = (props) => (
  <Nav {...props}>
    <li><Link to="/" exact activeClassName="active">Colorix</Link></li>
    <li><Link to="/login" activeClassName="active">login</Link></li>
    <li><Link to="/signup" activeClassName="active">create account</Link></li>
  </Nav>
)

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}
