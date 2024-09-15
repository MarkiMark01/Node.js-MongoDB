const { Schema, model } = require("mongoose");
const Joi = require("joi");

const {handleMongooseError} = require("../helpers");

const emailRegexp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const userSchema = new Schema({
name: {
    type: String,
    required: true,
},
}, {versionKey: false, timestamps: true});
