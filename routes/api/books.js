const express = require("express");

const ctrl = require("../../controllers/books");

const router = express.Router();



router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", ctrl.add);

router.put("/:id", );

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