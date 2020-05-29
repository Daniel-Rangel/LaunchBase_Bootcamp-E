const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const videos = require("./data")

server.use(express.static("puplic"))

//configurando o nunjucks
server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false, // permite o uso do html com o nunjucks
  noCache: true // pede para não guardar o cache
})

server.get("/", function(req, res){

  const sobre = {
    avatar_id : 'https://avatars1.githubusercontent.com/u/42664615?s=460&u=7dbc97652ce8d1160107234d4ec09e50ff158d4e&v=4',
    nome : 'Daniel Rangel',
    titulo : 'Aluno - Rocketseat',
    texto : 'Programador full-stack. Eterno estudande em desenvolvimento WEB, sempre a disposição para novos desafios com a <a href="#">Rocketseat</a>',
    links : [
      {nome : 'Github', url : '#'},
      {nome : 'Twitter', url : '#'},
      {nome : 'Linkedin', url : '#'}
    ]
  }

  return res.render("about" , {sobre} )
})

server.get("/portifolio", function(req, res){
  return res.render("portifolio", { cursos : videos })
})
server.get("/video", function(req, res){
  const id = req.query.id // tudo que for colocar nesta requisilçao ira aparecer (video?id=qualquer)
  
  const video = videos.find(function(video){
    if(video.id == id ){
      return true
    }
  })

  if(!video){
    return res.send("video não encontrado")
  }

  return res.render("video", { curso : video})
})

server.listen(5000, function(){
  console.log("server is running")
})
