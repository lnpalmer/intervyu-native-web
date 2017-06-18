import React, { Component } from 'react'
import { connect } from 'react-redux'

import StyleConstants from '../../constants/StyleConstants'
import IVText from '../components/IVText'
import IVButton from '../components/IVButton'
import IVTextInput from '../components/IVTextInput'
import IVGroup from '../components/IVGroup'
import DisplayActions from '../../actions/DisplayActions'
import UserActions from '../../actions/UserActions'

@connect(store => {
  return {
    user: store.user,
    display: store.display
  }
})
class IVSettings extends Component {

  render() {

    const { user, display, dispatch } = this.props

    return (

      <div style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        backgroundColor: '#0a4',
        transition: StyleConstants.transition,
        height:
          (display.settingsExpanded ? 145 : 34) +
          (display.deletingAccount ? 145 : 0),
        width: 380,
        textAlign: 'center',
        overflow: 'hidden'
      }}>

        <div
          style={{
            backgroundColor: StyleConstants.mainColor
          }}
          onClick={() => dispatch(
            DisplayActions.setSettingsExpanded(!display.settingsExpanded)
          )}
        >

          <IVText value={user.identity.name} inverted fontSize={24}/>

        </div>

        <IVButton
          value={"sign out"}
          onClick={() => dispatch(UserActions.logOut())}
          inverted
        />

        <IVButton
          value={"delete account"}
          onClick={() => dispatch(DisplayActions.setDeletingAccount(true))}
          inverted
        />

        {
          display.deletingAccount ?
          (
            <div>

              <IVText value="type in your password to confirm:" inverted/>
              <IVTextInput
                value={user.identity.password}
                onValue={value => dispatch(UserActions.setPassword(value))}
                secureTextEntry
                inverted
              />

              <IVGroup direction="row" width={380}>
                <IVButton
                  value={"cancel"}
                  onClick={() => dispatch(DisplayActions.setDeletingAccount(false))}
                  inverted
                />
                <IVButton
                  value={"confirm"}
                  onClick={() => dispatch(UserActions.delete(user)).catch(err => {
                    alert('There was an issue deleting your account: ' + err.message)
                  })}
                  inverted
                />
              </IVGroup>

            </div>
          ) : ''
        }

      </div>

    )

  }

}

export default IVSettings
