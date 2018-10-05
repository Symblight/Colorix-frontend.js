import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.span`
    color: #fff;
    border-radius: 4px;
    font-weight: 700;
    padding: 4px;
    transition: 0.6s;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.46);
        transition: 0.6s;
    }

    &:active {
        background-color: rgba(0, 0, 0, 0.22);
        transition: 0.8s;
    }

`

export class HashCopy extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      text: props.value ? props.value : '',
    }
  }

    handleMouseEnter = () => {
      this.setState({
        text: 'COPY',
      })
    }

    handleClick = () => {
      this.setState({
        text: 'COPIED',
      })
    }

    render() {
      const { className } = this.props
      const { text } = this.state

      return (
        <Wrapper onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} className={className}>{text}</Wrapper>
      )
    }
}
