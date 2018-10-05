import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { Block, PrimaryNavigation, Logo } from 'ui'


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
    margin-left: 1rem;
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
