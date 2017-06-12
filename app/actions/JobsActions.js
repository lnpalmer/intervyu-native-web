import * as firebase from 'firebase'

class JobsActions {

  static setLocation(location) {

    return {
      type: 'SET_JOB_LOCATION',
      payload: location
    }

  }

  static setHours(hours) {

    return {
      type: 'SET_JOB_HOURS',
      payload: hours
    }

  }

  static setDistance(distance) {

    return {
      type: 'SET_JOB_DISTANCE',
      payload: distance
    }

  }

  static setTransportation(transportation) {

    return {
      type: 'SET_JOB_TRANSPORTATION',
      payload: transportation
    }

  }

  static addExperience(experience) {

    return {
      type: 'ADD_JOB_EXPERIENCE',
      payload: experience
    }

  }

  static delExperience(experience) {

    return {
      type: 'DEL_JOB_EXPERIENCE',
      payload: experience
    }

  }

  static addDay(day) {

    return {
      type: 'ADD_JOB_DAY',
      payload: day
    }

  }

  static delDay(day) {

    return {
      type: 'DEL_JOB_DAY',
      payload: day
    }

  }

  static uploadJob(jobObject) {

    const uploadObject = {
      ...jobObject,
      owner: firebase.auth().currentUser.uid
    }

    const smallUploadObject = {
      location: jobObject.location
    }

    return {
      type: 'UPLOAD_JOB',
      payload: firebase.database().ref('jobs').push(uploadObject).then(reference => {
        return firebase.database().ref('jobsSmall/' + reference.key).set(smallUploadObject)
      })
    }

  }

  static receiveEntry(jobObject) {

    return {
      type: 'RECEIVE_JOB_ENTRY',
      payload: jobObject
    }

  }

  static removeEntry(jobKey) {

    return {
      type: 'REMOVE_JOB_ENTRY',
      payload: jobKey
    }

  }

}

export default JobsActions
