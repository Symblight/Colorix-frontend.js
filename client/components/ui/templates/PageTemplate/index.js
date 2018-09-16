import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Header = styled.header`
  width: 100%;
`

const Hero = styled.section``

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
`

const Footer = styled.footer`
  margin-top: auto;
`

export const PageTemplate = ({
  header, hero, children, footer, ...props
}) => (
  <Wrapper {...props}>
    <Header>{header}</Header>
    {hero && <Hero>{hero}</Hero>}
    <Content>{children}</Content>
    <Footer>{footer}</Footer>
  </Wrapper>
)

PageTemplate.propTypes = {
  header: PropTypes.node,
  hero: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.any.isRequired,
}
