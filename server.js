const express = require('express');
const axios = require('axios');
const {Agent} = require('https');
const app = express();
app.get('/', (req, res) => res.send(`Hello world here and now to test this http server running on raspberry pi port 4000<br/>click <a href="/page"> here </a> for page<br/>
click <a href="/about">here</a> for creators<br>
<a href="/sms">sms</a>`));
app.get('/page', (req, res) => res.send('this is another page just to test the http server running on raspberry pi port 4000 <br/> click <a href="/"> here </a> for home'));
app.get('/about', (req, res) => res.send('iman moghadari(9740503) and yegane mohammadi(96837018) are the creators of this server <br/> click <a href="/"> here </a> for home'));
app.get('/sms', (req, res) => res.send(`this is the send sms page <br>
<form action="/send" action="#" method="POST" >
<input type="submit" value="Submit">
    </form>
`));
app.post('/send', async (req, res) => {
const axi = new axios.Axios({baseURL:'https://services.avapardaz.org/v1/sms/send',    httpsAgent: new Agent({
    rejectUnauthorized: false,
  }),
  responseType: 'json',
  transformResponse: (res)=> {
    return JSON.parse(res);
  },
  transformRequest: (req)=> {
    return JSON.stringify(req);
},
headers:{
['Content-Type']: 'application/json',
['token']:"1715cb3b85a36f8a55b8ddbb54370ecfe1bedb7e877514b3abd2cb2c51d34bca6eabc7195aff9d6cf9932f295489559f135665b0316f4c259d7968f620ca6414dacd5a92537e13eaa0870f6ac8cc25ce41db22a6e99ae52de19e1ca4268b38d93cc2ec33b36818c068f3c94215e518aefab9df71e2d568168ef11dc79d5e6a24"
},})
    const d = await axi.post('',{
            "receptor": [
              "09360074042"
            ],
            "message": "this is a message to test kaveNegar",
    });
    res.send(d.data);
});
const port = process.env.PORT || 4000;

app.listen(port, () => console.log("App listening at port:", port))
