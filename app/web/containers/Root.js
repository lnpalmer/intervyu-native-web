import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserActions from '../../actions/UserActions'

@connect(store => {
  return {
    user: store.user.identity
  }
})
class Root extends Component {

  render() {

    return (
      <h3 onClick={() => this.props.dispatch(UserActions.setName('a name'))}>
        user: {this.props.user.name}
      </h3>
    )

  }

}

export default Root
