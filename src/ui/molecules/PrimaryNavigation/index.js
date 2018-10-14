import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link, Logo, Dropdown, DropdownItem } from 'ui'


const ITEMS = [
  { id: 0, body: 'Saved' },
  { id: 1, body: 'New', to: '/editor' },
  { id: 2, body: 'Palettes', to: '/' },
  { id: 3, body: 'About', divider: true, to: '/about' },
]

const Nav = styled.nav`
  display: flex;
  list-style: none;
  margin-bottom: auto;
  margin-top: auto;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  li {
    a {
      color: ${palette('grayscale', 1, true)};
      &.active {
        color: ${palette('grayscale', 0)};
      }
    }
  }
`

const Row = styled.div`
  display: flex;
`

export const PrimaryNavigation = (props) => (
  <Fragment>
    <Row>
      <Logo />
      <Dropdown data={ITEMS} title='Actions'>
        <DropdownItem>Saved</DropdownItem>
        <DropdownItem to='/editor'>New</DropdownItem>
        <DropdownItem to='/'>Palettes</DropdownItem>
        <DropdownItem to='/about' divider>About</DropdownItem>
      </Dropdown>
    </Row>
    <Nav {...props}>
      <li><Link to="/login" activeClassName="active">Login</Link></li>
      <li><Link to="/signup" activeClassName="active">Sign up</Link></li>
    </Nav>
  </Fragment>
)

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}
