const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.status(200).send({message: 'It Works!'})
})

app.get('/test', (req, res) => {
  res.status(200).send({message: 'Okay, it Works!'})
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})