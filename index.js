const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
    //o __dirname serve para "encurtar o nome do diretório" + a rota: html/index.html

});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog");
});

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("Olá "+req.params.nome);
    //o res.send só pode ser usado uma vez na requisição
});


app.listen(8081, function(){
    console.log("Servidor rodando!!!!")
});
