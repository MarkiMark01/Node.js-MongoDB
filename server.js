const mongoose = require('mongoose')

const app = require('./App');

const { DB_HOST, PORT = 3000 } = process.env

mongoose.set('strictQuery', true)

console.log('Before connecting to MongoDB');
mongoose.connect(DB_HOST)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT);
    })
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });
