const Product = {}

const productData = [
	{
		name: 'Aridatha Plain Drapped Midi Dress',
		slug: 'aridatha-plain-drapped-midi-dress',
		price: 155000,
		category: 'dress',
		images: [
			'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/f1f19d0b4f413388031408e47de8b0b8.jpg',
		],
	},
	{
		name: 'Zalifa Brukat Flare Mini Dress',
		slug: 'zalifa-brukat-flare-mini-dress',
		price: 155000,
		category: 'dress',
		images: [
			'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/0c0bf8024b8b627db756ddb1f050bee1.jpg',
		],
	},
	{
		name: 'Gyamaru Lace Drapped Mini Dress',
		slug: 'gyamaru-lace-drapped-mini-dress',
		price: 155000,
		category: 'dress',
		images: [
			'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/00cc30c2bcb967a9dbb87fe6f32e2e65.jpg',
		],
	},
	{
		name: 'Helsexia Plain V-Neck Mini Dress',
		slug: 'helsexia-plain-v-neck-mini-dress',
		price: 155000,
		category: 'dress',
		images: [
			'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/608d4411aad8d3eef5f35235a74bd0a7.jpg',
		],
	},
	{
		name: 'Foyuilzha Brukat Cape Mini Dress',
		slug: 'foyuilzha-brukat-cape-mini-dress',
		price: 155000,
		category: 'dress',
		images: [
			'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/11dfe4b4a43e83e6d49e8b2eea167491.jpg',
		],
	},
	{
		name: 'Elhepone Flowery Cold Shoulder Mini Dress',
		slug: 'elhepone-flowery-cold-shoulder-mini-dress',
		price: 155000,
		category: 'dress',
		images: [
			'https://ss-imager-prod.freetls.fastly.net/www-images/480/product_images/fbd2b5a3a1e1bdbafe0a42a0c19f1509.jpg',
		],
	},
]

Product.getAll = async (req, res, next) => {
	const response = { error: 0, message: 'success', data: productData }

	return res.send(response)
}

Product.getSingleBySlug = async (req, res, next) => {
	const selectedProduct = productData.find(i => i.slug === req.params.slug)

	if (selectedProduct) {
		const response = { error: 0, message: 'success', data: selectedProduct }
		return res.send(response)
	}

	const response = { error: 404, message: 'Not Found', data: {} }

	return res.status(404).send(response)
}

module.exports = Product
