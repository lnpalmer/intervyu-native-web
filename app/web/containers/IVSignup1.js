import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => { return {
  user: store.user
}})
class IVSignup1 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div style={{
        textAlign: 'center'
      }}>

        <IVGroup>
          <IVText value="S1?"/>
        </IVGroup>

        <IVGroup>
          <IVButton
            value={
              user.identity.type === 'employer' ?
              'Finish' :
              'Next'
            }
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVSignup1
