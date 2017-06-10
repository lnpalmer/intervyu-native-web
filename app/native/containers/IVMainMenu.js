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

        <IVText value="Email:"/>
        <IVTextInput
          value={user.identity.email}
          onValue={value => dispatch(UserActions.setEmail(value))}
        />
        <IVText value="Password:"/>
        <IVTextInput
          value={user.identity.password}
          onValue={value => dispatch(UserActions.setPassword(value))}
          secureTextEntry
        />
        <IVButton
          value="Sign in"
          onPress={() => dispatch(DisplayActions.setView('jobs'))}
        />

        <IVText value="Don't have an account?"/>
        <IVButton
          value="Sign up"
          onPress={() => dispatch(DisplayActions.setView('signup1'))}
        />

      </View>
    )

  }

}

export default IVMainMenu
