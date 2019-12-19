const express = require('express')
const PORT = process.env.PORT || 3000
const path = require('path')
const app = express()

// Enable express to serve static files from a directory
app.use(express.static('public'))

app.get('/test', (req, res) => {
  res.status(200).send({message: 'Okay, it Works!'})
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})