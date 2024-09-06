const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
});
router.get("/:id", async (req, res) => {
    res.json()
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