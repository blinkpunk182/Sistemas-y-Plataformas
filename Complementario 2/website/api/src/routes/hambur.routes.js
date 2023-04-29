const { Router } = require('express');

module.exports = function ({ HamburController }) {
    const router = Router();
    router.get('/:hamburId', HamburController.get);
    router.get('', HamburController.getAll);
    router.post('/', HamburController.create);
    router.patch('/:hamburId', HamburController.update);
    router.delete('/:hamburId', HamburController.delete);

    return router;
}
