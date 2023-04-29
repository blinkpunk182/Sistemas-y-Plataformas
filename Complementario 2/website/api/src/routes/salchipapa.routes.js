const { Router } = require('express');

module.exports = function ({ SalchipapaController }) {
    const router = Router();
    router.get('/:Id', SalchipapaController.get);
    router.get('', SalchipapaController.getAll);
    router.post('/', SalchipapaController.create);
    router.patch('/:Id', SalchipapaController.update);
    router.delete('/:Id', SalchipapaController.delete);

    return router;
}
