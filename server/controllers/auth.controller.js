const { User } = require('../models')

exports.getLogin = (req, res) => {
    if (req.query.error) {
        res.send('Invalid username or password')
    }
    res.send('Login Page')
}

// exports.getRegister = (req, res) => {
//     res.send('Register Page')
// }

exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        res.redirect('login')
    })
}

// exports.register = (req, res) => {
//     const { username, password, confirm_password } = req.body
//     User.findOne({ username: username }, (err, user) => {
//         if (err) {
//             res.send
//         }
//         if (user) {
//             res.send('User already exists')
//         }
//         if (password !== confirm_password) {
//             res.send('Passwords do not match')
//         }
//         bcrypt.hash(password, 10, (err, hash) => {
//             if (err) {
//                 res.send(err)
//             }
//             const newUser = new User({
//                 username: username,
//                 password: hash,
//             })
//             newUser.save((err) => {
//                 if (err) {
//                     res.send(err)
//                 }
//                 res.redirect('/login')
//             })
//         })
//     })
// }

exports.login = (req, res) => {
    res.redirect('/')
}
