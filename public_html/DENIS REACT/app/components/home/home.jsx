import Header from '../header/header.jsx'
import React from 'react'
import './home.styl'

export default class Home extends React.Component {
  render () {
    return (
      <div id='home'>
        <Header />
        Body
      </div>
    )
  }
}
