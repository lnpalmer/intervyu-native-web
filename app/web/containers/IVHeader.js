import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVText from '../components/IVText'
import UserActions from '../../actions/UserActions'
import StyleConstants from '../../constants/StyleConstants'

@connect(store => {
  return {
    display: store.display
  }
})
class IVHeader extends Component {

  render() {

    const { display, dispatch } = this.props

    return (
      <div style={{
        backgroundColor:
          display.view === 'jobs' ?
          StyleConstants.altColor:
          StyleConstants.mainColor,
        border: 0,
        borderStyle: 'solid',
        borderColor: StyleConstants.mainColor,
        borderBottomWidth: 2,
        textAlign: 'center',
      }}>
        <IVText
          value="Intervyu"
          fontSize={36}
          inverted={display.view !== 'jobs'}
        />
      </div>
    )

  }

}

export default IVHeader
