const express   =   require('express');

const router    =   express.Router();

const homePageController    =   require('../controllers/homePageController');
console.log('Router loaded');

router.get('/',homePageController.home);
router.use('/project',require('./project'));
module.exports  =   router;
