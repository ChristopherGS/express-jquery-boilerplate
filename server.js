var express = require('express')
	, methodOverride = require('method-override')
	, cookieParser = require('cookie-parser')
	, bodyParser = require('body-parser')
	, errorhandler = require('errorhandler')
	
	//__other middleware__
	, config = require('config')
	, path = require( 'path' );
	
	
	
	
var app = express();


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(cookieParser());


app.use( express.static( path.join( __dirname, 'site') ) );

//Routes

app.get('/', function(req, res, next){
	res.send('express working');
});

app.listen(5000, function(){
	console.log('express-jquery-boilerplate listening on port %s', 5000);
});