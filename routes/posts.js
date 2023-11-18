var express = require('express');
var router = express.Router();

// 게시판 페이지
/* GET home page. */
router.get('/', function(req, res, next) {
  // render: 페이지 출력
  // res.render('index', { title: '익스프레스', name: '홍길동' });
  
  // send: 전송
  res.render('index', { title: '게시판', pageName: 'posts/list.ejs' });
});

//글쓰기
router.get('/insert', function(req, res){
  res.render('index', {title:'글쓰기', pageName:'posts/insert.ejs'});
})

//글쓰기
router.get('/read', function(req, res){
  const id = req.query.id;
  res.render('index', {title:'게시글 정보', pageName:'posts/read.ejs', id });
})

module.exports = router;
