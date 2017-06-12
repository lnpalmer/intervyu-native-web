import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVCheckbox from '../components/IVCheckbox'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => { return {
  user: store.user
}})
class IVSignup2 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>

        <IVGroup width={500}>
          <IVText fontSize={21} value="What types of work experience do you have?"/>
        </IVGroup>
        <IVGroup direction="row" width={400}>
          {
            JobConstants.experienceTypes.map(experienceType => {
              return (
                <IVCheckbox
                  key={experienceType}
                  text={experienceType}
                  value={user.config.experience.includes(experienceType)}
                  onValue={value => {
                    dispatch(value ?
                      UserActions.addExperience(experienceType) :
                      UserActions.delExperience(experienceType)
                    )
                  }}
                />
              )
            })
          }
        </IVGroup>

        <IVGroup width={500}>
          <IVText fontSize={21} value="What days can you work?"/>
        </IVGroup>
        <IVGroup direction="row" width={450}>
          {
            JobConstants.days.map(day => {
              return (
                <IVCheckbox
                  key={day}
                  text={day}
                  value={user.config.days.includes(day)}
                  onValue={value => {
                    dispatch(value ?
                      UserActions.addDay(day) :
                      UserActions.delDay(day)
                    )
                  }}
                />
              )
            })
          }
        </IVGroup>

        <IVGroup>
          <IVButton
            value="Next"
            onClick = {() => dispatch(DisplayActions.setView('signup3'))}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVSignup2
