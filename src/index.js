const express = require('express');
//const morgan = require('morgan');
const app = express();

// settings
const PORT = process.env.PORT || 3000

// middlewares
//app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
//app.use(express.json());

// routes
//app.use(require('./routes/index'));
//app.use('/api/fb', require('./routes/fb'));

app.get('/hola/', function (req, res) {
	res.send("Hola")
});

// starting the server
app.listen(PORT, () => {
    console.log('Server on port '+PORT);
});