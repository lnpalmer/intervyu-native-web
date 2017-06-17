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
class IVSignupType extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div style={{
        textAlign: 'center'
      }}>

        <IVGroup>
          <IVText value="are you a student or an employer?"/>
        </IVGroup>

        <IVGroup direction="row">
          <IVButton
            value="student"
            onClick={() => this.chooseType('student')}
          />
          <IVButton
            value="employer"
            onClick={() => this.chooseType('employer')}
          />
        </IVGroup>

      </div>
    )

  }

  chooseType(accountType) {

    const { user, dispatch } = this.props

    dispatch(UserActions.setType(accountType))
    dispatch(DisplayActions.setView('signup1'))

  }

}

export default IVSignupType
