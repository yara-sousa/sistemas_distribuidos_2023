const express = require("express");
const app = express();
const usuarios = require("./dados.json");

app.get("/users", function (req, res)  {
  res.status(200).json(usuarios);
});

app.get("/users/:id", function(req, res) {
    const {id} = req.params; 
    const usuario = usuarios.find(user => user.id == id)
    if(typeof usuario == "undefined"){
        res.status(404).json({}); 
    } else {
        res.status(200).json(usuario);
    }
});

app.post("/users", (req, res) => {});
app.put("/users", (req, res) => {});
app.delete("/users", (req, res) => {});



app.listen(3000, () => {
  console.log("o servidor está no ar");
});
