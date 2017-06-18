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
class IVSignup2 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View>

        <IVText fontSize={18} value="what industries are you interested in?"/>

        <View style={{
          flex: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          justifyContent: 'center'
        }}>
          {
            JobConstants.industries.map(experienceType => {
              return (
                <IVCheckbox
                  key={experienceType}
                  text={experienceType}
                  value={user.config.industries.includes(experienceType)}
                  onValue={value => {
                    dispatch(value ?
                      UserActions.addIndustry(experienceType) :
                      UserActions.delIndustry(experienceType)
                    )
                  }}
                />
              )
            })
          }
        </View>

        <IVText fontSize={18} value="do you have any previous work experience?"/>

        <View style={{
          flex: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          justifyContent: 'center'
        }}>
          <IVCheckbox
            text="Yes"
            value={user.config.hasWorked}
            onValue={value => dispatch(UserActions.setHasWorked(value))}
          />
          <IVCheckbox
            text="No"
            value={!user.config.hasWorked}
            onValue={value => dispatch(UserActions.setHasWorked(!value))}
          />
        </View>

        <IVButton
          value="Next"
          onPress={() => dispatch(DisplayActions.setView('signup3'))}
        />
      </View>
    )

  }

}

export default IVSignup2
