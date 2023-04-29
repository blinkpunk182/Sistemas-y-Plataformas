const { createContainer, asClass, asValue, asFunction } = require('awilix');

const config = require('../config');
const app = require('./index');

// importar servicios HamburRouter
const { SalchipapaService, BebidaService, HamburService } = require('../services');

// importar controladores
const { SalchipapaController, BebidaController, HamburController } = require('../controllers');

// importar rutas
const Routes = require('../routes')
const { SalchipapaRoutes, BebidaRoutes, HamburRoutes } = require('../routes/index.routes');

// models
const { SalchipapaModel, BebidaModel, HamburModel} = require('../models');

// repositorios
const { SalchipapaRepository, BebidaRepository, HamburRepository} = require('../repositories');



const container = createContainer();
container
    .register(
        {
            app: asClass(app),
            router: asFunction(Routes).singleton(),
            config: asValue(config)
        }
    )
    .register(
        {
            SalchipapaService: asClass(SalchipapaService).singleton(),
            BebidaService: asClass(BebidaService).singleton(),
            HamburService: asClass(HamburService).singleton()
          
        }
    ).register(
        {
            SalchipapaController: asClass(SalchipapaController.bind(SalchipapaController)).singleton(),
            BebidaController: asClass(BebidaController.bind(BebidaController)).singleton(),
            HamburController: asClass(HamburController.bind(HamburController)).singleton()

        }
    ).register(
        {
            SalchipapaRoutes: asFunction(SalchipapaRoutes).singleton(),
            BebidaRoutes: asFunction(BebidaRoutes).singleton(),
            HamburRoutes: asFunction(HamburRoutes).singleton()

        }
    ).register(
        {
            Salchipapa: asValue(SalchipapaModel),
            Bebida: asValue(BebidaModel),
            Hambur: asValue(HamburModel)
        }
    ).register(
        {
            SalchipapaRepository: asClass(SalchipapaRepository).singleton(),
            BebidaRepository: asClass(BebidaRepository).singleton(),
            HamburRepository: asClass(HamburRepository).singleton()

        }
    )


module.exports = container;