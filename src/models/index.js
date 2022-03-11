const UserModel = require("./UserModel")
const ArticleModel = require("./ArticleModel")
const CategoryModel = require("./CategoryModel")
const { sequelize } = require("../core/loaders/db")
const { DataTypes } = require("sequelize")
const UserService = require("../services/UserService")
const { hashPassword } = require("../core/helpers/securityHelpers")

async function main() {
    sequelize.define("article_category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            // autoIncrement: true
        }
    }, { timestamps: false })

    console.log('index file works')
    ArticleModel.belongsToMany(CategoryModel, { through: "article_category" })
    CategoryModel.belongsToMany(ArticleModel, { through: "article_category" })
    await sequelize.sync()

    //seed admin user
    const seedAdminUser = () => {

        const cryptedPw = hashPassword(process.env.ADMIN_PW)
        let userData = {
            firstName: process.env.ADMIN_FN,
            lastName: process.env.ADMIN_LN,
            email: process.env.ADMIN_EMAIL,
            password: cryptedPw,
        }
        UserService.add(userData).then(response => {
            console.log("addeddd")
            console.log(response)
        }).catch(err => {
            console.log(err)
        })

    }
    const users = await UserService.getAll()
    if (users.length == 0) {
        seedAdminUser()
    }

}

main()

module.exports = {
    ArticleModel,
    UserModel,
    CategoryModel
}