import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette as themeColors } from 'styled-theme'
import NavLink from 'react-router-dom/NavLink'


const styles = css`
  font-family: ${font('primary')};
  text-decoration: none;
  font-weight: 500;
  color: ${themeColors({ grayscale: 0 }, 2)};
  &:hover {
    color: ${themeColors({ primary: 1 }, 2)};
    transition: .2s;
  }
`

const StyledNavLink = styled(({
  theme, reverse, palette, ...props
}) => <NavLink {...props} />)`${styles}`

const Anchor = styled.a`${styles}`

export const Link = ({ ...props }) => {
  if (props.to) {
    return <StyledNavLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string,
}

Link.defaultProps = {
  palette: 'primary',
}
