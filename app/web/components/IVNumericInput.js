import React, { Component } from 'react'

import IVText from './IVText'
import IVIcon from './IVIcon'

class IVNumericInput extends Component {

  render() {

    return (
      <div style={{
        margin: 10
      }}>
        <IVIcon
          value="minus"
          size="2x"
          onClick={() => this.onValue(this.props.value - this.props.increment)}/>
        <IVText
          value={this.props.value.toString()}
          fontSize={36}
          style={{
            margin: 10
          }}
        />
        <IVIcon
          size="2x"
          value="plus"
          onClick={() => this.onValue(this.props.value + this.props.increment)}
        />
      </div>
    )

  }

  onValue(value) {

    this.props.onValue(Math.min(Math.max(
      value,
    this.props.min), this.props.max))

  }

}

export default IVNumericInput
