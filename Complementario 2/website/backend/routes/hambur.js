var express = require('express');
var router = express.Router();
const HamburController = require('../controllers/hambur');

router.get('/', HamburController.getHambur);
router.post('', HamburController.postHambur);



module.exports = router;
