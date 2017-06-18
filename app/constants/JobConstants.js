class JobConstants {

  static industries = [
    "Corporate Business",
    "Delivery",
    "Education",
    "Food Service",
    "Health",
    "Hospitality",
    "Retail",
    "Technology"
  ]

  static tasks = [
    "Serving food",
    "Teaching",
    "Customer assistance",
    "Providing expertise in a field",
    "Lifting heavy items"
  ]

  static days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  static scoreJobEntry(userObject, jobObject) {

    const distanceSubscore = -JobConstants.distanceFromUser(userObject, jobObject)

    const experienceSubscore =
      (jobObject.experience && userObject.config.experience) ?
      jobObject.experience.map(experienceType => {
        return userObject.config.experience.includes(experienceType) ? 1.0 : 0.0
      }).reduce((a, b) => a + b) : 0

    const daysSubscore =
      (jobObject.days && userObject.config.days) ?
      jobObject.days.map(day => {
        return userObject.config.days.includes(day) ? 1.0 : 0.0
      }).reduce((a, b) => a + b) : 0

    const industriesSubscore =
      (jobObject.industries && userObject.config.industries) ?
      jobObject.industries.map(industry => {
        return userObject.config.industries.includes(industry) ? 1.0 : 0.0
      }).reduce((a, b) => a + b) : 0

    const hoursSubscore =
      jobObject.hours > userObject.config.hours ?
      userObject.config.hours - jobObject.hours : 0

    const transportationSubscore =
      jobObject.transportation || userObject.config.transportation ?
      1 : 0

    const totalScore =
      1.0 * distanceSubscore +
      1.0 * experienceSubscore +
      1.0 * industriesSubscore +
      2.0 * daysSubscore +
      0.5 * hoursSubscore +
      8.0 * transportationSubscore

    return totalScore

  }

  static distanceFromUser(userObject, jobObject) {

    const latLng1 = jobObject.location
    const lat1 = latLng1.latitude
    const lng1 = latLng1.longitude

    const latLng2 = userObject.config.location
    const lat2 = latLng2.latitude
    const lng2 = latLng2.longitude

    const lat1Rads = Math.PI * lat1 / 180
    const lng1Rads = Math.PI * lng1 / 180
    const lat2Rads = Math.PI * lat2 / 180
    const lng2Rads = Math.PI * lng2 / 180

    const theta = lng2Rads - lng1Rads
    const dist = Math.acos(
      Math.sin(lat1Rads) * Math.sin(lat2Rads) +
      Math.cos(lat1Rads) * Math.cos(lat2Rads) * Math.cos(theta)
    ) * 60 * 1.1515 * 180 / Math.PI

    return dist

  }

}

export default JobConstants
