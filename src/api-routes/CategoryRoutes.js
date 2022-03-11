const express = require('express')
const CategoriesController = require('../controllers/CategoriesController')
const router = express.Router()


router.get("/", CategoriesController.getAll)
router.post("/create", CategoriesController.add)

module.exports = router