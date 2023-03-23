require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '6eebd0b7031448538b30a152d18a6c52',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use(express.json())



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))