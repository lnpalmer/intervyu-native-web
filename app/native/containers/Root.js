import React, { Component } from 'react'
import { Provider } from 'react-redux'

import buildStore from '../../store/buildStore'
import Navigation from './Navigation'

export const store = buildStore({number: 0})

class Root extends Component {

  render() {

    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    )

  }

}

export default Root

/*
<TouchableOpacity onPress={() => this.props.dispatch(Actions.increase(1))}>
  <View style={{padding: 30}}>
    <Text> {this.props.number} </Text>
  </View>
</TouchableOpacity>
*/
