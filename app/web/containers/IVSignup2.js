import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVCheckbox from '../components/IVCheckbox'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'
import JobConstants from '../../constants/JobConstants'

@connect(store => { return {
  user: store.user
}})
class IVSignup2 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>

        <IVGroup>
          <IVText
            value="do you have any previous work experience?"
          />
        </IVGroup>

        <IVGroup width={200} direction="row">
          <IVCheckbox
            text="Yes"
            value={user.config.hasWorked}
            onValue={value => dispatch(UserActions.setHasWorked(value))}
          />
          <IVCheckbox
            text="No"
            value={!user.config.hasWorked}
            onValue={value => dispatch(UserActions.setHasWorked(!value))}
          />
        </IVGroup>

        <IVGroup>
          <IVButton
            value="next"
            onClick = {() => dispatch(DisplayActions.setView('signup3'))}
          />
        </IVGroup>

      </div>
    )

  }

}

export default IVSignup2
