import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { size } from 'styled-theme'
import { PageTemplate, Header, LoginForm } from 'ui'


const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`

export class LoginPage extends PureComponent {
  render() {
    return (
      <PageTemplate
        header={<Header sign />}
      >
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </PageTemplate>
    )
  }
}
