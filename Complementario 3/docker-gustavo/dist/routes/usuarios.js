const express = require("express");
const usuariosController = require("../controllers/usuarios");
const router = express.Router();
router.get("/", usuariosController.obtenerUsuarios);
router.get("/:id", usuariosController.obtenerUsuarioPorId);
router.post("/", usuariosController.crearUsuario);
router.put("/:id", usuariosController.actualizarUsuario);
router.delete("/:id", usuariosController.eliminarUsuario);
module.exports = router;