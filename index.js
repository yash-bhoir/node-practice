require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res) => {

    res.send('helolo you are on login page ')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})
