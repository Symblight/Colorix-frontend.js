import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Label } from 'ui'


const Wrapper = styled.div`
    margin-bottom: 8px;
    width: 100%;
    padding-top: 4px;
`
const InputForm = styled.input`
    position: relative;
    padding: ${ifProp('enable', '18px 0px 6px 12px', '12px 0px 12px 12px')};
    border: 0px;
    margin: 0;
    outline: 0;
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    z-index: 999;
`
const LabelForm = styled(Label)`
    position: absolute;
    top:  ${ifProp('enable', '-5px', '4px')};
    left: 12px;
    z-index: 1;
    transition: 100ms;
    font-size: ${ifProp('enable', '12px', '16px')};
    color: ${palette('grayscale', 3, true)};
`

const InputWrap = styled.div`
    position: relative;
    background-color: ${palette('grayscale', 0, true)};
    border: ${ifProp('error', '2px', '1px')} solid ${ifProp('error', palette('danger', 0), palette('grayscale', 2, true))};
`

const ValidMessage = styled.span`
    background-color: ${palette('danger', 0)};
    padding: 2px;
    font-weight: 700;
    color: white;
`

export class FieldForm extends PureComponent {
    static propTypes = {
      label: PropTypes.string,
      value: PropTypes.string,
      onChange: PropTypes.func,
      validation: PropTypes.object,
      name: PropTypes.string,
    }

    constructor(props) {
      super(props)

      this.state = {
        enable: false,
        validation: {
          error: !props.error ? '' : props.error,
          warning: !props.warning ? '' : props.warning,
        },
      }
    }

    handleChange = (event) => {
      const { onChange } = this.props

      this.setState({ enable: !!event.target.value })

      if (onChange) {
        onChange(event, event.target.value)
      }
    }

    render() {
      const { label, value, name, ...props } = this.props
      const { enable, validation } = this.state

      return (
        <Wrapper {...props}>
          { 
            //   error && error.message
            // ? <ValidMessage>{error.message}</ValidMessage> : null
          }
          <InputWrap>
            <LabelForm enable={enable}>{label || ''}</LabelForm>
            <InputForm onChange={this.handleChange} enable={enable} value={value} name={name} />
          </InputWrap>
        </Wrapper>
      )
    }
}
