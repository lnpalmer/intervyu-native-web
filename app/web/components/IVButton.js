import React, { Component } from 'react'

import IVText from './IVText'
import StyleConstants from '../../constants/StyleConstants'

class IVButton extends Component {

  render() {
    return (
      <div style={{
        backgroundColor: StyleConstants.mainColor,
        margin: 10,
        borderRadius: 3,
        flex: 1,
        padding: '3 7'
      }}
      onClick={() => this.props.onClick()}>
        <IVText
          value={this.props.value}
          fontSize={this.props.fontSize || 24}
          inverted
        />
      </div>
    )
  }

}

export default IVButton
