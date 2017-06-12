import React, { Component } from 'react'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

class IVJob extends Component {

  render() {

    const { job } = this.props

    console.log(job)

    return (
      <p>{job.location.latitude}</p>
    )

  }

}

export default IVJob
