const express = require("express");
const app = express();
const usuarios = require("./usuarios.json");
const clientes = require("./clientes.json");

app.use(express.json());

app.get("/users", (req, res) => {
  res.status(200).json(usuarios);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const usuario = usuarios.find((user) => user.id == id);
  if (typeof usuario == "undefined") {
    res.status(404).json({});
  } else {
    res.status(200).json(usuario);
  }
});

app.post("/users", (req, res) => {
  const { id, nome } = req.body;
  usuarios.push({ id: id, nome: nome });
  res.status(200).json();
});

app.put("/users", (req, res) => {
  const { id, nome } = req.body;
  const usuario = usuarios.find((user) => user.id == id);
  if (!usuario) {
    res.status(404).json({ msg: "registro não encontrado" });
  } else {
    usuario.nome = nome;
    res.status(200).json({ msg: "usuário atualizado" });
  }
});

app.delete("/users/:id", (req, res) => {
  const {id} = req.params;
  const usuario = usuarios.find( user => user.id == id)
  if (!usuario) {
    res.status(404).json({ msg: "registro não encontrado" });
  } else {
    usuarios.splice(0, 1, id);
    res.status(200).json({ msg: "usuário excluido" });
  }
});

app.get("/users/filtro/:id", (req, res) => {
  const {id} = req.params;
  const usuario = usuarios.filter( user => user.id != id );
  console.log(usuario);
  console.log("---------------");
  console.log(usuarios);

});

app.listen(3000, () => {
  console.log("Yara está on-line");
});

/* CRUD CLIENTE */
app.get("/client", (req, res) => {
  res.status(200).json(cliente);
});

app.get("/client/:id/:idPedido", (req, res) => {
  const { id } = req.params;
  const cliente = clientes.find((client) => client.id == id);
  if (typeof cliente == "undefined") {
    res.status(404).json({});
  } else {
    res.status(200).json(cliente);
  }
});

app.post("/client", (req, res) => {
  const { id, nome, idPedido } = req.body;
  clientes.push({ id: id, nome: nome, idPedido: idPedido });
  res.status(200).json();
});

app.put("/client/:idPedido", (req, res) => {
  const { id, nome, idPedido } = req.body;
  const cliente = clientes.find((client) => client.id == id);
  if (!cliente) {
    res.status(404).json({ msg: "registro não encontrado" });
  } else {
    cliente.idPedido = idPedido;
    res.status(200).json({ msg: "usuário atualizado" });
  }
});

app.delete("/client/:id/:idPedido", (req, res) => {
  const {id, idPedido} = req.params;
  const cliente = clientes.find( client => client.id == id)
  if (!cliente) {
    res.status(404).json({ msg: "registro não encontrado" });
  } else {
    clientes.splice(0, 1,  id, idPedido);
    res.status(200).json({ msg: "usuário excluido" });
  }
});

app.get("/client/filtro/:id", (req, res) => {
  const {id, idPedido} = req.params;
  const cliente = clientes.filter( client => client.id != id );
  console.log(cliente);
  console.log("---------------");
  console.log(clientes);

});
