import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, ScrollView, TouchableOpacity } from 'react-native'

import * as firebase from 'firebase'

import IVText from '../components/IVText'
import IVButton from '../components/IVButton'
import IVTextInput from '../components/IVTextInput'
import IVJob from '../components/IVJob'
import IVNumericInput from '../components/IVNumericInput'
import JobConstants from '../../constants/JobConstants'
import StyleConstants from '../../constants/StyleConstants'
import UserActions from '../../actions/UserActions'
import JobsActions from '../../actions/JobsActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => { return {
  jobs: store.jobs,
  user: store.user,
  display: store.display
}})
class IVJobsSearch extends Component {

  componentDidMount() {

    const { user, dispatch } = this.props

    this.jobsRef = firebase.database().ref('jobsSmall')

    this.jobsRef.on('child_added', (childSnapshot, prevChildKey) => {
      if (JobConstants.distanceFromUser(user, childSnapshot.val()) < 50) {
        dispatch(JobsActions.downloadEntry(childSnapshot.key))
      }
    })

    this.jobsRef.on('child_removed', (childSnapshot) => {
      if (JobConstants.distanceFromUser(user, childSnapshot.val()) < 50) {
        dispatch(JobsActions.removeEntry(childSnapshot.key))
      }
    })

  }

  componentWillUnmount() {

    const { dispatch } = this.props

    this.jobsRef.off()

  }

  render() {

    const { jobs, user, display, dispatch } = this.props

    return (
      <View style={{
        height: 'auto',
        flex: 1,
      }}>

        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 8,
        }}>

          <TouchableOpacity onPress={() => dispatch(JobsActions.setMode('jobs'))}>
            <IVText value="jobs" fontSize={20} style={{
              fontWeight: jobs.mode === 'jobs' ? '700' : '400'
            }}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(JobsActions.setMode('options'))}>
            <IVText value="options" fontSize={20} style={{
              fontWeight: jobs.mode === 'options' ? '700' : '400'
            }}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(JobsActions.setMode('account'))}>
            <IVText value="account" fontSize={20} style={{
              fontWeight: jobs.mode === 'account' ? '700' : '400'
            }}/>
          </TouchableOpacity>

        </View>

        {
          jobs.mode === 'jobs' ?
          (

            <ScrollView
              style={{
                width: '100%',
                backgroundColor: '#0a4',
              }}
            >

              {
                jobs.entries
                .filter(job => JobConstants.distanceFromUser(user, job) < jobs.searchSettings.distance)
                .filter(job => job.name.toLowerCase().includes(jobs.searchSettings.term.toLowerCase()))
                .sort((jobA, jobB) => JobConstants.scoreJobEntry(user, jobA) < JobConstants.scoreJobEntry(user, jobB))
                .map((job, index) => {
                  return (
                    <IVJob
                      key={index}
                      job={job}
                      user={user}
                      expanded={true}
                      dispatch={dispatch}
                      distance={JobConstants.distanceFromUser(user, job)}
                    />
                  )
                })
              }

              <View style={{ height: 200 }}/>

            </ScrollView>

          ) : null
        }

        {
          jobs.mode === 'options' ?
          (

            <View>

              <IVText fontSize={24} value="search options" />

              <IVText
                value="maximum distance, in miles:"
                style={{
                  marginTop: 10
                }}
              />

              <IVNumericInput
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

            </View>

          ) : null
        }

        {
          jobs.mode === 'account' ?
          (

            <View>

              <IVText fontSize={24} value="account actions" />

              <IVButton
                value="sign out"
                onPress={() => dispatch(UserActions.logOut())}
              />

              <IVButton
                value="delete account"
                onPress={() => dispatch(DisplayActions.setDeletingAccount(true))}
              />

              {
                display.deletingAccount ?
                (
                  <View>

                    <IVText value="type in your password to confirm:"/>
                    <IVTextInput
                      value={user.identity.password}
                      onValue={value => dispatch(UserActions.setPassword(value))}
                      secureTextEntry
                    />

                    <IVButton
                      value="cancel"
                      onPress={() => dispatch(DisplayActions.setDeletingAccount(false))}
                    />
                    <IVButton
                      value="confirm"
                      onPress={() => dispatch(UserActions.delete(user)).catch(err => {
                        alert('There was an issue deleting your account: ' + err.message)
                      })}
                    />

                  </View>
                ) : null
              }

            </View>

          ) : null
        }


      </View>
    )

  }

}

export default IVJobsSearch
