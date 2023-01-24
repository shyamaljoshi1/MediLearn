const express = require('express')
const router = express.Router()
const {
    indexController: { getIndex },
} = require('../controllers')

router.get('/', getIndex)

module.exports = router
