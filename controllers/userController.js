// Require models
const User = require('../models/user');

// Require middleware
const Passport = require('passport');

/******************************************/
/************* Login/Signup ***************/
/******************************************/
const { body, validationResult } = require('express-validator');

exports.signUpGet = (req, res) => {
    res.render('users/register', { title: 'Gira: Registro' });
};

exports.signUpPost = [
    body('first_name').isLength({ min: 2, max: 20 }).withMessage('Tu nombre puede ser sólo de 3 a 20 caracteres de largo').trim().escape(),
    body('last_name').isLength({ min: 2, max: 32 }).withMessage('Tu apellido puede ser sólo de 3 a 32 caracteres de largo').trim().escape(),
    body('email').isEmail({ allow_utf8_local_part: false, ignore_max_length: false, domain_specific_validation: true }).withMessage('Correo inválido').trim().blacklist('<|>|\'|"|\/'),
    body('phone_number').isMobilePhone('any', { strictMode: false }).withMessage('Teléfono inválido').trim().escape(),
    body('age').trim().escape(),
    body('gender').trim().escape(),
    body('institution').trim().blacklist('<|>'),
    body('password').isLength({ min: 6 }).withMessage('Contraseña inválida, las contraseñas deben ser por lo menos 6 caracteres de largo').trim().escape(),
    body('confirm_password')
    .custom((value, { req }) => value === req.body.password).withMessage('Las contraseñas no coinciden').trim().escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            // There are validation errors
            res.render('users/register', { title: 'Gira: Registro', errors: errors.array() });
            return;
        } else {
            // No validation errors
            const newUser = new User(req.body);
            User.register(newUser, req.body.password, function(err) {
                if(err) {
                    console.log('Error while registering.', err);
                    return next(err);
                }
                next();
            });
        }
    }
];

exports.loginGet = (req, res) => {
    res.render('users/login', { title: 'Gira: Log In' });
};

exports.loginPost = Passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/login'
});

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/inicio');
};

exports.isAuth = (req, res, next) => {
    req.isAuthenticated()
        ? next()
        : res.redirect('/login');
};

/******************************************/
/************* Account View ***************/
/******************************************/

exports.accountView = (req, res, next) => {
    req.user.permissions == 'dev' || req.user.permissions == 'admin'
        ? res.redirect('/admin')
        : res.render('users/dashboard', { title: 'Gira: Cuenta' });
};