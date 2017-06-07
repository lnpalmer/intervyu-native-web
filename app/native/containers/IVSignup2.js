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
class IVSignup2 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View>
        <IVText value="What industries are you interested in?"/>

        <IVButton
          value="Next"
          onPress={() => dispatch(DisplayActions.setView('mainMenu'))}
        />
      </View>
    )

  }

}

export default IVSignup2
