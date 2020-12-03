const { Router } = require('express');

const router = new Router();

router.get('/test', (req, res) => {
    const data = {
        name: 'Prueba API',
        website: 'pruebaapi.com'
    };
    res.json(data);
});  

module.exports = router;