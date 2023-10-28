const express = require('express');
const app = express();
const port= 3000;


app.use(express.static(__dirname+'/public/'));

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname +'/public/html/index.html');
  });

  app.get('/cadastro',(req,res)=>{
    res.sendFile(__dirname +'/public/html/cadastro.html');
  })
  app.get('/login',(req,res)=>{
    res.sendFile(__dirname +'/public/html/login.html');
  })

  app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
  });