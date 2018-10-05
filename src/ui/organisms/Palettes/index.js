import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'

import { Palette, MenuPalettes } from 'ui'


const Wrapper = styled.main`
  background-color: #fff;
`
const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${size('maxWidth')};
  direction: rtl;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: 0.6s;
  margin-right: 240px;
  direction: ltr;
`

export const Palettes = ({ onSelect, data }) => (
  <Wrapper>
    <Layout>
      <Content>
        {
          data.map((colour) => (
            <Palette
              data={colour}
              key={colour.id}
              onSelect={onSelect}
            />
          ))
        }
      </Content>
      <MenuPalettes />
    </Layout>
  </Wrapper>
)
