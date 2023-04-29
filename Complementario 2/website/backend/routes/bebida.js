var express = require('express');
var router = express.Router();

const { BebidaController } = require('../controllers/index');

router.get('/', BebidaController.getBebida);
router.post('', BebidaController.postBebida);

module.exports = router;
