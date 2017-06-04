class UserActions {

  static setName(name) {

    return {
      type: 'SET_NAME',
      payload: name
    }

  }

}

export default UserActions
