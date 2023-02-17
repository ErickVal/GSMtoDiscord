var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/', async function(req, res) {

    console.log(req.body);

    await axios.post(process.env.WEBHOOK,
    req.body
    )

    return res.json({'ok':true});

})

router.get('/', async function(req, res) {
    console.log(req.body);
    return res.json({'ok':true});
});

module.exports = router;