import React, { PureComponent } from 'react'
import styled from 'styled-components'

import { PageTemplate, Header, SignUpForm } from 'ui'


const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 72px auto;
`

export class SignUpPage extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      lastName: '',
      firstName: '',

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
    const { firstName, lastName, password, username } = this.state

    return (
      <PageTemplate
        header={<Header sign />}
      >
        <Wrapper>
          <SignUpForm
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            firstName={firstName}
            lastName={lastName}
            password={password}
            username={username}
          />
        </Wrapper>
      </PageTemplate>
    )
  }
}
