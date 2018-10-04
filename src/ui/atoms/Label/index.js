import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


export const Label = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Label.defaultProps = {
  palette: 'grayscale',
}
