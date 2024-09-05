const express = require("express");

const router = express.Router();

router.get("/api/books", (req, res) => {
    res.json()
});
router.get("/api/books/:id", (req, res) => {
    res.json()
});
router.post("/api/books", (req, res) => {
    res.json()
});
router.put("/api/books/:id", (req, res) => {
    res.json()
});
router.delete("/api/books/:id", (req, res) => {
    res.json()
})

module.exports = router;