'use strict'

const express = require('express');
const Usuario = require('./usuario');

const app = express();

app.get('/', function (req, res) {
  console.log("Alguém chamou /");
  res.send("jagfjagfj/");
});

app.get('/usuario',function (req, res) {
  console.log("Alguém chamou /usuario");
  const usuario ={
    username: "name",
    password: "senha"
  }

  res.send(usuario);
});
app.listen(3000, function () {
  console.log("Exemplo app listening on port 3000!");
});












var usu = new Usuario();
 console.log(usu);

var user ={
  username:"AlexsandroPohren",
  password: "123"
};
var usuarioValido = usu.autenticarUsuario(user);
console.log(usuarioValido);
if(usuarioValido){
  console.log("Login efetuado com sucesso !!!");
}else{
  console.log("Nome de Usuário ou Senha incorreto !!!");
}
