class DisplayActions {

  static setView(view) {

    return {
      type: 'SET_VIEW',
      payload: view
    }
    
  }

  static setStatusBarHeight(statusBarHeight) {

    return {
      type: 'SET_STATUS_BAR_HEIGHT',
      payload: statusBarHeight
    }

  }

}

export default DisplayActions
