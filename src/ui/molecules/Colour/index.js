import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { palette } from 'styled-theme'


const DELAY_MS = 50

const showContent = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(15px);
  }
`

const Wrapper = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-grow: 1;
  color: ${palette('grayscale', 1, true)};
  background-color: ${({ color }) => color};
  animation-delay: ${(props) => `${props.id * DELAY_MS}ms`};
  animation-duration: .4s;
  transform-origin: top;
  animation-name: ${showContent};
  animation-fill-mode: backwards;
  
  &:hover {
    cursor: pointer;
  }
`

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
`

export class Colour extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    id: PropTypes.number,
    onClick: PropTypes.func,
  }

  static defaultPropTypes = {
    color: '#000',
    title: 'title',
  }

  onClick = (event) => {
    const { color, onClick, id } = this.props

    if (onClick) {
      onClick(event, { color, id })
    }
  }

  render() {
    const { color, id } = this.props

    return (
      <Wrapper color={color} onClick={this.onClick} id={id}>
        <Content>
          <span>{color}</span>
        </Content>
      </Wrapper>
    )
  }
}
