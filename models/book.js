const { Schema, model } = require("mongoose");
const {handleMongooseError} = require("../helpers");

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true, 
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: ["fantastic", "adventure", "sitcom"],
        required: true,
    },
    date: {
        type: String,
        match: /^([0-2][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/,
        required: true,
    }
}, { versionKey: false, timestamps: true }); 

bookSchema.post("save", handleMongooseError);

const Book = model("book", bookSchema);

module.exports = Book;
