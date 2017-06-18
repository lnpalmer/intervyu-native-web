import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import RNGooglePlacePicker from 'react-native-google-place-picker'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVNumericInput from '../components/IVNumericInput'
import IVCheckbox from '../components/IVCheckbox'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => {
  return {
    user: store.user,
  }
})
class IVSignup4 extends Component {

  componentDidMount() {

    this.pickLocation()

  }

  render() {

    const { user, dispatch } = this.props

    return (
      <View>

        <IVText value="How many hours can you work per week?"/>
        <IVNumericInput
          value={user.config.hours}
          onValue={value => {dispatch(UserActions.setHours(value))}}
          increment={2} min={4} max={20}
        />

        <IVText value="Acceptable distance to job, in miles:"/>
        <IVNumericInput
          value={user.config.distance}
          onValue={value => {dispatch(UserActions.setDistance(value))}}
          increment={1} min={5} max={50}
        />

        <IVCheckbox
          style={{ justifyContent: 'center' }}
          text="I have means of transportation"
          fontSize={18}
          value={user.config.transportation}
          onValue={value => dispatch(UserActions.setTransportation(value))}
        />

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
          ) : (

            user.status === 'pendingCreation' ?
            (
              <IVButton
                value="Creating user..."
              />
            ) : (
              <IVButton
                value="Finish"
                onPress={() => {
                  dispatch(UserActions.createUser(user))
                  .catch(err => {
                    alert('There was an issue creating your account: ' + err.message)
                  })
                }}
              />
            )

          )
        }

      </View>
    )

  }

  pickLocation() {

    const { user, dispatch } = this.props

    RNGooglePlacePicker.show(response => {

      dispatch(UserActions.setLocation({
        latitude: response.latitude,
        longitude: response.longitude,
        didCancel: response.didCancel || null
      }))

    })

  }

}

export default IVSignup4
