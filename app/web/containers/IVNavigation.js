import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVMainMenu from './IVMainMenu'
import IVSignupType from './IVSignupType'
import IVSignup1 from './IVSignup1'
import IVSignup2 from './IVSignup2'
import IVSignup3 from './IVSignup3'
import IVJobSetup1 from './IVJobSetup1'
import IVJobSetup2 from './IVJobSetup2'
import IVJobSetup3 from './IVJobSetup3'
import IVJobs from './IVJobs'
import IVSettings from './IVSettings'

@connect(store => { return {
    view: store.display.view
}})
class IVNavigation extends Component {

  render() {

    return (
      <div>
        {this.mainComponent()}
        {
          this.props.view === 'jobs' ?
          <IVSettings/> : ''
        }
      </div>
    )

  }

  mainComponent() {

    switch (this.props.view) {

      case 'mainMenu': return <IVMainMenu/>
      case 'signupType': return <IVSignupType/>
      case 'signup1': return <IVSignup1/>
      case 'signup2': return <IVSignup2/>
      case 'signup3': return <IVSignup3/>
      case 'jobSetup1': return <IVJobSetup1/>
      case 'jobSetup2': return <IVJobSetup2/>
      case 'jobSetup3': return <IVJobSetup3/>
      case 'jobs': return <IVJobs/>

    }

  }

}

export default IVNavigation
