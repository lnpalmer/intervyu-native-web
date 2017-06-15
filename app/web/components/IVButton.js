import React, { Component } from 'react'

import IVText from './IVText'
import StyleConstants from '../../constants/StyleConstants'

class IVButton extends Component {

  render() {
    return (
      <div style={{
        backgroundColor:
          this.props.inverted ?
          StyleConstants.altColor :
          StyleConstants.mainColor,
        margin: 10,
        borderRadius: 3,
        flex: 1,
        padding: '4 6',
        textAlign: 'center'
      }}
      onClick={() => this.props.onClick()}>
        <IVText
          value={this.props.value}
          fontSize={this.props.fontSize || 24}
          inverted={!this.props.inverted}
        />
      </div>
    )
  }

}

export default IVButton
