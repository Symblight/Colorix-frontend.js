import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { SketchPicker } from 'react-color'

import { Icon, Label } from 'ui'


const Wrapper = styled.article`
  text-align: center;
  padding: 1.6rem;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: ${palette('grayscale', 1, true)};
  background-color: ${({ color }) => color};

  &:hover {
    cursor: pointer;
  }
`

const Items = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  opacity: 0;
  transition: all .1s ease-in-out;

  &:hover { 
    opacity: 1;
  }

  span {
    margin-bottom: 24px;
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const SkecthContainer = styled.div`
  position: absolute;
`

export class Colour extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    onDrag: PropTypes.func,
  }

  static defaultPropTypes = {
    color: '#000',
    title: 'title',
  }

  constructor(props) {
    super(props)
    this.state = {
      show: false,
      color: props.color ? props.color : '#fff',
    }
  }

  handleClick = () => {
    const { show } = this.state

    this.setState({ show: !show })
  }

  handleChangeComplete = ({ hex }) => {
    this.setState({ color: hex })
  };

  onDrag = () => {
    const { onDrag } = this.props

    if (onDrag) {
      onDrag()
    }
  }

  render() {
    const { title } = this.props
    const { show, color } = this.state

    return (
      <Wrapper color={color}>
        <Content>
          <SkecthContainer>
            {
              show ? <SketchPicker onChangeComplete={this.handleChangeComplete} color={color} /> : null
            }
          </SkecthContainer>
          <span>{color}</span>
        </Content>
      </Wrapper>
    )
  }
}
