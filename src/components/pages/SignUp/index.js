import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { PageTemplate, Header, SignUpForm } from 'ui'


const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`

export class SignUpPage extends PureComponent {
  render() {
    return (
      <PageTemplate
        header={<Header sign />}
      >
        <Wrapper>
          <SignUpForm />
        </Wrapper>
      </PageTemplate>
    )
  }
}
