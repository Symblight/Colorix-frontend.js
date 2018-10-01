import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  background-color: ${({ color }) => color};

  &:hover {
    cursor: pointer;
  }
`

export const Colour = ({ color, title }) => (
  <Wrapper color={color}>
    <div>brush</div>
    <span>{color}</span>
  </Wrapper>
)

Colour.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

Colour.defaultPropTypes = {
  color: '#000',
  title: 'title',
}
