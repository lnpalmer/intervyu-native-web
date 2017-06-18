import React, { Component } from 'react'
import ReactNative, { View, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'

import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => {
  return {
    user: store.user,
  }
})
class IVMainMenu extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View>

        <IVText value="email:"/>
        <IVTextInput
          value={user.identity.email}
          onValue={value => dispatch(UserActions.setEmail(value))}
        />
        <IVText value="password:"/>
        <IVTextInput
          value={user.identity.password}
          onValue={value => dispatch(UserActions.setPassword(value))}
          secureTextEntry
        />
        <IVButton
          value="sign in"
          onPress={() => dispatch(UserActions.logIn(
            user.identity.email,
            user.identity.password
          )).catch(error => {
            alert('There was a problem signing into your account: ' + error.message.toLowerCase())
          })}
        />

        <IVText value="don't have an account?"/>
        <IVButton
          value="sign up"
          onPress={() => dispatch(DisplayActions.setView('signup1'))}
        />

      </View>
    )

  }

}

export default IVMainMenu
