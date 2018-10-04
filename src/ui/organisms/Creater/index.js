import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import HeroImage from 'assets/images/creater.jpg'

import { Block, ParagraphBlock } from 'ui'


const Wrapper = styled(Block)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: ${size('maxWidth')};
  margin: auto;
`

const Image = styled.img`
  border-radius: 50%;
  margin-left: 24px;
  width: 200px;
  height: 200px;
`

export const Creater = () => (
  <Wrapper>
    <ParagraphBlock>Developer and designer Im</ParagraphBlock>
    <Image src={HeroImage} />
  </Wrapper>
)
