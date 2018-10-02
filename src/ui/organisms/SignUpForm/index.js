import React from 'react'
import styled from 'styled-components'

import { Input, Label, Button } from 'ui'


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

const Field = styled.div`
    margin-bottom: 8px;
`

export const SignUpForm = () => (
  <Wrapper>
    <h3>Create Account</h3>
    <FormItems>
      <Field>
        <Label>username</Label>
        <Input />
      </Field>
      <Field>
        <Label>first name</Label>
        <Input />
      </Field>
      <Field>
        <Label>last name</Label>
        <Input />
      </Field>
      <Field>
        <Label>email</Label>
        <Input />
      </Field>
      <Field>
        <Label>password</Label>
        <Input />
      </Field>
      <Field>
        <Button>Sign up</Button>
      </Field>
    </FormItems>
  </Wrapper>
)
