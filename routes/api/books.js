const express = require("express");

const ctrl = require("../../controllers/books");

const router = express.Router();



router.get("/", ctrl.getAll);

router.get("/:id", );
router.post("/", async (req, res, next) => {
    try {
        const {error} = addSchema.validate(req.body)
        if(error){
            throw HttpError(400, error.message);
        }
        const result = await books.add(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error)
    }
});
router.put("/:id", async (req, res, next) => {
    try {
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
    } catch (error) {
        next(error)
    }
});
router.delete("/", async (req, res, next) => {
      try {
        const {id} = req.params;
        const result = await books.deleteById(id);
        if(!result){
            throw HttpError(404, "Not found");
        }
        res.json({
            message: "Delete success"
        })
      } catch (error) {
        next(error)
      }
})

module.exports = router;