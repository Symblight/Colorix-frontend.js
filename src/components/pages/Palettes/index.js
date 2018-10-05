import React, { Component } from 'react'

import { PageTemplate, Header, Palettes } from 'ui'
import { withPalettes } from '../../props-proxy/with-palettes'


@withPalettes
class PalettesPage extends Component {
  handleSelectPalette = (id) => {
    console.log(id)
  }

  render() {
    const { data } = this.props

    return (
      <PageTemplate
        header={<Header />}
      >
        <Palettes
          onSelect={this.handleSelectPalette}
          data={data}
        />
      </PageTemplate>
    )
  }
}

export { PalettesPage }
