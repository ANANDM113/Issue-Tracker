const express   =   require('express');
const router    =   express.Router();

const projectPageController =   require('../controllers/projectPageController');

router.post('/create',projectPageController.create);
router.get('/:id',projectPageController.projectPage);
router.post('/:id',projectPageController.createIssue);

module.exports  =   router;