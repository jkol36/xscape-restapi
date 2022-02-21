import Promise from 'bluebird'

global.Promise = Promise

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}







