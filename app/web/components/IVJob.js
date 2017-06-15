import React, { Component } from 'react'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import JobsActions from '../../actions/JobsActions'
import DisplayActions from '../../actions/DisplayActions'
import StyleConstants from '../../constants/StyleConstants'

class IVJob extends Component {

  componentDidMount() {

    const { job, dispatch } = this.props

    // get the thumbnail URL
    dispatch(JobsActions.getEntryThumbnail(job.key, job.iconExtension))

    // get the job's employer's name
    dispatch(JobsActions.getEntryEmployer(job.key, job.owner))

  }

  render() {

    const { job, user, dispatch, distance } = this.props

    const expanded = job.expanded || user.identity.type === 'employer'

    console.log(job)

    return (
      <div
        style={{
          backgroundColor:
            expanded ?
            StyleConstants.mainColor :
            StyleConstants.altColor,
          height:
            expanded ?
            220 :
            70,
          margin: 5,
          borderRadius: 3,
          overflow: 'hidden',
          transition: StyleConstants.transition,
          userSelect: 'none'
        }}
        onClick={() => dispatch(JobsActions.setEntryExpanded(job.key, !expanded))}
      >
        <div style={{
          height: expanded ? 4 : 20,
          transition: StyleConstants.transition
        }}/>

        <div style={{
          textAlign: 'center',
          display: 'flex',
        }}>

          <div style={{flex: 2}}>
            <IVText value={job.name} inverted={expanded}/>
          </div>

          {
            user.identity.type === 'employer' ? '' :
            (
              <div style={{flex: 1.5}}>
                <IVText value={job.ownerName} inverted={expanded}/>
              </div>
            )
          }

          {
            user.identity.type === 'employer' ? '' :
            (
              <div style={{flex: .7}}>
                <i><IVText value={Math.ceil(distance).toString() + 'mi'} inverted={expanded}/></i>
              </div>
            )
          }

        </div>

        <div style={{
          height: 4,
          transition: StyleConstants.transition
        }}/>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '45%'
          }}>

            <IVText
              style={{
                height: 54,
                overflow: 'hidden'
              }}
              value={job.address}
              fontSize={14}
              inverted
            />

            <img src={job.iconUrl} style={{
              width: 192,
              height: 120,
              margin: 2,
              opacity: expanded ? 1 : 0,
              transition: StyleConstants.transition
            }}/>

          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '48%'
          }}>

            <IVText
              style={{
                height: 125,
                overflow: 'hidden'
              }}
              value={job.description}
              fontSize={16}
              inverted
            />

            <IVButton
              value={
                user.identity.type === 'employer' ?
                'Delete' :
                'Apply'
              }
              inverted
              onClick={
                user.identity.type === 'employer' ?
                (() => dispatch(JobsActions.deleteJob(job))) :
                (() => location.href = job.link)
              }
            />

          </div>
        </div>

      </div>
    )

  }

}

export default IVJob
