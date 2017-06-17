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
  jobs: store.jobs,
  user: store.user
}})
class IVJobsSearch extends Component {

  componentDidMount() {

    const { dispatch } = this.props

    this.jobsRef = firebase.database().ref('jobs')

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

    const { user, jobs, dispatch } = this.props

    return (
      <div style={{
        display: 'flex'
      }}>

        <div  style={{
          textAlign: 'right',
          marginRight: 0,
          marginLeft: 'auto',
          flex: 1,
          padding: 15,
        }}>

          <IVText fontSize={22} value="search settings" />

          <IVNumericInput
            preText="maximum distance:"
            postText="mi"
            value={jobs.searchSettings.distance}
            onValue={value => dispatch(JobsActions.setSearchDistance(value))}
            increment={1} min={5} max={50}
          />

          <IVText
            value="search term"
          />

          <IVTextInput
            style={{marginRight: 0}}
            value={jobs.searchSettings.term}
            onValue={value => dispatch(JobsActions.setSearchTerm(value))}
            size={10}
          />

        </div>

        <div style={{
          width: 500,
          backgroundColor: '0a4',
          margin: 0,
          marginLeft: 'auto',
          height: '100%',
          overflow: 'scroll',
          padding: 0,
          marginRight: 0,
          marginBottom: 0
        }}>
          <div style={{
            backgroundColor: StyleConstants.mainColor,
            textAlign: 'center'
          }}>
            <IVText value="Jobs" fontSize={28} inverted/>
          </div>
          {
            jobs.entries.map((job, index) => {
              return (
                <IVJob
                  key={index}
                  job={job}
                  user={user}
                  expanded={true}
                  dispatch={dispatch}
                  distance={this.distanceFromUser(job)}
                />
              )
            })
          }
        </div>

      </div>
    )

  }

  distanceFromUser(jobObject) {

    const { user } = this.props

    const latLng1 = jobObject.location
    const lat1 = latLng1.latitude
    const lng1 = latLng1.longitude

    const latLng2 = user.config.location
    const lat2 = latLng2.latitude
    const lng2 = latLng2.longitude

    const lat1Rads = Math.PI * lat1 / 180
    const lng1Rads = Math.PI * lng1 / 180
    const lat2Rads = Math.PI * lat2 / 180
    const lng2Rads = Math.PI * lng2 / 180

    const theta = lng2Rads - lng1Rads
    const dist = Math.acos(
      Math.sin(lat1Rads) * Math.sin(lat2Rads) +
      Math.cos(lat1Rads) * Math.cos(lat2Rads) * Math.cos(theta)
    ) * 60 * 1.1515 * 180 / Math.PI

    return dist
  }

}

export default IVJobsSearch
