const assert = require("assert");
const request = require("supertest");
const app = require("../src/server");
const expect = require("chai").expect;

describe("Pruebas del servicio REST de Usuarios", function () {
  it("debería crear un usuario", async function () {
    const usuario = { nombre: "Juan", apellido: "Perez", edad: 30 };
    const response = await request(app).post("/usuarios").send(usuario);
    assert.equal(response.status, 200);
    assert.equal(response.body.nombre, usuario.nombre);
    assert.equal(response.body.apellido, usuario.apellido);
    assert.equal(response.body.edad, usuario.edad);
  });

  it("debería obtener un usuario", async function () {
    // Primero se crea un usuario
    const usuario = { nombre: "Juan", apellido: "Perez", edad: 30 };
    const user = await request(app).post("/usuarios").send(usuario);

    // Luego se obtiene el usuario por su ID
    const response = await request(app).get(`/usuarios/${user.body._id}`);

    // Se comprueba que la respuesta tenga el status code 200 y que los datos obtenidos sean correctos
    expect(response.status).to.equal(200);
    expect(response.body.nombre).to.equal(usuario.nombre);
    expect(response.body.apellido).to.equal(usuario.apellido);
    expect(response.body.edad).to.equal(usuario.edad);
  });

  it("Debería devolver un código de estado 200 y una lista de usuarios", async () => {
    const res = await request(app).get("/usuarios");
    expect(res.statusCode).to.equal(200);
  });

  it("debería eliminar un usuario", async function () {
    // Primero se crea un usuario
    const usuario = { nombre: "Juan", apellido: "Perez", edad: 30 };
    const user = await request(app).post("/usuarios").send(usuario);

    // Luego se obtiene el usuario por su ID
    const response = await request(app).delete(`/usuarios/${user.body._id}`);

    // Se comprueba que la respuesta tenga el status code 200 y que los datos obtenidos sean correctos
    expect(response.status).to.equal(204);
  });
});
