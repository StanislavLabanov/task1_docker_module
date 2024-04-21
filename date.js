const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.send('Hello!' + ' ' + new Date())
})

app.listen(3005, () => {
   console.log('Ready date.js')
})
