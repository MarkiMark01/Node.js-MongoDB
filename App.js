const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/api/books");
const authRouter = require("./routes/api/auth")

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' })
});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({message})
})

module.exports = app;



