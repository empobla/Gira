var express = require('express');
var router = express.Router();

// Require controller modules
const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('opening', { title: 'Gira' });
});

router.get('/inicio', function(req, res, next) {
  res.render('index', { title: 'Gira' });
});

router.get('/eventos', function(req, res, next) {
  res.render('events', { title: 'Gira: Eventos' });
});

router.get('/eventos/elecciones-2021-mexico', function(req, res, next) {
  res.render('event', { title: 'Gira: Elecciones 2021 México' });
});

router.get('/eventos/something-new', function(req, res, next) {
  res.render('eventcarousel', { title: 'Gira: Something New' });
});

// Login
router.get('/login', userController.loginGet);
router.post('/login', userController.loginPost);

// Sign Up
router.get('/unete', userController.signUpGet);
router.post('/unete',
  userController.signUpPost,
  userController.loginPost
);

// Logout
router.get('/logout', userController.logout);

module.exports = router;
