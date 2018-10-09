import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { PageTemplate, Header, Footer, Hero, Creater, Palettes } from 'ui'


export class MainPage extends Component {
  render() {
    return (
      <PageTemplate
        header={<Header />}
        hero={<Hero />}
        footer={<Footer />}
      >
        <Creater />
      </PageTemplate>
    )
  }
}
