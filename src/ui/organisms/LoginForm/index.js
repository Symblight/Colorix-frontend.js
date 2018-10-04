import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'

import { FieldForm, Form, Button, Link } from 'ui'


export class LoginForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string,
  }

  renderSubmit() {
    const { onSubmit } = this.props

    return (
      <Button onClick={onSubmit}>Sign in</Button>
    )
  }

  renderFields() {
    const { onChange, password, username } = this.props

    return (
      <Fragment>
        <FieldForm onChange={onChange} value={username} name="username" label="username" />
        <FieldForm onChange={onChange} value={password} name="password" label="password" type="password" />
      </Fragment>
    )
  }

  renderLink = () => (
    <span>{'Don\'t have an account? '}<Link to="/signup">Join</Link></span>
  )

  render() {
    return (
      <Form
        title='Login'
        link={this.renderLink()}
        submit={this.renderSubmit()}
        error="Invalid email or username"
        fields={this.renderFields()}
      />
    )
  }
}
