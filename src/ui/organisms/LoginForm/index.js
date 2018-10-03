import React from 'react'
import styled from 'styled-components'

import { FieldForm, Button } from 'ui'


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h2 {
        text-align: center;
    }
`

const FormItems = styled.form`
    display: flex;
    flex-direction: column;
`

export const LoginForm = () => (
  <Wrapper>
    <h2>Login in Colorix</h2>
    <FormItems>
      <FieldForm label="username" error={{ message: 'empty input' }} />
      <FieldForm label="password" />
      <Button>Sign in</Button>
    </FormItems>
  </Wrapper>
)
