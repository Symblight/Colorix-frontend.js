import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Block, PrimaryNavigation, Logo, Dropdown } from 'ui'


const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  height: 54px;
  @media screen and (max-width: 640px) {
    padding: 0.5rem;
  }
`
const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  font-size: 18px;
  max-width: ${size('maxWidth')};
  padding-left: 2rem;
  padding-right: 2rem;
  > :not(:first-child) {
    
  }
`

export const Header = ({ sign, ...props }) => (
  <Wrapper {...props}>
    {
    !sign
      ? (
        <InnerWrapper>
          <PrimaryNavigation reverse />
        </InnerWrapper>
      )
      : <Logo />
  }
  </Wrapper>
)
