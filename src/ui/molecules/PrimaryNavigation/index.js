import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link, Logo } from 'ui'


const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  li {
    a {
      font-weight: 300;
      color: ${palette('grayscale', 1)};
      font-size: 1.25rem;
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
