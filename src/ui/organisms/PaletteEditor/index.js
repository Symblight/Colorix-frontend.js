import React, { PureComponent, Fragment } from 'react'
import PropsTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { SketchPicker } from 'react-color'

import { PanelEditor, Colour, Button } from 'ui'


const DEFAULT_COLORS = [{ id: 0, hex: '#eeeeee' }, { id: 1, hex: '#e0e0e0' }, { id: 2, hex: '#bdbdbd' }, { id: 3, hex: '#9e9e9e' }]
const showContent = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(15px);
  }
`
const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
  height: 500px;
  animation-duration: .4s;
  transform-origin: top;
  animation-name: ${showContent};
  animation-fill-mode: backwards;
  z-index: 1;
`

const Layout = styled.div`
  position: relative;
  margin: 72px auto;
  width: 100%;
  max-width: 500px;
  text-align: center;
`

const SkecthContainer = styled.div`
  position: absolute;
  z-index: 999;
  right: -240px;
`

export class PaletteEditor extends PureComponent {
  static propTypes = {
    onClick: PropsTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      colors: DEFAULT_COLORS,
      currentColor: {
        color: '',
        id: -1,
      },
    }
  }

  handleClick = (event, value) => {
    this.setState({ currentColor: value })
  }

  handleChangeComplete = ({ hex }) => {
    const { colors, currentColor } = this.state

    const newColors = colors

    newColors.map((color) => {
      if (color.id === currentColor.id) {
        const newColor = color

        newColor.hex = hex
      }

      return color
    })

    this.setState({ currentColor: { ...currentColor, color: hex }, colors: newColors })
  }

  onSave = () => {
    const { onClick } = this.props
    const { colors } = this.state

    if (onClick) {
      onClick(colors)
    }
  }

  render() {
    const { colors, currentColor } = this.state

    return (
      <Fragment>
        <Layout>
          <PanelEditor label='Title' />
          <SkecthContainer>
            {
              currentColor.color ? (
                <SketchPicker
                  onChangeComplete={this.handleChangeComplete}
                  color={currentColor.color}
                />
              )
                : null
          }
          </SkecthContainer>
          <Wrapper>
            {
              colors.map((color) => (
                <Colour onClick={this.handleClick} key={color.id} id={color.id} color={color.hex} />
              ))
            }
          </Wrapper>
          <Button onClick={this.onSave}>Save</Button>
        </Layout>
      </Fragment>
    )
  }
}
