import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link, Logo } from 'ui'


const Nav = styled.nav`
  display: flex;
  align-items: center;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  li {
    a {
      color: ${palette('grayscale', 1, true)};
      font-size: 16px;
      &.active {
        color: ${palette('grayscale', 0)};
      }
    }
  }
`

export const PrimaryNavigation = (props) => (
  <Fragment>
    <Logo />
    <Nav {...props}>
      <li><Link to="/login" activeClassName="active">Login</Link></li>
      <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
    </Nav>
  </Fragment>
)

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}
