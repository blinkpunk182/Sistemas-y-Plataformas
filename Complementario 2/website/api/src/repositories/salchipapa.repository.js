const BaseRepository = require('./base.repository');
let _salchipapa= null;

class SalchipapaRepository extends BaseRepository {
    constructor({Salchipapa}){
        super(Salchipapa);
        _salchipapa = Salchipapa
    }
    async getSalchipapaBySalchipapaName(salchipapaname){
        return await _salchipapa.findOne({salchipapaname});
    }
}

module.exports = SalchipapaRepository;