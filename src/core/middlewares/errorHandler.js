
const errorHandler = (err, req, res, next) => {
    console.log("err handler middleware..")
    res.status(500).json(err)

}
module.exports = errorHandler