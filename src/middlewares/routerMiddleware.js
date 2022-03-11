const Routes = require("../api-routes")

const routerMiddleware = (app) => {
    app.use('/api/projects', Routes.ProjectRoutes)
    app.use('/api/users', Routes.UserRoutes)
    app.use('/api/articles', Routes.ArticleRoutes)
    app.use('/api/categories', Routes.CategoryRoutes)
}
module.exports = routerMiddleware