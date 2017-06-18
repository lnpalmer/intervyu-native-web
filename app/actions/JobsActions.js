import * as firebase from 'firebase'

class JobsActions {

  static setLocation(location) {

    return {
      type: 'SET_JOB_LOCATION',
      payload: location
    }

  }

  static setAddress(address) {

    return {
      type: 'SET_JOB_ADDRESS',
      payload: address
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

  static setName(name) {

    return {
      type: 'SET_JOB_NAME',
      payload: name
    }

  }

  static setDescription(role) {

    return {
      type: 'SET_JOB_DESCRIPTION',
      payload: role
    }

  }

  static setLink(link) {

    return {
      type: 'SET_JOB_LINK',
      payload: link
    }

  }

  static setIcon(icon) {

    return {
      type: 'SET_JOB_ICON',
      payload: icon
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
      icon: null,
      owner: firebase.auth().currentUser.uid
    }

    const smallUploadObject = {
      location: jobObject.location
    }

    const file = jobObject.icon
    const fileExtension = jobObject.iconExtension
    const fileMetadata = { contentType: 'image/' + fileExtension }

    return {
      type: 'UPLOAD_JOB',
      payload: firebase.database().ref('jobs').push(uploadObject).then(reference => {
        return firebase.database().ref('jobsSmall/' + reference.key).set(smallUploadObject).then(smallReference => {
          return (
            firebase.storage().ref('jobs')
            .child(reference.key + '/thumbnail.' + fileExtension)
            .put(file, fileMetadata)
          )
        })
      })
    }

  }

  static deleteJob(jobObject) {

    const jobRef = firebase.database().ref('jobs/' + jobObject.key)
    const jobSmallRef = firebase.database().ref('jobsSmall/' + jobObject.key)
    const thumbnailRef = firebase.storage().ref('jobs/' + jobObject.key + '/thumbnail.' + jobObject.iconExtension)

    return {
      type: 'DELETE_JOB',
      payload: jobRef.remove().then(() => {
        return jobSmallRef.remove().then(() => {
          return thumbnailRef.delete()
        })
      })
    }

  }

  static downloadEntry(jobId) {

    return {
      type: 'DOWNLOAD_JOB_ENTRY',
      payload: firebase.database().ref('jobs/' + jobId).once('value').then(dataSnapshot => {

        const jobObject = dataSnapshot.val()
        const jobId = dataSnapshot.key

        return firebase.database().ref('users/' + jobObject.owner + '/config/industries').once('value').then(industriesSnapshot => {

          return {
            ...jobObject,
            key: jobId,
            industries: industriesSnapshot.val()
          }

        })

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

  static setEntryExpanded(jobKey, expanded) {

    return {
      type: 'SET_JOB_ENTRY_EXPANDED',
      payload: {
        key: jobKey,
        expanded: expanded
      }
    }

  }

  static getEntryThumbnail(jobKey, fileExtension) {

    return {
      type: 'GET_JOB_ENTRY_THUMBNAIL',
      payload: firebase.storage().ref('jobs/' + jobKey + '/thumbnail.' + fileExtension).getDownloadURL().then(url => {
        return Promise.resolve({ url: url, key: jobKey })
      })
    }

  }

  static getEntryEmployer(jobKey, jobOwner) {

    return {
      type: 'GET_JOB_ENTRY_EMPLOYER',
      payload: firebase.database().ref('users/' + jobOwner + '/identity/name').once('value').then(dataSnapshot => {
        return Promise.resolve({ name: dataSnapshot.val(), key: jobKey })
      })
    }

  }

  static setMode(mode) {

    return {
      type: 'SET_JOBS_MODE',
      payload: mode
    }

  }

  static setSearchDistance(distance) {

    return {
      type: 'SET_JOB_SEARCH_DISTANCE',
      payload: distance
    }

  }

  static setSearchTerm(term) {

    return {
      type: 'SET_JOB_SEARCH_TERM',
      payload: term
    }

  }

}

export default JobsActions
