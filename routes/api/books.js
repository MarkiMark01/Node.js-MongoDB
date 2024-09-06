const express = require("express");

const {HttpError} = require("../../helpers");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error)
    }
});
router.get("/:id", async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result){
            throw HttpError(404, "Not found");
            // return res.status(404).json({
            //     message: "Not found"
            // })
        }
        res.json(result);
    } catch (error) {
        next(error)
    }
});
router.post("/", async (req, res) => {
    res.json()
});
router.put("/:id", async (req, res) => {
    res.json()
});
router.delete("/", async (req, res) => {
    res.json()
})

module.exports = router;