import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import RNGooglePlacePicker from 'react-native-google-place-picker'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVCheckbox from '../components/IVCheckbox'

import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => {
  return {
    user: store.user,
  }
})
class IVSignup3 extends Component {

  componentDidMount() {

    RNGooglePlacePicker.show(response => {

      console.log(response)

    })

  }

  render() {

    const { user, dispatch } = this.props

    return (
      <View>
        <IVText value="Pick a location from the popup."/>
      </View>
    )

  }

}

export default IVSignup3
