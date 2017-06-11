import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVMainMenu from './IVMainMenu'
import IVSignupType from './IVSignupType'
import IVSignup1 from './IVSignup1'

@connect(store => { return {
    view: store.display.view
}})
class IVNavigation extends Component {

  render() {
    switch (this.props.view) {

      case 'mainMenu': return <IVMainMenu/>
      case 'signupType': return <IVSignupType/>
      case 'signup1': return <IVSignup1/>

    }
  }

}

export default IVNavigation
