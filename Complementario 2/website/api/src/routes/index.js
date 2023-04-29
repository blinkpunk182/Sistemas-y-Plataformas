// core
const express = require('express');

// terceros
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')

// propios
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

// nivel 0
module.exports = function ({ SalchipapaRoutes, BebidaRoutes,HamburRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use('/salchipapa', SalchipapaRoutes);
    apiRoutes.use('/bebida', BebidaRoutes);
    apiRoutes.use('/hambur' , HamburRoutes);
    apiRoutes.use('/public', express.static('public'));
    


    router.use('/v1/api', apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}
