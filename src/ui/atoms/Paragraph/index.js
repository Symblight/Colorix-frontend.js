import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.p`
    font-size: 30px;
    font-weight: 400;
`

export const ParagraphBlock = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)
