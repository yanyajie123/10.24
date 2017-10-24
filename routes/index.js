var express = require('express');
var router = express.Router();
var fs = require('fs');
var x=0;
var y=0;
/* GET home page. */
router.get('/', function(req, res, next) {
	x++;
	fs.readFile('public/yyj.txt','utf-8',function(err,data){
		console.log(data)
		fs.writeFile('public/yyj.txt','当前页面访问次数：'+x,function(err){

		})
		res.render('index', { title: data});
	})

});

router.get('/personal', function(req, res, next) {
	y++;
	fs.readFile('public/yyj2.txt','utf-8',function(err,data){
		console.log(data)
		fs.writeFile('public/yyj2.txt','yyj个人页面访问次数:'+y,function(err){

		})
		res.render('personal', { title: data});

	})

});

module.exports = router;
