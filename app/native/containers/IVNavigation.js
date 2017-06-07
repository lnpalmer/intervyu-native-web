import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import IVMainMenu from './IVMainMenu'
import IVSignup1 from './IVSignup1'
import IVSignup2 from './IVSignup2'
import IVJobs from './IVJobs'

@connect(store => {
  return {
    view: store.display.view
  }
})
class IVNavigation extends Component {

  render() {

    switch(this.props.view) {
      case 'mainMenu': return <IVMainMenu/>
      case 'signup1': return <IVSignup1/>
      case 'signup2': return <IVSignup2/>
      case 'jobs': return <IVJobs/>
    }

  }

}

export default IVNavigation
