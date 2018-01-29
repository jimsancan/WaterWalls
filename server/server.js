const express = require('express')
const path = require('path')
const app = express();
const bodyParser = require('body-parser');

app.use('/css', express.static(path.resolve(__dirname+ '/../src')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.sendFile(path.join(__dirname +'/../src/index.html')))

app.post('/data', (req, res) => res.send('sent data' + req.body))

app.listen(3000, () => console.log('listening on 3000'))
