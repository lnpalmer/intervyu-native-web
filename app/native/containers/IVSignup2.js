import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

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
class IVSignup2 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View>
        <IVText value="What types of work experience do you have?"/>
        <View style={{
          flex: 0,
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 10,
          justifyContent: 'center'
        }}>
          <IVCheckbox text="Labor" checked={true}/>
          <IVCheckbox text="Research" checked={false}/>
          <IVCheckbox text="Programming" checked={false}/>
          <IVCheckbox text="Fieldwork" checked={false}/>
          <IVCheckbox text="Study abroad" checked={true}/>
          <IVCheckbox text="Lab work" checked={false}/>
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
