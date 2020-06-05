const express = require("express")
const nunjucks = require("nunjucks")
const routes = require('./routes')
const methodOverride = require('method-override')

const server = express()

server.use(express.urlencoded({ extended: true })) //faz o req.body funcionar
server.use(express.static("puplic"))
server.use(methodOverride('_method'))
server.use(routes) // use é usado como middleware, que é algo que ficar entre o ponto A e B

//configurando o nunjucks
server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false, // permite o uso do html com o nunjucks
  noCache: true // pede para não guardar o cache
})



server.listen(5000, function(){
  console.log("server is running")
})
