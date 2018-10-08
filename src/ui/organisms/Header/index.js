import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Block, PrimaryNavigation, Logo, Dropdown } from 'ui'


const ITEMS = [{ id: 0, body: 'Saved' }, { id: 1, body: 'New' }, { id: 2, body: 'all' }, { id: 3, body: 'about' }]

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    
  }
`

export const Header = ({ sign, ...props }) => (
  <Wrapper {...props}>
    {
    !sign
      ? (
        <InnerWrapper>
          <Dropdown data={ITEMS} title='Actions' />
          <PrimaryNavigation reverse />
        </InnerWrapper>
      )
      : <Logo />
  }
  </Wrapper>
)
