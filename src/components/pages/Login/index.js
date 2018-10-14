import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { size } from 'styled-theme'
import { PageTemplate, Header, LoginForm } from 'ui'


const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 72px auto;
`

export class LoginPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = (event, value) => {
    const field = event.target.name

    this.setState({ [field]: value })
  }

  handleSubmit = () => {
    console.log('submit')
  }

  render() {
    const { username, password } = this.state

    return (
      <PageTemplate
        header={<Header sign />}
      >
        <Wrapper>
          <LoginForm
            username={username}
            password={password}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Wrapper>
      </PageTemplate>
    )
  }
}
