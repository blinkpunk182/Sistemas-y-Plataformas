const BaseService = require('./base.service')
let _hamburRepository = null;

class HamburService extends BaseService {
    constructor({ HamburRepository }) {
        super(HamburRepository);
        _hamburRepository = HamburRepository;
    }
    async getHamburByHamburName(hamburname) {
        return await _hamburRepository.getHamburByHamburName(hamburname);
    }
}

module.exports = HamburService;