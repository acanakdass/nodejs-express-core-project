class BaseService {
    constructor(model) {
        this.model = model
    }
    getAll(where) {
        console.log(this.model)
        return this.model.findAll(where || {})
    }
    add(data) {
        let model = new this.model(data)
        return model.save()
    }

    update(data, id) {
        return this.model.findByIdAndUpdate(id, data, { new: true })
    }

    getById(id) {
        return this.model.findByPk(id)
    }
    delete(id) {
        return this.model.findByIdAndRemove(id)
    }
}

module.exports = BaseService;