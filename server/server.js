const express = require('express')
const path = require('path')
const app = express();
const bodyParser = require('body-parser');
const waterWalls = require('../src/algo.js')

app.use('/css', express.static(path.resolve(__dirname+ '/../src')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//direct root request to index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/../src/index.html')))

//get values from numbers input field
app.post('/data', (req, res) => {
  console.log('here')
  let arr = req.body.numbers
              .split(',')
              .map((num) => {
                Number(num)
              })
  let output = waterWalls(arr)
  console.log('output', output)
  
})

app.listen(3000, () => console.log('listening on 3000'))
