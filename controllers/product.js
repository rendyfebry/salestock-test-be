const ProductModel = require('../models/product')

const Product = {}

Product.getAll = async (req, res, next) => {
	const page = parseInt(req.query.page) || 1
	const limit = parseInt(req.query.perPage) || 3
	const skip = (page - 1) * limit

	const productList = await ProductModel.getAll(limit, skip)
	const productTotal = await ProductModel.countTotal()

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
	const selectedProduct = await ProductModel.getSingleBySlug(req.params.slug)

	if (selectedProduct) {
		const response = { error: 0, message: 'success', data: selectedProduct }
		return res.send(response)
	}

	const response = { error: 404, message: 'Not Found', data: {} }
	return res.status(404).send(response)
}

module.exports = Product
