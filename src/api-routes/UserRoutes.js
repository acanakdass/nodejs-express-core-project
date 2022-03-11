const express = require('express')
const schemas = require('../validations/UserValidations')
const router = express.Router()
const validate = require('../core/middlewares/validate')
const UsersController = require('../controllers/UsersController')



router.get("/", UsersController.getAll)
router.post("/register", UsersController.add)
router.post("/login", UsersController.login)
module.exports = router