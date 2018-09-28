import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { ParagraphBlock, Button } from 'ui'


const Title = styled.h2`
  font-size: 72px;
  line-height: 1.1;
  letter-spacing: -3px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${size('maxWidth')};
  width: 100%;
  margin: auto;
  text-align:center;
`

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Hero = ({ description, title }) => (
  <Wrapper>
    <Title>Colorix</Title>
    <Layout>
      <div>
        <ParagraphBlock>Colorix - online palettes by Symblight</ParagraphBlock>
        <Button>Create palette</Button>
      </div>
      <div>Image</div>
    </Layout>
  </Wrapper>
)
