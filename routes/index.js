var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // render: 페이지 출력
  // res.render('index', { title: '익스프레스', name: '홍길동' });
  
  // send: 전송
  res.render('index', { title: '홈페이지', pageName: 'home.ejs'});
});

module.exports = router;
