const express = require('express');
//const morgan = require('morgan');
const app = express();

// settings
const PORT = process.env.PORT || 3000

// middlewares
//app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use(require('./routes/index'));
app.use(require('./routes/fb'));

app.get('/deletion', function (req, res) {
	res.sendFile('/index.html',{ root: __dirname})
});

// starting the server
app.listen(PORT, () => {
    console.log('Server on port '+PORT);
});