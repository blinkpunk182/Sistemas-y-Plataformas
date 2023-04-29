const BaseService = require('./base.service')
let _salchipapaRepository = null;

class SalchipapaService extends BaseService {
    constructor({ SalchipapaRepository }) {
        super(SalchipapaRepository);
        _salchipapaRepository = SalchipapaRepository;
    }
    async getSalchipapaBySalchipapaName(salchipapaname) {
        return await _salchipapaRepository.getSalchipapaBySalchipapaName(salchipapaname);
    }
}

module.exports = SalchipapaService;