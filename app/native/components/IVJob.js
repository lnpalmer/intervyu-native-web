import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Linking } from 'react-native'

import IVText from '../components/IVText'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import JobsActions from '../../actions/JobsActions'
import DisplayActions from '../../actions/DisplayActions'
import StyleConstants from '../../constants/StyleConstants'

class IVJob extends Component {

  componentDidMount() {

    const { job, dispatch } = this.props

    setTimeout(() => {

      // get the thumbnail URL
      dispatch(JobsActions.getEntryThumbnail(job.key, job.iconExtension))
      .catch(error => {
        console.log('There was a problem: ' + error.message.toLowerCase())
      })

    }, 400)

    // get the job's employer's name
    dispatch(JobsActions.getEntryEmployer(job.key, job.owner))
    .catch(error => {
      console.log('There was a problem: ' + error.message.toLowerCase())
    })

  }

  render() {

    const { job, dispatch, distance } = this.props

    return (
      <TouchableOpacity
        style={{
          backgroundColor:
            job.expanded ?
            StyleConstants.mainColor :
            StyleConstants.altColor,
          height:
            job.expanded ?
            'auto' :
            55,
          marginBottom: 0,
          marginTop: 5,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 3,
          overflow: 'hidden'
        }}
        onPress={() => dispatch(JobsActions.setEntryExpanded(job.key, !job.expanded))}
      >


        <View style={{ height: job.expanded ? 0 : 15 }}/>

        <View style={{ display: 'flex', flexDirection: 'row', height: 25 }}>
          <IVText inverted={job.expanded} fontSize={15} value={job.name} style={{ flex: 2, fontWeight: '700', margin: 0 }}/>
          <IVText inverted={job.expanded} fontSize={15} value={job.ownerName} style={{ flex: 2, fontWeight: '700', margin: 0 }}/>
          <IVText inverted={job.expanded} fontSize={15} value={Math.ceil(distance) + 'mi'} style={{ flex: .6, fontWeight: '500', marginRight: 10 }}/>
        </View>

        {
          job.expanded ?
          (
            <View>

              <IVText inverted={job.expanded} fontSize={16} value={job.description} style={{ marginBottom: 6 }}/>

              <View style={{display: 'flex', flexDirection: 'row' }}>

                <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                  <Image
                    style={{ width: 144, height: 90, margin: 4, }}
                    source={{ uri: job.iconUrl }}
                  />
                </View>

                <View style={{display: 'flex', flex: 1, flexDirection: 'column' }}>
                  <IVText inverted={job.expanded} fontSize={14} value={job.address} style={{ height: 61 }}/>
                  <IVButton
                    inverted={job.expanded}
                    fontSize={10}
                    value="apply"
                    small
                    onPress={() => Linking.openURL(job.link)}
                  />
                </View>

              </View>

            </View>
          ) : <View/>
        }

      </TouchableOpacity>
    )

  }

  /*<Image
    style={{ width: 160, height: 100 }}
    source={{ uri: job.iconUrl }}
  />*/

}

export default IVJob
