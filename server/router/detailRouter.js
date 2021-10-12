var express = require('express');
var router = express.Router();
// getDetailByIid
router.get('/detail', (req,res,next) => {
  console.log('获取商品详情：',req.query);
  const iid = req.query.iid

  res.send(require('../static/json/detail_data.json'))
}
)

module.exports = router;
