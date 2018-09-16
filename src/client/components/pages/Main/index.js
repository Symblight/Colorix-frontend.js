import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PageTemplate, Header, Footer } from 'components/ui'


export class MainPage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header />}
        footer={<Footer />}
      >
        <h2>Main page</h2>
        <Link to="/palettes">Palettes</Link>
      </PageTemplate>
    )
  }
}
