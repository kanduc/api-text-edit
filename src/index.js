const express = require('express');
//const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
//app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

// routes
//app.use(require('./routes/index'));
//app.use('/api/fb', require('./routes/fb'));

app.get('/test/', function (req, res {
	res.send("Hola")
}));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ${app.get('port')}');
});