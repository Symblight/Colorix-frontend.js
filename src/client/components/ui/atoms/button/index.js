import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../../theme'


const Wrapper = styled.button`
    background-color: ${color.primary}
    border-radius: 2px;
    padding: 0 0.8rem;
    color: white;
`

export const Button = ({
  text,
}) => (
  <Wrapper>{text}</Wrapper>
)

Button.propTypes = {
  text: PropTypes.string,
}

Button.defaultProps = {
  text: 'button',
}
