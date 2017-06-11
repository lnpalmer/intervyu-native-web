import React, { Component } from 'react'

import StyleConstants from '../../constants/StyleConstants'

class IVText extends Component {

  render() {
    return <b style={{
      fontSize: this.props.fontSize || 18,
      color:
        this.props.inverted ?
        StyleConstants.altColor :
        StyleConstants.mainColor,
      ...this.props.style || {}
    }}>{this.props.value}</b>
  }

}

export default IVText
