import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { Label } from 'ui'


const InputForm = styled.input`
    position: relative;
    padding: ${ifProp('enable', '18px 0px 6px 4px', '12px 0px 12px 4px')};
    border: 0px;
    margin: 0;
    outline: 0;
    overflow: hidden;
    width: 100%;
    background-color: transparent;
    z-index: 999;
    font-size: 18px;
`

const LabelForm = styled(Label)`
    position: absolute;
    top:  ${ifProp('enable', '0px', '12px')};
    left: 4px;
    z-index: 1;
    transition: 100ms;
    font-size: ${ifProp('enable', '16px', '20px')};
    color: ${palette('grayscale', 3, true)};
`

const InputWrap = styled.div`
    position: relative;
    width: 100%;
    background-color: ${palette('grayscale', 0, true)};
`

const Wrapper = styled.nav`
    display: flex;
    width: 100%;
    background-color: ${palette('grayscale', 4)};
`

export class PanelEditor extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.string,
    value: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      enable: !!props.value,
    }
  }

  onChange = (event) => {
    const { onChange } = this.props

    this.setState({ enable: !!event.target.value })

    if (onChange) {
      onChange(event, event.target.value)
    }
  }

  render() {
    const { label, value } = this.props
    const { enable } = this.state

    return (
      <Wrapper>
        <InputWrap>
          <LabelForm enable={enable}>{label || ''}</LabelForm>
          <InputForm
            onChange={this.onChange}
            enable={enable}
            value={value}
          />
        </InputWrap>
      </Wrapper>
    )
  }
}
