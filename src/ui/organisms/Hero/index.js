import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'


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
`

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`

export const Hero = () => (
  <Wrapper>
    <Title>Colorix</Title>
    <Layout>
      <div>Info and button create palettes</div>
      <div>Image</div>
    </Layout>
  </Wrapper>
)
