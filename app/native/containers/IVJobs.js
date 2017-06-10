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
class IVJobs extends Component {

  render() {

    const { user, dispatch } = this.props

    if (user.status === 'new') {
      dispatch(UserActions.uploadUser(user))
    }

    return (
      <View>
        <IVText value={"User status: " + user.status}/>
        <IVButton
          value="Sign out"
          onPress={() => dispatch(DisplayActions.setView('mainMenu'))}
        />
      </View>
    )

  }

}

export default IVJobs
