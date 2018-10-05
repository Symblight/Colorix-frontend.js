import React, { Component } from 'react'

import { PageTemplate, Header, Palettes } from 'ui'


export class PalettesPage extends Component {
  handleSelectPalette = (id) => {
    console.log(id);
  }

  render() {
    return (
      <PageTemplate
        header={<Header />}
      >
        <Palettes
          onSelect={this.handleSelectPalette}
        />
      </PageTemplate>
    )
  }
}
