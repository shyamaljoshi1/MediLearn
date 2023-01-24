exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('login')
    }
}

exports.isLoggedOut = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/')
    }
}
