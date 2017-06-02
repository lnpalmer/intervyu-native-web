import React, { Component } from 'react'

class Root extends Component {

  constructor() {
    super()
    this.state = {
      number: 4
    }
  }

  render() {
    return <h3>{this.state.number}</h3>
  }

}

export default Root
