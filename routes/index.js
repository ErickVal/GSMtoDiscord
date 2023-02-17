var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/', async function(req, res) {

    console.log(req.body);

    await axios.post('https://discord.com/api/webhooks/1076158509688836217/cZicRjFKaeBdps-NfiuW_BgjzKq-_qqXbVXiHDQZc4wOBqnAmEUv5UHcs0hZkgPXoPKT',
    req.body
    )

    return res.json({'ok':true});

})

router.get('/', async function(req, res) {
    console.log(req.body);
    return res.json({'ok':true});
});

module.exports = router;