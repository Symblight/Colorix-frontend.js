import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class MainPage extends Component {
  render() {
    return (
      <div>
        <h2>Main page</h2>
        <Link to="/palettes">Palettes</Link>
      </div>
    )
  }
}
