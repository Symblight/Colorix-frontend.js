import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { DropdownItem, Icon } from 'ui'


const WrapperList = styled.ul`
  position: absolute;
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
  padding: 0px 4px 0px 4px;
  cursor: pointer;
  height: 100%;

  span {
    margin-right: 0.5rem;
  }
`

const Layout = styled.div`
  position: relative;
`

export class Dropdown extends PureComponent {
  state = {
    toggle: false,
  }

  static propTypes = {
    title: PropTypes.string,
    direction: PropTypes.string,
    data: PropTypes.arrayOf(Object),
  }

  componentDidMount() {
    document.addEventListener('click', this.hadnleOutside, false)
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hadnleOutside, false)
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleToggle = () => {
    const { toggle } = this.state

    this.setState({
      toggle: !toggle,
    })
  }

  hadnleOutside = (event) => {
    if (!this.node.contains(event.target)) {
      this.setState({
        toggle: false,
      })
    }
  }

  renderList() {
    const { data, direction } = this.props

    return (
      <WrapperList direction={direction}>
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
        <Layout innerRef={(node) => {
          this.node = node
        }}
        >
          <WrapItem onClick={this.handleToggle} id={title}>
            <span>{title}</span> <Icon icon='arrow-down' height={15} />
          </WrapItem>
          {
          toggle
            ? this.renderList() : null
          }
        </Layout>
      </Fragment>
    )
  }
}
