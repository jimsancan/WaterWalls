const axios = require('axios')
const algo = require('./algo.js')

let send = [];
axios.post('/data', send)
  .then((response) => {
    console.log('data sent')
  })