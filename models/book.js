const { Schema, model } = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../helpers");

const genreList = ["fantastic", "criminal", "sitcom"];
const dateRegexp =  /^([0-2][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/

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
        enum: genreList,
        required: true,
    },
    date: {
        type: String,
        match: dateRegexp,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
}, { versionKey: false, timestamps: true }); 

bookSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.boolean().required(),
    genre: Joi.string().valid(...genreList).required(),
    date: Joi.string().pattern(dateRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})

const Book = model("book", bookSchema);

const schemas = {
    addSchema,
    updateFavoriteSchema,
}

module.exports = {
    Book,
    schemas,
};
