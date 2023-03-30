const express = require('express')
const cors = require('cors')

const moviesRouter = require('./movies/movies.router')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'Server OK'})
})

app.use('/', moviesRouter)

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})

module.exports = app