const BaseRepository = require('./base.repository');
let _hambur= null;

class HamburRepository extends BaseRepository {
    constructor({Hambur}){
        super(Hambur);
        _hambur = Hambur
    }
    async getHamburByHamburName(hamburname){
        return await _hambur.findOne({hamburname});
    }
}

module.exports = HamburRepository;