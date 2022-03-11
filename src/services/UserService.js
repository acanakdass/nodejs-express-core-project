const BaseService = require("../core/services/BaseService")
const UserModel = require("../models/UserModel")

class UserService extends BaseService {
    constructor() {
        super(UserModel)
    }

    login(credentials) {
        return UserModel.findOne({ where: credentials })
    }
    resetPassword(email) {
        //reset password
        //var newPassword = UUID
    }
}


module.exports = new UserService()