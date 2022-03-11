const Joi = require("joi");

const addValidation = Joi.object({
    name: Joi.string().required().min(3)
})
const updateValidation = Joi.object({
    name: Joi.string().required().min(3)
})
module.exports = {
    addValidation,
    updateValidation
}