const express = require('express')

const router = express.Router()

const API = require('../controllers/api')

router.get('/is_alive', API.isAlive)

module.exports = router
