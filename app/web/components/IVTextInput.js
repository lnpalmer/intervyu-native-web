import React, { Component } from 'react'

import StyleConstants from '../../constants/StyleConstants'

class IVTextInput extends Component {

  render() {
    return (
      <div style={{
        margin: 10,
        ...this.props.style || {}
      }}>
        <input
          type={
            this.props.secureTextEntry ?
            'password' :
            'text'
          }
          value={this.props.value}
          onChange={e => this.props.onValue(e.target.value)}
          style={{
            border: 0,
            outline: 0,
            background: 'transparent',
            borderBottom: '2px solid',
            borderColor:
              this.props.inverted ?
              StyleConstants.altColor :
              StyleConstants.mainColor,
            color:
              this.props.inverted ?
              StyleConstants.altColor :
              StyleConstants.mainColor,
            textAlign: 'center',
            fontSize: this.props.fontSize || 22
          }}
          size={this.props.size || 24}
        />
        <br/>
      </div>
    )
  }

}

export default IVTextInput
