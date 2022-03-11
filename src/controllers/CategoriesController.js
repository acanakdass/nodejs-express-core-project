const BaseController = require("../core/controllers/BaseController");
const ArticleModel = require("../models/ArticleModel");
const CategoryService = require("../services/CategoryService");

class CategoriesController extends BaseController {
    constructor() {
        super(CategoryService)
    }
    getAll = async (req, res, next) => {
        try {
            const result = await CategoryService.getAll()
            res.json(result)
        } catch (error) {
            console.log(error)
            next(error.message)
        }
    }
}

module.exports = new CategoriesController()