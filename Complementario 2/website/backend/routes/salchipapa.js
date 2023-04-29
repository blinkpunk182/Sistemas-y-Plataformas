var express = require('express');
var router = express.Router();

const { SalchipapaController } = require('../controllers/index');

router.get('/', SalchipapaController.getSalchipapa);
router.post('', SalchipapaController.postSalchipapa);

module.exports = router;
