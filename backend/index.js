if(process.env.NODE_ENV = 'development'){
    require('dotenv').config();
    console.log(process.env.NODE_ENV)
}

const express = require('express');
const req = require('express/lib/request');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

const app = express();

require('./database');//conection with db

app.set('port',3000);

app.use(morgan('dev')); //track each function 

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/updloads'),
    filename(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(multer({storage}).single('image'));

app.use(express.urlencoded({extended:false})); //interpreate form data as a json

app.use(express.json());//interpretate json data

//REST
app.use('/api/books/', require('./routes/books'));

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})