import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
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
class IVSignup1 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View>
        <IVText value="What's your name?"/>
        <IVTextInput
          value={user.identity.name}
          onValue={value => dispatch(UserActions.setName(value))}
        />

        <IVText value="Your email address:"/>
        <IVTextInput
          value={user.identity.email}
          onValue={value => dispatch(UserActions.setEmail(value))}
        />

        <IVText value="Enter a password:"/>
        <IVTextInput
          value={user.identity.password}
          onValue={value => dispatch(UserActions.setPassword(value))}
        secureTextEntry/>

        <IVText value="Repeat your password:"/>
        <IVTextInput
          value={user.identity.passwordRepeat}
          onValue={value => dispatch(UserActions.setPasswordRepeat(value))}
        secureTextEntry/>

        <IVButton
          value="Next"
          onPress={() => dispatch(DisplayActions.setView('signup2'))}
        />
      </View>
    )

  }

}

export default IVSignup1
