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

    this.pickLocation()

  }

  render() {

    const { user, dispatch } = this.props

    return (
      <View>

        {
          user.config.location.didCancel ?
          (
            <View>
              <IVText value="Location not recieved."/>
              <IVButton
                value="Set location"
                onPress={() => this.pickLocation()}
              />
            </View>
          ) :
          null
        }

        <IVText value="How many hours can you work per week?"/>
        <IVTextInput
          numeric
          value={user.config.hours}
        />

      </View>
    )

  }

  pickLocation() {

    const { user, dispatch } = this.props

    RNGooglePlacePicker.show(response => {

      dispatch(UserActions.setLocation({
        latitude: response.latitude,
        longitude: response.longitude,
        didCancel: response.didCancel
      }))

    })

  }

}

export default IVSignup3
