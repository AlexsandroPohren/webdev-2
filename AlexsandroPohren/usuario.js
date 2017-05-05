'use strict';
//objeto usuario
const usuario = {
username: 'AlexsandroPohren',
password: '123',
email: 'alexsandroantonio65@outlook.com',
age:19

};
/*
ou

var usuario = {
username: 'AlexsandroPohren',
password: '12345645',
email: 'alexsandroantonio65@outlook.com',
age:19

};*/

function Usuario(){
  console.log("executa a função usuario");

var funcaoPrivada = function(){
  console.log("aqui é privada");
}

  this.id = 1;
  this.autenticarUsuario = function(user){
    //funcaoPrivada();
    console.log("Autenticar usuario");

  //if(user.username === usuario.username && user.password === usuario.password){
  // return true;
  // }else{
  //  return false;
  //}
    return (
      user.username === usuario.username &&
      user.password === usuario.password)
  }

  this.criarUsuario = function(user){
    console.log("criar usuario");
  }
  this.obterUsuario = function(){
    console.log("obter usuario");
  }
}

//var usu = new Usuario();
//console.log(usu);
//usu.autenticarUsuario("um nome de usuario");

module.exports = Usuario;
