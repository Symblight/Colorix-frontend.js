import React from 'react'
import styled from 'styled-components'

import { Icon } from 'ui'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
`


export class Loading extends React.Component {
  render() {
    const { pastDelay } = this.props

    if (pastDelay) {
      return (
        <Wrapper>
          <Icon height={80} icon='loading' />
          <h3>Loading...</h3>
        </Wrapper>

      )
    }
    return <div>lol</div>
  }
}
