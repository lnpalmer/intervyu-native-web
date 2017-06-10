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

  static setLocation(location) {

    return {
      type: 'SET_USER_LOCATION',
      payload: location
    }

  }

  static addExperience(experience) {

    return {
      type: 'ADD_USER_EXPERIENCE',
      payload: experience
    }

  }

  static delExperience(experience) {

    return {
      type: 'DEL_USER_EXPERIENCE',
      payload: experience
    }

  }

  static addDay(day) {

    return {
      type: 'ADD_USER_DAY',
      payload: day
    }

  }

  static delDay(day) {

    return {
      type: 'DEL_USER_DAY',
      payload: day
    }

  }

}

export default UserActions
