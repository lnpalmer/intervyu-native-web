class UserActions {

  static setEmail(email) {

    return {
      type: 'SET_USER_EMAIL',
      payload: email
    }

  }

  static setPassword(password) {

    return {
      type: 'SET_USER_PASSWORD',
      payload: password
    }

  }

  static setPasswordRepeat(passwordRepeat) {

    return {
      type: 'SET_USER_PASSWORD_REPEAT',
      payload: passwordRepeat
    }

  }

  static setName(name) {

    return {
      type: 'SET_USER_NAME',
      payload: name
    }

  }

}

export default UserActions
