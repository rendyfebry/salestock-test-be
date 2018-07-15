const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

const apiRoutes = require('./routes/api')
const productRoutes = require('./routes/product')
const promoRoutes = require('./routes/promo')

app.use('/api', apiRoutes)
app.use('/api/products', productRoutes)
app.use('/api/promos', promoRoutes)

app.use('*', (req, res) => {
	res.status(404).send({
		error: 404,
		message: 'Not Found',
		data: [],
	})
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Listening on :${PORT}`)
})
