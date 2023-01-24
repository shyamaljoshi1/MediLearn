const mongoose = require('mongoose')
const dotenv = require('dotenv').config({ path: './env/.env' })
const MONGO_URI = process.env.MONGO_URI

mongoose.set('strictQuery', true)
const connection = () => {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to MongoDB')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = connection
