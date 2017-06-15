import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVButton from '../components/IVButton'
import IVJobsSearch from './IVJobsSearch'
import IVJobsManager from './IVJobsManager'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => { return {
  user: store.user
}})
class IVJobs extends Component {

  render() {

    const { dispatch, user } = this.props

    return (
      <div>

        {
          user.identity.type === 'employer' ?
          <IVJobsManager/> :
          <IVJobsSearch/>
        }

        {
          user.identity.type === 'employer' ?
          <IVGroup>
            <IVButton
              value="New job listing"
              onClick={() => dispatch(DisplayActions.setView('jobSetup1'))}
            />
          </IVGroup> : ''
        }
        
      </div>
    )

  }

}

export default IVJobs
