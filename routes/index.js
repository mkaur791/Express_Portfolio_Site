/** File name: index.js
Name: Manvir Kaur
Student Id: 301171525
Date: 20/10/2021
*/

var express = require('express');
var router = express.Router();
let contactController = require('../controllers/contact')

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',page: 'home' });
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',page: 'home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About',page: 'about' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' , page: 'services'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' , page: 'contact' });
});

/* POST Contact page. */
router.post('/contact',contactController.processContactPage)


module.exports = router;
