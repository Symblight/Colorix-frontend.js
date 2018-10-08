import React, { PureComponent, Fragment } from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { DropdownItem, Icon } from 'ui'


const WrapperList = styled.ul`
  position: absolute;
  top: 54px;
  left: 154px;
  display: flex;
  flex-direction: column;
  background-color: ${palette('white', 0)};
  list-style: none;
  text-decoration: none;
  margin: 0;
  padding: 0;
  margin-left: 0;
  border-radius: 0 0 6px 6px;
  overflow: hidden;
  border-top: 1px solid ${palette('grayscale', 1, true)};
`

const WrapItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 4px 8px 4px;
  cursor: pointer;

  span {
    margin-right: 0.5rem;
  }
`

export class Dropdown extends PureComponent {
  state = {
    toggle: false,
  }

  handleToggle = () => {
    const { toggle } = this.state

    this.setState({
      toggle: !toggle,
    })
  }

  renderList() {
    const { data, direction } = this.props

    return (
      <WrapperList>
        {
            data.map((item) => (
              <DropdownItem key={item.id}>{item.body}</DropdownItem>
            ))
          }
      </WrapperList>
    )
  }

  render() {
    const { toggle } = this.state
    const { title } = this.props

    return (
      <Fragment>
        <WrapItem onClick={this.handleToggle}>
          <span>{title}</span> <Icon icon='arrow-down' height={15} />
        </WrapItem>
        {
          toggle
            ? this.renderList() : null
        }
      </Fragment>
    )
  }
}
