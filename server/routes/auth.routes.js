const express = require('express')
const router = express.Router()
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const { User } = require('../models')
const {
    authMiddlewares: { isLoggedIn, isLoggedOut },
} = require('../middlewares')
const {
    authController: { getIndex, getLogin, logout, login },
} = require('../controllers')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

passport.use(
    new localStrategy((username, password, done) => {
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username' })
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) return done(err)
                if (res === false) {
                    return done(null, false, { message: 'Incorrect password' })
                }
                return done(null, user)
            })
        })
    })
)

router.get('/login', isLoggedOut, getLogin)
router.get('/logout', isLoggedIn, logout)
// router.get('/register', isLoggedOut, getRegister)

router.post(
    '/login',
    isLoggedOut,
    passport.authenticate('local', {
        failureRedirect: '/login?error=true',
    }),
    login
)
// router.post('/register', isLoggedOut, register)

module.exports = router
