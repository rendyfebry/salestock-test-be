const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
	res.send('hello world')
})

const PORT = 3000

app.listen(PORT, () => {
	console.log(`Listening on :${PORT}`)
})
