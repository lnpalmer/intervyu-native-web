import React, { Component } from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import StatusBarSizeIOS from 'react-native-status-bar-size'

import DisplayActions from '../../actions/DisplayActions'
import StyleConstants from '../../constants/StyleConstants'

const viewStyle = {
  backgroundColor: StyleConstants.altColor,
}

const bufferStyle = {
  backgroundColor: StyleConstants.mainColor,
  height: 3,
  marginBottom: 10
}

const textStyle = {
  fontFamily: StyleConstants.fontFamily,
  color: StyleConstants.mainColor,
  fontSize: 34,
  fontWeight: '500',
  textAlign: 'center'
}

@connect(store => {
  return {
    display: store.display
  }
})
class IVHeader extends Component {

  componentDidMount() {

    if (Platform.OS === 'ios') {
      this.props.dispatch(DisplayActions.setStatusBarHeight(StatusBarSizeIOS.currentHeight))
      StatusBarSizeIOS.addEventListener('willChange', this.statusBarHeightWillChange)
    }

  }

  componentWillUnmount() {

    if (Platform.OS === 'ios') {
      StatusBarSizeIOS.removeEventListener('willChange', this.statusBarHeightWillChange)
    }

  }

  render() {

    const { display } = this.props

    return (
      <View style={{...viewStyle, paddingTop: display.statusBarHeight - 14}}>
        <Text style={textStyle}> Intervyu </Text>
        <View style={bufferStyle}/>
      </View>
    )

  }

  statusBarHeightWillChange(nextStatusBarHeight) {

    store.dispatch(DisplayActions.setStatusBarHeight(nextStatusBarHeight))

  }

}

export default IVHeader
