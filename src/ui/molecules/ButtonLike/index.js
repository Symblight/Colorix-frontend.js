import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Icon } from 'ui'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 4px;
    border: 1px solid ${palette('grayscale', 1, true)};
    padding: 0px 8px;
    text-align: center;
    cursor: pointer;
    background-color: ${ifProp('active', palette('grayscale', 1, true), palette('grayscale', 0, true))};
    transition: 0.6s;

    &:hover {
        background-color: ${palette('grayscale', 1, true)};
        transition: 0.6s;
    }
`

export const ButtonLike = ({ onClick, children, active }) => (
  <Wrapper onClick={onClick} active={active}>
    <Icon icon="heart" />
    {children}
  </Wrapper>
)
