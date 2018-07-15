const API = {}

API.isAlive = async (req, res, next) => {
	const response = {
		error: 0,
		message: 'success',
		data: [],
	}

	res.send(response)
}

module.exports = API
