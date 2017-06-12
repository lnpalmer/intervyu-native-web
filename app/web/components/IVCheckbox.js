import React, { Component } from 'react'
const FontAwesome = require('react-fontawesome')

import IVText from './IVText'
import IVIcon from './IVIcon'

class IVCheckbox extends Component {

  render() {
    return (
      <div
        style={{
          margin: ' 4 auto',
          padding: '6 8',
          display: 'inline-block',
        }}
        onClick={() => this.props.onValue(!this.props.value)}
      >
        <IVText value={this.props.text}/>
        <IVIcon value={
          this.props.value ?
          "check-circle" :
          "circle"
        }/>
      </div>
    )
  }

}

export default IVCheckbox
