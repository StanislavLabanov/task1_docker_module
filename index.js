const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.get('/', (req, res) => {
   fetch("http://localhost:3005")
      .then(() => res.send('Hello world'))
})

app.listen(3000, () => {
   console.log(`Example app listening on port 3000`)
})