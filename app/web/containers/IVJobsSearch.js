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

    this.jobsRef = firebase.database().ref('jobsSmall')

    this.jobsRef.on('child_added', (childSnapshot, prevChildKey) => {
      if (this.distanceFromUser(childSnapshot.val()) < 50) {
        dispatch(JobsActions.downloadEntry(childSnapshot.key))
      }
    })

    this.jobsRef.on('child_removed', (childSnapshot) => {
      if (this.distanceFromUser(childSnapshot.val()) < 50) {
        dispatch(JobsActions.removeEntry(childSnapshot.key))
      }
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

        <div style={{
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
            jobs.entries
            .filter(job => this.distanceFromUser(job) < jobs.searchSettings.distance)
            .filter(job => job.name.toLowerCase().includes(jobs.searchSettings.term.toLowerCase()))
            .sort((jobA, jobB) => this.scoreJobEntry(jobA) < this.scoreJobEntry(jobB))
            .map((job, index) => {
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

  scoreJobEntry(jobObject) {

    const { user } = this.props

    const distanceSubscore = -this.distanceFromUser(jobObject)

    const experienceSubscore =
      (jobObject.experience && user.config.experience) ?
      jobObject.experience.map(experienceType => {
        return user.config.experience.includes(experienceType) ? 1.0 : 0.0
      }).reduce((a, b) => a + b) : 0

    const daysSubscore =
      (jobObject.days && user.config.days) ?
      jobObject.days.map(day => {
        return user.config.days.includes(day) ? 1.0 : 0.0
      }).reduce((a, b) => a + b) : 0

    const industriesSubscore =
      (jobObject.industries && user.config.industries) ?
      jobObject.industries.map(industry => {
        return user.config.industries.includes(industry) ? 1.0 : 0.0
      }).reduce((a, b) => a + b) : 0

    const hoursSubscore =
      jobObject.hours > user.config.hours ?
      user.config.hours - jobObject.hours : 0

    const transportationSubscore =
      jobObject.transportation || user.config.transportation ?
      1 : 0

    const totalScore =
      1.0 * distanceSubscore +
      1.0 * experienceSubscore +
      1.0 * industriesSubscore +
      2.0 * daysSubscore +
      0.5 * hoursSubscore +
      8.0 * transportationSubscore

    return totalScore

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
