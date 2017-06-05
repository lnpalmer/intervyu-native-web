import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'

import UserActions from '../../actions/UserActions'

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
        <IVText value="Signup process"/>
      </View>
    )

  }

}

export default IVSignup1
