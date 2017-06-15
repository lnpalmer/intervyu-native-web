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

  static setType(type) {

    return {
      type: 'SET_USER_TYPE',
      payload: type
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

  static createUser(userObject) {

    return {
      type: 'CREATE_USER',
      payload:
        firebase.auth().createUserWithEmailAndPassword(
          userObject.identity.email,
          userObject.identity.password
        ).then(user => {
          const fbUser = firebase.auth().currentUser
          return firebase.database().ref('users/' + fbUser.uid).set(userObject)
        })
    }

  }

  static logIn(email, password) {

    return {
      type: 'LOG_IN_USER',
      payload:
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          const fbUser = firebase.auth().currentUser
          return firebase.database().ref('users/' + fbUser.uid).once('value')
        })
    }
  }

  static logOut() {

    return {
      type: 'LOG_OUT_USER',
      payload: firebase.auth().signOut()
    }

  }

  static delete(userObject) {

    const fbUser = firebase.auth().currentUser

    console.log(fbUser)

    const credential =
      firebase.auth.EmailAuthProvider.credential(
        userObject.identity.email,
        userObject.identity.password
      )

    var payload = fbUser.reauthenticate(credential).then(() => {
      return firebase.database().ref('users/' + fbUser.uid).remove().then(() => {
        return fbUser.delete()
      })
    })

    if (user.identity.type === 'employer') {
      payload = firebase.database().ref('jobs')
      .orderByChild('owner').equalTo(fbUser.uid)
      .remove().then(() => {
        return
          firebase.database().ref('jobsSmall')
          .orderByChild('owner').equalTo(fbUser.uid)
          .remove()
      })
    }

    return {
      type: 'DELETE_USER',
      payload: payload
    }

  }

}

export default UserActions
