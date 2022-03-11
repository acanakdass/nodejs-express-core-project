const req = require("express/lib/request");
const { Op } = require("sequelize");
const BaseController = require("../core/controllers/BaseController");
const { ErrorResult } = require("../core/helpers/results");
const { ArticleModel } = require("../models/ArticleModel");
const { sequelize } = require("../models/CategoryModel");
const CategoryModel = require("../models/CategoryModel");
const ArticleService = require("../services/ArticleService");
const CategoryService = require("../services/CategoryService");


class ArticleController extends BaseController {
    constructor() {
        super(ArticleService)
    }
    getAll = async (req, res, next) => {
        // sequelize.getQueryInterface().dropAllTables().then(res => {
        //     console.log(res)
        // })
        // sequelize.getQueryInterface().showAllTables().then((tableObj) => {
        //     console.log('// Tables in database', '==========================');
        //     console.log(tableObj);
        // }).catch((err) => {
        //     console.log('showAllSchemas ERROR', err);
        // })
        // sequelize.getQueryInterface().showAllSchemas().then(res => console.log(res))
        const result = await ArticleService.getAll({ include: CategoryModel })
        res.json(result)
    }
    add = async (req, res, next) => {
        try {
            const result = await ArticleService.add(req.body)
            const categories = await CategoryService.getAll({ where: { id: { [Op.or]: req.body.category_ids } } })
            await result.addCategories(categories)
            res.json(result)
        } catch (error) {
            console.log(error)
            next(error.message)
        }
        // console.log(req.body)
    }
}
const setCategoriesToArticleModel = new Promise((resolve, reject) => {
    try {

    } catch (error) {

    }
})


module.exports = new ArticleController()