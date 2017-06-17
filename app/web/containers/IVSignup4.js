import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVNumericInput from '../components/IVNumericInput'
import IVCheckbox from '../components/IVCheckbox'
import IVLocationPicker from '../components/IVLocationPicker'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => { return {
  user: store.user
}})
class IVSignup4 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>

        <IVGroup width={600}>
          <IVText value="pick your location:"/>
          <IVLocationPicker
            value={user.config.location}
            onValue={value => dispatch(UserActions.setLocation(value))}
            onAddress={address => 0}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVText value="how many hours can you work per week?"/>
          <IVNumericInput
            value={user.config.hours}
            onValue={value => dispatch(UserActions.setHours(value))}
            min={4} max={20} increment={2}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVText value="acceptable distance to job, in miles:"/>
          <IVNumericInput
            value={user.config.distance}
            onValue={value => dispatch(UserActions.setDistance(value))}
            min={5} max={50} increment={1}
          />
        </IVGroup>

        <IVGroup>
          <IVText
            value="do you have your own transportation?"
          />
        </IVGroup>

        <IVGroup width={200} direction="row">
          <IVCheckbox
            text="Yes"
            value={user.config.transportation}
            onValue={value => dispatch(UserActions.setTransportation(value))}
          />
          <IVCheckbox
            text="No"
            value={!user.config.transportation}
            onValue={value => dispatch(UserActions.setTransportation(!value))}
          />
        </IVGroup>

        <IVGroup>
          <IVButton
            value="finish"
            onClick={() => {
              dispatch(UserActions.createUser(user)).catch(err => {
                alert('There was an issue creating your account: ' + err.message)
              })
            }}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVSignup4
