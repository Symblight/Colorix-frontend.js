import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../../theme'


const Wrapper = styled.div`
    background-color: ${color.primary}
    border-radius: 2px;
    padding: 0 0.8rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none !important;
    white-space: nowrap;
    cursor: pointer;
`

export const Button = ({
  children, ...props
}) => (
  <Wrapper {...props}>{children}</Wrapper>
)

Button.propTypes = {
  children: PropTypes.node,
}

Button.defaultProps = {
  children: null,
}
