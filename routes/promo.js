const express = require('express')
const router = express.Router()

const Promo = require('../controllers/promo')

router.get('/', Promo.getAll)

module.exports = router
