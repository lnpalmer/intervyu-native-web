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
class IVMainMenu extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div style={{
        textAlign: 'center'
      }}>

        <IVGroup>
          <IVText value="email:" fontSize={22}/>
          <IVTextInput
            value={user.identity.email}
            onValue={value => dispatch(UserActions.setEmail(value))}
            maxLength={50}
          />
        </IVGroup>

        <IVGroup>
          <IVText value="password:" fontSize={22}/>
          <IVTextInput
            value={user.identity.password}
            onValue={value => dispatch(UserActions.setPassword(value))}
            secureTextEntry
          />
        </IVGroup>

        <IVGroup direction="row">
          <IVButton
            value="sign in"
            onClick={() => dispatch(UserActions.logIn(
              user.identity.email,
              user.identity.password
            ))}
          />
          <IVButton
            value="sign up"
            onClick={() => dispatch(DisplayActions.setView('signupType'))}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVMainMenu
