const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/index');
const cors = require('cors');

const morgan = require('morgan')
// Settings
app.set('port', process.env.PORT || 3001);
app.set('view',path.join(__dirname,'views' ));
app.set('json spaces', 2)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors())
// middlewares que valida credenciales de author
app.use((req,res,next)=>{
  const author =JSON.parse(req.headers.author);

  if(author.name ==="Daniel" && author.lastname ==="Bernal"){
    next()
  }else{
    res.status(401).send('no autorizado');
  }
  
})


//routes

app.use('/api/',routes);

//static files
app.use(express.static(path.join(__dirname,'public')));
//start server
app.listen(app.get('port'), () =>{
  console.log('Server on port',app.get('port') );
})

