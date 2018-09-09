import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.input`
`

export const Input = ({
  enable,
}) => (
  <Wrapper enable />
)

Input.propTypes = {
  enable: PropTypes.bool,
}

Input.defaultProps = {
  enable: false,
}
