import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'

import { Palette, MenuPalettes } from 'ui'


const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${size('maxWidth')};
  padding-left: 2rem;
  padding-right: 2rem;
  direction: rtl;
  background-color: ${palette('grayscale', 0, true)};
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: 0.6s;
  direction: ltr;
  margin-right: 240px;
`

export const Palettes = ({ onSelect, data }) => (
  <Wrapper>
    <Content>
      {
          data.map((colour, index) => (
            <Palette
              data={colour}
              key={colour.id}
              onSelect={onSelect}
              id={index}
            />
          ))
      }
    </Content>
    <MenuPalettes />
  </Wrapper>
)
