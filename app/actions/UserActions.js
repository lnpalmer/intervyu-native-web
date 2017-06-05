class UserActions {

  static setEmail(email) {

    return {
      type: 'SET_EMAIL',
      payload: email
    }

  }

  static setPassword(password) {

    return {
      type: 'SET_PASSWORD',
      payload: password
    }

  }

}

export default UserActions
