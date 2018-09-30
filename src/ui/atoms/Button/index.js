import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { font, palette } from 'styled-theme'


const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) => transparent ? 'transparent' : palette(disabled ? 2 : 1)

const foregroundColor = ({ transparent, disabled }) => transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const styles = css`
  font-family: ${font('primary')};
  font-size: ${fontSize};
  cursor: pointer;
  padding: .608rem 1rem;
  border-radius: 0.125em;
  border: 0.0625em solid transparent;
  box-sizing: border-box;
  transition: 250ms ease-out, color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  &:hover {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }
  &:focus {
    outline: none
  }
`

const StyledLink = styled(({
  palette, ...props
}) => <Link {...props} />)`${styles}`

const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

export const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}
