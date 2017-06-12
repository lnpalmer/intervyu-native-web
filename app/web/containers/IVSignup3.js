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
class IVSignup3 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>

        <IVGroup width={600}>
          <IVText value="Pick your location:"/>
          <IVLocationPicker
            value={user.config.location}
            onValue={value => dispatch(UserActions.setLocation(value))}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVText value="How many hours can you work per week?"/>
          <IVNumericInput
            value={user.config.hours}
            onValue={value => dispatch(UserActions.setHours(value))}
            min={4} max={20} increment={2}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVText value="Acceptable distance to job, in miles:"/>
          <IVNumericInput
            value={user.config.distance}
            onValue={value => dispatch(UserActions.setDistance(value))}
            min={5} max={50} increment={1}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVCheckbox
            text="I have means of transportation"
            value={user.config.transportation}
            onValue={value => dispatch(UserActions.setTransportation(value))}
          />
        </IVGroup>

        <IVGroup>
          <IVButton
            value="Finish"
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

export default IVSignup3
