import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVCheckbox from '../components/IVCheckbox'

import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => {
  return {
    user: store.user,
  }
})
class IVSignup3 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View>
        <IVText value={
          user.config.hasWorked ?
          "what industries do you have work experience in?" :
          "what types of tasks are you willing to do?"
        }/>
        <View style={{
          flex: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          justifyContent: 'center'
        }}>
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
        </View>

        <IVText value="what days can you work?"/>
        <View style={{
          flex: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          justifyContent: 'center'
        }}>
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
        </View>

        <IVButton
          value="next"
          onPress={() => dispatch(DisplayActions.setView('signup4'))}
        />

      </View>
    )

  }

}

export default IVSignup3
