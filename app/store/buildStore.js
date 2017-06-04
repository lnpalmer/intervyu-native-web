const development = true//process.env.NODE_ENV === 'development' && process.env.PLATFORM_ENV === 'web'
if (development) module.exports = require('./buildStore.dev')
else module.exports = require('./buildStore.prod')
