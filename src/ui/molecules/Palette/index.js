import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Label, ButtonLike } from 'ui'
import {
  Wrapper,
  PaletteWraps,
  ColorWrap,
  ItemsColor,
  FooterWrap,
  FooterItems,
  HashCopyAbsolute,
} from './index.style'


export class Palette extends PureComponent {
  static propTypes = {
    data: PropTypes.object,
    onSelect: PropTypes.func,
  }

  state = {
    selectedId: -1,
  }

  handleSelectColor = (event) => {
    const { selectedId } = this.state

    if (event.target.id) {
      this.setState({ selectedId: selectedId === event.target.id ? -1 : event.target.id })
    }
  }

  onSelect = () => {
    const { onSelect, data } = this.props

    if (onSelect) {
      onSelect(data.id)
    }
  }

  handleCopy = (event) => {
    this.textArea.select()
    document.execCommand('copy')
  }

  renderColors() {
    const { data } = this.props
    const { selectedId } = this.state

    return (
      <PaletteWraps>
        {
        data && data.colors.length ? data.colors.map((color) => (
          <Fragment key={color.id}>
            {
              selectedId !== -1 && selectedId === color.id
                ? (
                  <ItemsColor id={selectedId} onClick={this.handleSelectColor}>
                    <CopyToClipboard text={color.hash}>
                      <HashCopyAbsolute value={color.hash} />
                    </CopyToClipboard>
                  </ItemsColor>
                )
                : null
            }
            <ColorWrap
              select={selectedId}
              onClick={this.handleSelectColor}
              color={color.hash}
              id={color.id}
            />
          </Fragment>
        )) : null
      }
      </PaletteWraps>
    )
  }

  renderFooter() {
    const { data } = this.props

    return (
      <FooterWrap>
        <Label>{data.title}</Label>
        <FooterItems>
          <ButtonLike onClick={this.onSelect}>
            <span>{data.likes}</span>
          </ButtonLike>
          <span>{data.create_at}</span>
        </FooterItems>
      </FooterWrap>
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderColors()}
        {this.renderFooter()}
      </Wrapper>
    )
  }
}
