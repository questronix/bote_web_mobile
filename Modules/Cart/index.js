const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  if(req.headers["x-access-token"]){
    ajax.setOptions({
      url: `${process.env.CORE_URL}/users/${req.body.username}`,
      headers: req.headers
    }).get()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
  }else{
    if (req.baseUrl.indexOf('mobile') > -1) res.render('mobile/cart');
    else res.render('web/cart');
  }
});

module.exports = router;
