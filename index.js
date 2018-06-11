
var express = require('express')
var logger = require("morgan")
var bodyParser = require('body-parser')
var server= express()

server.set('view engine', 'ejs')

server.use(express.static('views'))

server.set('views',__dirname+'/views')


server.get('/',function(request,response){
  // response.send('<h1> Brandon The Panda</h1>')
   response.render('home.ejs')
})

server.get('/about-us',function(request,response){
    response.render('about.ejs')
}) 
server.get('/Adventures',function(request,response){
    response.render('Adventures.ejs')
})
 
 server.get('/hottest-games',function(request,response){
    response.render('hottest-games.ejs')
})
var port = 8080

server.listen(port, () => { 
    console.log('Server running on port:'+port)
})