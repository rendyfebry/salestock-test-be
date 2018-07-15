const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

const apiRoutes = require('./routes/api')

// projet api
app.use('/api', apiRoutes)

app.use('*', (req, res) => {
	res.status(404).send({
		error: 404,
		message: 'Not Found',
		data: [],
	})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Listening on :${PORT}`)
})
