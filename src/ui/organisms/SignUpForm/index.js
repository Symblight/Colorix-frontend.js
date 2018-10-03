import React from 'react'
import styled from 'styled-components'

import { FieldForm, Button } from 'ui'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h3 {
        text-align: center;
    }
`

const FormItems = styled.div`
    display: flex;
    flex-direction: column;
`


export const SignUpForm = () => (
  <Wrapper>
    <h3>Create Account</h3>
    <FormItems>
      <FieldForm label="first name" />
      <FieldForm label="last name" />
      <FieldForm label="username" />
      <FieldForm label="password" />
      <Button>Sign up</Button>
    </FormItems>
  </Wrapper>
)
