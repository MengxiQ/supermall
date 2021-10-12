//categoryRouter
var express = require('express');
var router = express.Router();
router.get('/keys', (req,res,next) => {
  console.log('获取分类信息：',req.query);
  const key = req.query.key
    if(key === "title"){
        res.send(require('../static/json/categoryKey.json'))
    }else{
        res.send(require('../static/json/category.json'))
    }
  

}
)

module.exports = router;
