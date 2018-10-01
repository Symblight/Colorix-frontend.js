import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { PrimaryNavigation } from '../../molecules'
import { Block } from '../../atoms'


const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 1rem;
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

export const Header = ({ ...props }) => (
  <Wrapper opaque reverse {...props}>
    <InnerWrapper>
      <PrimaryNavigation reverse />
    </InnerWrapper>
  </Wrapper>
)
