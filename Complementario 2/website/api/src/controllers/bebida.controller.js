let _bebidaService = null;

class BebidasController {
    constructor ({ BebidaService}){
        _bebidaService = BebidaService;

    }

    async get (req, res){
        const { bebidaId} = req.params;
        const bebida = await _bebidaService.get(bebidaId);
        return res.send(bebida);
    }
    async getAll(req, res) {
        const bebida = await _bebidaService.getAll();
        return res.send(bebida);
    }
    async create(req, res) {
        const { body } = req;
        const createdBebida = await _bebidaService.create(body);
        return res.send(createdBebida);
    }
    // METODO DELETE
    async delete(req, res) {
        const { bebidaId } = req.params;
        const deletedBebida = await _bebidaService.delete(bebidaId);
        return res.send(deletedBebida);

}
    //  METODO UPDATE
    async update(req, res) {
        const { body } = req;
        const { bebidasId } = req.params;
        const updatedBebidas = await _bebidaService.update(bebidasId, body);
        return res.send(updatedBebidas);
    }

  
}

module.exports = BebidasController;


