var express = require('express'),
bodyParser = require('body-parser'),
server = express();

server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public/css'));


server.get('/', (req, res)=>{

    res.render('Componentes/Instituciones')

});

server.listen(process.env.PORT || 3000, process.env.IP, ()=>{
    console.log('Server running ... ' );
});