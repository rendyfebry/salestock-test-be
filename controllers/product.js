const db = require('../models/db')

const products = db.get('product')

const Product = {}

Product.getAll = async (req, res, next) => {
	const page = parseInt(req.query.page) || 1
	const limit = parseInt(req.query.perPage) || 3
	const skip = (page - 1) * limit

	const productList = await products.find(
		{},
		{
			fields: { _id: 0, colors: 0, sizes: 0 },
			skip: skip,
			limit: limit,
		},
	)

	const productTotal = await products.count()

	if (productList && productList.length > 0) {
		const response = {
			error: 0,
			message: 'success',
			data: productList,
			meta: { page: page, perPage: limit, total: productTotal },
		}
		return res.send(response)
	}

	const response = { error: 404, message: 'Not Found', data: [] }
	return res.status(404).send(response)
}

Product.getSingleBySlug = async (req, res, next) => {
	const selectedProduct = await products.findOne({ slug: req.params.slug }, { _id: 0 })

	if (selectedProduct) {
		const response = { error: 0, message: 'success', data: selectedProduct }
		return res.send(response)
	}

	const response = { error: 404, message: 'Not Found', data: {} }
	return res.status(404).send(response)
}

module.exports = Product
