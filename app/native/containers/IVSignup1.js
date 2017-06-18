import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVCheckbox from '../components/IVCheckbox'

import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

import JobConstants from '../../constants/JobConstants'

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
        <IVText value="what's your name?"/>
        <IVTextInput
          value={user.identity.name}
          onValue={value => dispatch(UserActions.setName(value))}
        />

        <IVText value="your email address:"/>
        <IVTextInput
          value={user.identity.email}
          onValue={value => dispatch(UserActions.setEmail(value))}
        />

        <IVText value="enter a password:"/>
        <IVTextInput
          value={user.identity.password}
          onValue={value => dispatch(UserActions.setPassword(value))}
        secureTextEntry/>

        <IVText value="repeat your password:"/>
        <IVTextInput
          value={user.identity.passwordRepeat}
          onValue={value => dispatch(UserActions.setPasswordRepeat(value))}
        secureTextEntry/>

        <IVButton
          value="Next"
          onPress={() => this.validateInput()}
        />
      </View>
    )

  }

  validateInput() {

    const { user, dispatch } = this.props

    if (user.identity.name === '') {
      alert('Please enter a name.')
      return
    } else if (user.identity.email === '') {
      alert('Please enter an email address.')
      return
    } else if (user.identity.password.length < 6) {
      alert('Please enter a password at least 6 characters long.')
      return
    } else if (user.identity.passwordRepeat !== user.identity.password) {
      alert('Please confirm your password')
      return
    } else {
      dispatch(DisplayActions.setView('signup2'))
    }

  }

}

export default IVSignup1
