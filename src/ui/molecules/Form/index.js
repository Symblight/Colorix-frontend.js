import React from 'react'
import styled from 'styled-components'

import { palette } from 'styled-theme'
import { } from 'ui'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;

    h2 {
        text-align: center;
    }
`

const FormItems = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 12px;
`
const ErrorBlock = styled.div`
  color: ${palette('grayscale', 0, true)};
  background-color: ${palette('danger', 0)};
  font-weight: 700;
  border-radius: 2px;
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const Form = ({ fields, link, title, error, submit }) => (
  <Wrapper>
    <h2>{title}</h2>
    <FormItems>
      {fields}
      {error ? <ErrorBlock>{error}</ErrorBlock> : null }
      {submit}
    </FormItems>
    {link}
  </Wrapper>
)
