import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PageTemplate, Header, Footer, Hero } from 'ui'


export class MainPage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header />}
        hero={<Hero />}
        footer={<Footer />}
      >
        <h2>Main page 2</h2>
        <Link to="/palettes">Palettes</Link>
      </PageTemplate>
    )
  }
}
