import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVFileInput from '../components/IVFileInput'
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
class IVJobSetup3 extends Component {

  render() {

    const { job, dispatch } = this.props

    return (
      <div>

        <IVGroup width={500}>
          <IVText value="give your job a short name for the listing:"/>
          <IVTextInput
            value={job.name}
            onValue={value => dispatch(JobsActions.setName(value))}
          />
        </IVGroup>

        <IVGroup>
          <IVText value="briefly describe the job role:"/>
          <IVTextInput
            value={job.description}
            onValue={value => dispatch(JobsActions.setDescription(value))}
            size={70}
            maxLength={200}
          />
        </IVGroup>

        <IVGroup width={600}>
          <IVText value="upload a thumbnail image for the listing (use 16:10 aspect)"/>
          <IVFileInput
            onValue={value => dispatch(JobsActions.setIcon(value))}
          />
        </IVGroup>

        <IVGroup>
          <IVText value="provide a link to direct applicants to:"/>
          <IVTextInput
            value={job.link}
            onValue={value => dispatch(JobsActions.setLink(value))}
            maxLength={200}
          />
        </IVGroup>

        <IVGroup>
          <IVButton
            value="finish"
            onClick={() => {
              dispatch(JobsActions.uploadJob(job)).catch(err => {
                alert('There was an issue uploading your job: ' + err.message)
              })
            }}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVJobSetup3
