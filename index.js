const express = require('express');
const data = require('./data.json')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use('/', express.static('./cricHeroes'));

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/pointsTable', (req, res) => {
    res.send(JSON.stringify(data));
})

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})