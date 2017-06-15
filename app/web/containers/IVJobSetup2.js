import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVNumericInput from '../components/IVNumericInput'
import IVCheckbox from '../components/IVCheckbox'
import IVLocationPicker from '../components/IVLocationPicker'
import IVButton from '../components/IVButton'
import JobsActions from '../../actions/JobsActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => { return {
  job: store.jobs.pending
}})
class IVJobSetup2 extends Component {

  render() {

    const { job, dispatch } = this.props

    return (
      <div>

        <IVGroup width={600}>
          <IVText value="Location of the job:"/>
          <IVLocationPicker
            value={job.location}
            onValue={value => dispatch(JobsActions.setLocation(value))}
            onAddress={value => dispatch(JobsActions.setAddress(value))}
          />
        </IVGroup>

        <IVGroup width={600}>
          <IVText value="Address for the listing:"/>
          <IVTextInput
            value={job.address}
            onValue={value => dispatch(JobsActions.setAddress(value))}
            size={30}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVText value="How many hours do you need students to work per week?"/>
          <IVNumericInput
            value={job.hours}
            onValue={value => dispatch(JobsActions.setHours(value))}
            min={4} max={20} increment={2}
          />
        </IVGroup>

        <IVGroup width={500}>
          <IVCheckbox
            text="Are you capable of providing transportation?"
            value={job.transportation}
            onValue={value => dispatch(JobsActions.setTransportation(value))}
          />
        </IVGroup>

        <IVGroup>
          <IVButton
            value="Next"
            onClick={() => dispatch(DisplayActions.setView('jobSetup3'))}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVJobSetup2
