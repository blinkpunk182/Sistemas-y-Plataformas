let _hamburService = null;

class HamburController {
    constructor({ HamburService }) {
        _hamburService = HamburService;
    }
    // get
    async get(req, res) {
        const { hamburId } = req.params;
        const hambur = await _hamburService.get(hamburId);
        return res.send(hambur);
    }

    // getAll
    async getAll(req, res) {
        const hambur = await _hamburService.getAll();
        return res.send(hambur);
    }

    // create
    async create(req, res) {
        const { body } = req;
        const createdHambur = await _hamburService.create(body);
        return res.send(createdHambur);
    }

    // update
    async update(req, res) {
        const { body } = req;
        const { hamburId } = req.params;
        const updatedHambur = await _hamburService.update(hamburId, body);
        return res.send(updatedHambur);
    }

    // delete
    async delete(req, res) {
        const { hamburId } = req.params;
        const deletedHambur = await _hamburService.delete(hamburId);
        return res.send(deletedHambur);

    }
}

module.exports = HamburController;