import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

import StyleConstants from '../../constants/StyleConstants'

class IVIcon extends Component {

  render() {

    return (
      <FontAwesome
        onClick={() => (this.props.onClick || (() => 0))()}
        name={this.props.value}
        style={{
          color:
            this.props.inverted ?
            StyleConstants.altColor :
            StyleConstants.mainColor,
          marginLeft: 5,
        }}
        size={this.props.size || 'lg'}
      />
    )

  }

}

export default IVIcon
