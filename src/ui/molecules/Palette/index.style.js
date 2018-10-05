import styled from 'styled-components'
import { palette } from 'styled-theme'


const flexBasis = ({ select, id }) => select !== -1 && select !== id ? '0px' : '140px'
const flexGrow = ({ select, id }) => select !== -1 && select !== id ? '0' : '1'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 234px;
  height: 280px;
  border-radius: 8px;
  background-color: #fff;
  overflow:hidden;
  margin: 8px;
  box-shadow: 0 1px 1px 1px rgba(10,16,34,.08);
`

export const PaletteWraps = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 195px;
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
    flex-grow: 1;
    flex-shrink: 1;
    transition: 0.6s;
    width: 100%;
  }
`

export const ItemsColor = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  color: ${palette('grayscale', 1, true)};
  padding: 4px;
  font-weight: 700;
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
