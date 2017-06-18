import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import IVMainMenu from './IVMainMenu'
import IVSignup1 from './IVSignup1'
import IVSignup2 from './IVSignup2'
import IVSignup3 from './IVSignup3'
import IVSignup4 from './IVSignup4'
import IVJobs from './IVJobs'

@connect(store => {
  return {
    view: store.display.view
  }
})
class IVNavigation extends Component {

  render() {
    return (

      <View style={{ height: '100%' }}>
        {this.mainComponent()}
      </View>

    )
  }

  mainComponent() {

    switch (this.props.view) {

      case 'mainMenu': return <IVMainMenu/>
      case 'signupType': return <IVSignupType/>
      case 'signup1': return <IVSignup1/>
      case 'signup2': return <IVSignup2/>
      case 'signup3': return <IVSignup3/>
      case 'signup4': return <IVSignup4/>
      case 'jobs': return <IVJobs/>

    }

  }

}

export default IVNavigation
