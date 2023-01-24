const express = require('express')
const session = require('express-session')
const passport = require('passport')
const dotenv = require('dotenv').config({ path: './env/.env' })
const app = express()
const connection = require('./config/db')
const { indexRouter, authRouter } = require('./routes')

const PORT = process.env.PORT || 3000

// Database
connection()

app.use(
    session({
        secret: 'bestsecret',
        resave: false,
        saveUninitialized: true,
    })
)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', indexRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
