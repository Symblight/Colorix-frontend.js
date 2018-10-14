import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { palette } from 'styled-theme'


const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette('grayscale', 0, true)
const foregroundColor = ({ transparent, disabled }) => transparent ? palette('grayscale', 2, true) : palette('grayscale', 0)
const dividerItem = ({ divider }) => divider ? palette('grayscale', 1, true) : 'transparent'

const styles = css`
    padding: 8px 80px 8px 16px;
    font-size: 16px;
    background-color: ${backgroundColor};
    border-top: 1px solid ${dividerItem};
    color: ${foregroundColor};
    transition: 0.6s;
    cursor: pointer;

    &:focus {
      outline: none
    }

    &:hover {
        background-color: ${palette('primary', 0, true)};
        transition: 0.6s;
    }
`
const StyledItem = styled.li`${styles}`
const StyledLink = styled(({
  ...props
}) => <Link {...props} />)`${styles}`

export const DropdownItem = ({ children, ...props }) => {
  if (props.to) {
    return <StyledLink {...props}>{children}</StyledLink>
  }
  return <StyledItem {...props}>{children}</StyledItem>
}
