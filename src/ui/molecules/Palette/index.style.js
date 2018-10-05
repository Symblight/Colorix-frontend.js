import styled from 'styled-components'
import { palette } from 'styled-theme'

import { HashCopy } from 'ui'


const flexBasis = ({ select, id }) => select !== -1 && select !== id ? '0px' : '140px'
const flexGrow = ({ select, id }) => select !== -1 && select !== id ? '0' : '1'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 234px;
  height: 280px;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  overflow:hidden;
  margin: 8px;
  box-shadow: 0 10px 40px -10px rgba(0,64,128,.2);
  transition: 0.6s;
`

export const PaletteWraps = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 70%;
  overflow: hidden;
  border-radius: 4px;
`

export const ColorWrap = styled.div`
  flex-grow: ${flexGrow};
  flex-shrink: 4;
  flex-basis: ${flexBasis};
  height: 100%;
  background-color: ${((props) => props.color)};
  color: ${palette('grayscale', 1, true)};
  transition: 0.6s;

  &:hover {
    cursor: pointer;
    flex-shrink: 1;
    transition: 0.6s;
    width: 100%;
  }
`

export const ItemsColor = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  padding: 4px;
`

export const HashCopyAbsolute = styled(HashCopy)`
    position: absolute;
    bottom: 4px; 
`

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin-top: auto;

  span {
    color: ${palette('grayscale', 3, true)};
  }
`

export const FooterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`
