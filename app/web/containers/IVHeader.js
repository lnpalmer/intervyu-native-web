import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVText from '../components/IVText'
import UserActions from '../../actions/UserActions'

@connect(store => {
  return {
    user: store.user
  }
})
class IVHeader extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>
        <IVText value="Intervyu"/>
        <h3 onClick={() => dispatch(UserActions.setName('hello'))}>{user.identity.name + " !."}</h3>
      </div>
    )

  }

}

export default IVHeader
