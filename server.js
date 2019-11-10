//setup the express server
var express = require('express');
require('dotenv').config();
var app = express();
app.use(express.json())
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

//setup routes for the index.html file
app.get('/', function(req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});

//Setup route for static files
app.use(express.static(__dirname + "/" + 'public'));
const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
//create an instance of the language translator
const languageTranslator = new LanguageTranslatorV3({
    version: '',
    authenticator: new IamAuthenticator({
      apikey: 'l82cyrh63ZqLgCEnuCs6NH9dv-_MFhJupjNTkNCwKTdk',
    }),
    url: 'https://gateway-lon.watsonplatform.net/language-translator/api',
  });  
