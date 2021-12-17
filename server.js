const express = require('express');
const mongoose =  require('mongoose');

// DB config
const mongodb = require('./config/keys').mongoURI;

// mongdb connect
// mongoose.connect(mongodb)
// .then(()=>console.log("mongdb Connected"))
// .catch((err)=>console.log("Err connecting mongodb:",err))

//asdasd
const app = express();
app.get('/',(req,res)=>res.send(`Hello world here and now to test this http server running on raspberry pi port 4000<br/>click <a href="/page"> here </a> for page<br/>
click <a href="/about">here</a> for creators`));
app.get('/page',(req,res)=>res.send('this is another page just to test the http server running on raspberry pi port 4000 <br/> click <a href="/"> here </a> for home'));
app.get('/about',(req,res)=>res.send('iman moghadari(9740503) and yegane mohammadi() are the creators of this server <br/> click <a href="/"> here </a> for home'));

const port = process.env.PORT || 4000;

app.listen(port,()=>console.log("App listening at port:",port))
