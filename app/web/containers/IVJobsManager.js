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
import StyleConstants from '../../constants/StyleConstants'

@connect(store => { return {
  jobs: store.jobs.entries,
  user: store.user
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

    const { user, dispatch } = this.props

    return (
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        width: 520,
        backgroundColor: StyleConstants.altColor
      }}>
        {
          this.props.jobs.map((job, index) => {
            return <IVJob key={index} job={job} user={user} dispatch={dispatch} expanded={true}/>
          })
        }
      </div>
    )

  }

}

export default IVJobsManager
