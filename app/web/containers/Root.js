import React, { Component } from 'react'
import { connect } from 'react-redux'

import Actions from '../../actions/Actions'

@connect(store => {
  return {
    number: store.number
  }
})
class Root extends Component {

  render() {
    return <h3 onClick={() => {
      this.props.dispatch(Actions.increase(1))
    }}> number: {this.props.number}</h3>
  }

}

export default Root
