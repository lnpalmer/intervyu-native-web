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

  static setSettingsExpanded(settingsExpanded) {

    return {
      type: 'SET_SETTINGS_EXPANDED',
      payload: settingsExpanded
    }

  }

  static setDeletingAccount(deletingAccount) {

    return {
      type: 'SET_DELETING_ACCOUNT',
      payload: deletingAccount
    }

  }

}

export default DisplayActions
