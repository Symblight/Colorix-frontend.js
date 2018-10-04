import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Form, FieldForm, Button, Link } from 'ui'


const FormRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -8px;
    margin-right: -8px;
`

const FieldFormRow = styled(FieldForm)`
    padding-left: 8px;
    padding-right: 8px;
`

export class SignUpForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func,
      onChange: PropTypes.func,
    }

    onChangeFirstName = (event, value) => {
      const { onChange } = this.this.props

      if (onChange) {
        onChange(event, value)
      }
    }


    renderFields = () => {
      const { onChange, firstName, lastName, password, username } = this.props

      return (
        <Fragment>
          <FormRow>
            <FieldFormRow onChange={onChange} label="first name" name="firstName" value={firstName} />
            <FieldFormRow onChange={onChange} label="last name" name="lastName" value={lastName} />
          </FormRow>
          <FieldForm onChange={onChange} label="username" name="username" value={username} />
          <FieldForm onChange={onChange} label="password" name="password" type="password" value={password} />
        </Fragment>
      )
    }

    renderSubmit = () => {
      const { onSubmit } = this.props

      return (
        <Button onClick={onSubmit}>Create account</Button>
      )
    }

    renderLinks = () => (
      <span>Already have an account? <Link to="/login">Login</Link></span>
    )

    render() {
      return (
        <Form
          title="Sign up"
          link={this.renderLinks()}
          fields={this.renderFields()}
          submit={this.renderSubmit()}
        />
      )
    }
}
