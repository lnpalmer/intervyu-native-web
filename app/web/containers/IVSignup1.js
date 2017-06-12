import React, { Component } from 'react'
import { connect } from 'react-redux'

import IVGroup from '../components/IVGroup'
import IVText from '../components/IVText'
import IVTextInput from '../components/IVTextInput'
import IVButton from '../components/IVButton'
import UserActions from '../../actions/UserActions'
import DisplayActions from '../../actions/DisplayActions'

@connect(store => { return {
  user: store.user
}})
class IVSignup1 extends Component {

  render() {

    const { user, dispatch } = this.props

    return (
      <div>

        <IVGroup>
          <IVText value="What's your name?"/>
          <IVTextInput
            value={user.identity.name}
            onValue={value => dispatch(UserActions.setName(value))}
          />
        </IVGroup>

        <IVGroup>
          <IVText value="Your email address:"/>
          <IVTextInput
            value={user.identity.email}
            onValue={value => dispatch(UserActions.setEmail(value))}
          />
        </IVGroup>

        <IVGroup>
          <IVText value="Enter a password:"/>
          <IVTextInput
            value={user.identity.password}
            onValue={value => dispatch(UserActions.setPassword(value))}
            secureTextEntry
          />
        </IVGroup>

        <IVGroup>
          <IVText value="Repeat your password:"/>
          <IVTextInput
            value={user.identity.passwordRepeat}
            onValue={value => dispatch(UserActions.setPasswordRepeat(value))}
            secureTextEntry
          />
        </IVGroup>

        <IVGroup>
          <IVButton
            value={
              user.identity.type === 'employer' ?
              'Finish' :
              'Next'
            }
            onClick = {() => this.validateInput()}
          />
        </IVGroup>

      </div>
    )

  }

  validateInput() {

    const { user, dispatch } = this.props

    if (user.identity.name === '') {
      alert('Please enter a name.')
      return
    } else if (user.identity.email === '') {
      alert('Please enter an email address.')
      return
    } else if (user.identity.password.length < 6) {
      alert('Please enter a password at least 6 characters long.')
      return
    } else if (user.identity.passwordRepeat !== user.identity.password) {
      alert('Please confirm your password.')
      return
    } else {

      if (user.identity.type === 'employer') {
        dispatch(UserActions.createUser(user)).catch(err => {
          alert('There was an issue creating your account: ' + err.message)
        })
      } else {
        dispatch(DisplayActions.setView('signup2'))
      }

    }

  }

}

export default IVSignup1
