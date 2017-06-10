import * as firebase from 'firebase'

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

  static setHours(hours) {

    return {
      type: 'SET_USER_HOURS',
      payload: hours
    }

  }

  static setDistance(distance) {

    return {
      type: 'SET_USER_DISTANCE',
      payload: distance
    }

  }

  static setTransportation(transportation) {

    return {
      type: 'SET_USER_TRANSPORTATION',
      payload: transportation
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

  static createUser(email, password) {

    return {
      type: 'CREATE_USER',
      payload: firebase.auth().createUserWithEmailAndPassword(email, password)
    }

  }

  static uploadUser(userObject) {

    return {
      type: 'UPLOAD_USER',
      payload: firebase.database().ref('users').push(userObject)
    }

  }

}

export default UserActions
