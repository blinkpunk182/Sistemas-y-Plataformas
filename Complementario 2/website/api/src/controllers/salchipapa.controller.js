let _salchipapaService = null;

class SalchipapaController {
    constructor({ SalchipapaService }) {
        _salchipapaService = SalchipapaService;
    }
    // get
    async get(req, res) {
        const { salchipapaId } = req.params;
        const salchipapa = await _salchipapaService.get(salchipapaId);
        return res.send(salchipapa);
    }

    // getAll
    async getAll(req, res) {
        const salchipapas = await _salchipapaService.getAll();
        return res.send(salchipapas);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdSalchipapas = await _salchipapaService.create(body);
        return res.send(createdSalchipapas);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const {salchipapaId } = req.params;
        const updatedSalchipapa = await _salchipapaService.update(salchipapaId, body);
        return res.send(updatedSalchipapa);
    }
    // delete
    async delete(req, res) {
        const { salchipapaId } = req.params;
        const deletedSalchipapa = await _salchipapaService.delete(salchipapaId);
        return res.send(deletedSalchipapa);

    }
}

module.exports = SalchipapaController;