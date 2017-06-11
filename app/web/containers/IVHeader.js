import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVText from '../components/IVText'
import UserActions from '../../actions/UserActions'
import StyleConstants from '../../constants/StyleConstants'

@connect(store => {
  return {
    user: store.user
  }
})
class IVHeader extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div style={{
        backgroundColor: StyleConstants.mainColor,
        textAlign: 'center',
        marginBottom: 30
      }}>
        <IVText
          value="Intervyu"
          fontSize={36}
          inverted
        />
      </div>
    )

  }

}

export default IVHeader
