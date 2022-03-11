const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class ArticleService extends BaseService {
    constructor() {
        super(Models.ArticleModel)
    }
}


module.exports = new ArticleService()