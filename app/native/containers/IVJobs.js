import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import IVButton from '../components/IVButton'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'

import IVJobsSearch from './IVJobsSearch'

import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => {
  return {
    user: store.user,
  }
})
class IVJobs extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <View style={{
        height: 'auto',
        flex: 1
      }}>
        <IVJobsSearch/>
      </View>
    )

  }

}

export default IVJobs
