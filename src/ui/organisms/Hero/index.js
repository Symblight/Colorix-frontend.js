import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

import HeroImg from 'assets/images/hero.jpg'
import { ParagraphBlock, Button } from 'ui'


const Title = styled.h2`
  font-size: 72px;
  line-height: 1.1;
  letter-spacing: -3px;
`

const ParagraphBlockFlex = styled(ParagraphBlock)`
  flex: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${size('maxWidth')};
  height: 600px;
  width: 100%;
  margin: auto;
  text-align:center;
`

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Image = styled.img`
  width: 400px;
  margin-left: 24px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Hero = ({ description, title }) => (
  <Wrapper>
    <Title>Colorix</Title>
    <Layout>
      <Content>
        <ParagraphBlockFlex>Colorix - online palettes by Symblight</ParagraphBlockFlex>
        <Button to="/editor">Create palette</Button>
      </Content>
    </Layout>
  </Wrapper>
)
