import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const InputWrap = styled.input`
    width: 100%;
    line-height: 18px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #fff;
    background-color: #fff;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    padding: 13px 25px;
`

const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
`

export const Input = ({
  ...props
}) => (
  <Wrapper>
    <InputWrap type="text" {...props} />
  </Wrapper>
)

Input.propTypes = {
  enable: PropTypes.bool,
}

Input.defaultProps = {
  enable: false,
}
