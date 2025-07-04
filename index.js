const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const {engine} = require("express-handlebars");
const bodyParser = require("body-parser"); 
const Sequelize = require('sequelize');


// Config
    //template engine
    app.engine("handlebars", engine({defaultLayout: "main"}));
    app.set("view engine", "handlebars");

    //Body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //conexao com o banco de dados MySQL
    const sequelize = new Sequelize("estudo", "root", "root123", {
    host: "localhost",
    dialect: "mysql"

});


//rotas

    app.get("/cad", function(req, res){
        res.render("formulario")
    });

    app.post("/add", function(req, res){
        req.body.conteudo
        res.send("Texto: "+ req.body.titulo + " Conteudo: " + req.body.conteudo)
    });

app.listen(8081, function(){
    console.log("Servidor rodando!!!!")
});

