import React, { Component } from 'react'

import IVHeader from './IVHeader'
import IVNavigation from './IVNavigation'

class Root extends Component {

  render() {

    return (
      <div>
        <IVHeader/>
        <IVNavigation/>
      </div>
    )

  }

}

export default Root
