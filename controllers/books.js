const Joi = require("joi");

const {HttpError} = require("../helpers");

const addSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string.required(),
})

const getAll = async (req, res, next) => {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAll,
}
