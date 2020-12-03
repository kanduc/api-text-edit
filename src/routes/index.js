const { Router } = require('express');

const router = new Router();

router.get('/holaroute', (req, res) => {
    const data = {
        name: 'Prueba API',
        website: 'pruebaapi.com'
    };
    res.json(data);
});  

module.exports = router;