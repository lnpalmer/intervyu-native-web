import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as firebase from 'firebase'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVJob from '../components/IVJob'
import IVTextInput from '../components/IVTextInput'
import IVNumericInput from '../components/IVNumericInput'
import IVCheckbox from '../components/IVCheckbox'
import IVLocationPicker from '../components/IVLocationPicker'
import IVButton from '../components/IVButton'
import JobsActions from '../../actions/JobsActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => { return {
  jobs: store.jobs.entries
}})
class IVJobsManager extends Component {

  componentDidMount() {

    const { dispatch } = this.props

    this.jobsRef = firebase.database().ref('jobs')
      .orderByChild('owner')
      .equalTo(firebase.auth().currentUser.uid)

    this.jobsRef.on('child_added', (childSnapshot, prefChildKey) => {
      dispatch(JobsActions.receiveEntry({
        ...childSnapshot.val(),
        key: childSnapshot.key
      }))
    })

    this.jobsRef.on('child_removed', (childSnapshot) => {
      dispatch(JobsActions.removeEntry(childSnapshot.key))
    })

  }

  componentWillUnmount() {

    const { dispatch } = this.props

    this.jobsRef.off()

  }

  render() {

    return (
      <div>
        {
          this.props.jobs.map((job, index) => {
            return <IVJob key={index} job={job}/>
          })
        }
      </div>
    )

  }

}

export default IVJobsManager
