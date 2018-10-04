import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'


export const ParagraphBlock = styled.p`
    font-size: 30px;
    font-weight: 400;
    color: ${palette({ grayscale: 0 }, 1)};
`

ParagraphBlock.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

ParagraphBlock.defaultProps = {
  palette: 'grayscale',
}
