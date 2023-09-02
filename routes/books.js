var express = require('express');
var router = express.Router();

// 도서 검색 페이지
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: '익스프레스', name: '홍길동' });
});

module.exports = router;
