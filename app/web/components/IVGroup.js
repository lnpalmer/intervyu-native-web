import React, { Component } from 'react'

class IVGroup extends Component {

  render() {

    return (
      <div style={{
        margin: '10 auto',
        width: this.props.width || 300,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: this.props.direction || 'column',
        alignItems: 'center',
      }}>
        {this.props.children}
      </div>
    )
  }

}

export default IVGroup
