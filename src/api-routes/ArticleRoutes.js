const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')
const ArticleController = require('../controllers/ArticlesController')

router.get("/", ArticleController.getAll)
router.post("/create", ArticleController.add)

module.exports = router