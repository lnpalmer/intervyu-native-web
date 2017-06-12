import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVCheckbox from '../components/IVCheckbox'
import IVButton from '../components/IVButton'
import JobsActions from '../../actions/JobsActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => { return {
  job: store.jobs.pending
}})
class IVJobSetup1 extends Component {

  render() {

    const { job, dispatch } = this.props

    return (
      <div>

        <IVGroup width={500}>
          <IVText fontSize={21} value="What types of work experience do you have?"/>
        </IVGroup>
        <IVGroup direction="row" width={400}>
          {
            JobConstants.experienceTypes.map(experienceType => {
              return (
                <IVCheckbox
                  key={experienceType}
                  text={experienceType}
                  value={job.experience.includes(experienceType)}
                  onValue={value => {
                    dispatch(value ?
                      JobsActions.addExperience(experienceType) :
                      JobsActions.delExperience(experienceType)
                    )
                  }}
                />
              )
            })
          }
        </IVGroup>

        <IVGroup width={500}>
          <IVText fontSize={21} value="What days can you work?"/>
        </IVGroup>
        <IVGroup direction="row" width={450}>
          {
            JobConstants.days.map(day => {
              return (
                <IVCheckbox
                  key={day}
                  text={day}
                  value={job.days.includes(day)}
                  onValue={value => {
                    dispatch(value ?
                      JobsActions.addDay(day) :
                      JobsActions.delDay(day)
                    )
                  }}
                />
              )
            })
          }
        </IVGroup>

        <IVGroup>
          <IVButton
            value="Next"
            onClick = {() => dispatch(DisplayActions.setView('jobSetup2'))}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVJobSetup1
