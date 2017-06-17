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
class IVSignup3 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>

        <IVGroup width={500}>
          <IVText
            fontSize={21}
            value={
              user.config.hasWorked ?
              "what industries do you have work experience in?" :
              "what types of tasks are you willing to do?"
            }
          />
        </IVGroup>
        <IVGroup direction="row" width={400}>
          {
            (
              user.config.hasWorked ?
              JobConstants.industries :
              JobConstants.tasks
            )
            .map(experienceType => {
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
          <IVText fontSize={21} value="what days can you work?"/>
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
            value="next"
            onClick = {() => dispatch(DisplayActions.setView('signup4'))}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVSignup3
