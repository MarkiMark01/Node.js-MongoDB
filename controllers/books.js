const Joi = require("joi");

const {HttpError, ctrlWrapper} = require("../helpers");

const addSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string.required(),
})

const getAll = async (req, res, next) => {
        const result = await books.getAll();
        res.json(result);
}

const getById = async (req, res, next) => {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result){
            throw HttpError(404, "Not found");
        }
        res.json(result);
}

const add = async (req, res, next) => {
        const {error} = addSchema.validate(req.body)
        if(error){
            throw HttpError(400, error.message);
        }
        const result = await books.add(req.body);
        res.status(201).json(result);
}

const updateById = async (req, res, next) => {
        const {error} = addSchema.validate(req.body)
        if(error){
            throw HttpError(400, error.message);
        }
        const {id} = req.params;
        const result = await books.updateById(id, req.body);
        if(!result){
            throw HttpError(404, "Not found");
        }
        res.json(result);
}

const deleteById = async (req, res, next) => {
      const {id} = req.params;
      const result = await books.deleteById(id);
      if(!result){
          throw HttpError(404, "Not found");
      }
      res.json({
          message: "Delete success"
      })
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    updateById: ctrlWrapper(updateById),
    deleteById: ctrlWrapper(deleteById),
}
