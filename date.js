const express = require('express')
const { default: fetch } = require('node-fetch')

const app = express()

app.get('/', (req, res) => {
   fetch("http://localhost:3000")
      .then(res => res.json())
      .then(() => {
         res.send('Hello!' + ' ' + new Date())
      })
})

app.listen(3005, () => {
   console.log('Ready date.js')
})