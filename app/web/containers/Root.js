import React, { Component } from 'react'

class Root extends Component {

  constructor() {
    super()
    this.state = {
      number: 0
    }
  }

  render() {
    return <h3 onClick={() => this.setState({number: this.state.number + 1})}> number: {this.state.number} </h3>
  }

}

export default Root
