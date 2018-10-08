import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'


const Wrapper = styled.li`
    padding: 8px 80px 8px 16px;
    margin: 0;
    background-color: ${palette('grayscale', 0, true)};
    transition: 0.6s;
    cursor: pointer;

    &:hover {
        background-color: ${palette('grayscale', 1, true)};
        transition: 0.6s;
    }
`

const Item = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

const StyledLink = styled(({
  children, ...props
}) => <Item><Link {...props}>{children}</Link></Item>)

export const DropdownItem = ({ children, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  }
  return <Item>{children}</Item>
}
