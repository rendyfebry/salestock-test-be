const db = require('../models/db')

const Product = db.get('product')

const ProductModel = {}

ProductModel.getAll = (limit, skip, sort) => {
	let querySort = {}

	if (sort === 'newest') {
		querySort = {
			$natural: -1,
		}
	} else {
		querySort = { $sort: -1 }
	}

	return Product.find(
		{},
		{ fields: { _id: 0, colors: 0, sizes: 0 }, skip: skip, limit: limit, sort: querySort },
	)
}

ProductModel.countTotal = () => {
	return Product.count()
}

ProductModel.getSingleBySlug = slug => {
	return Product.findOne({ slug: slug }, { _id: 0 })
}

module.exports = ProductModel
