var express = require('express');
var router = express.Router();

const { BatidoController } = require('../controllers/index');

router.get('/', BatidoController.getBatido);
router.post('', BatidoController.postBatido);

module.exports = router;
