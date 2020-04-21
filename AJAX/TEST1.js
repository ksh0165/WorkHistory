// api서버 : nodejs http://localhost:3000/home
// 요청 웹서버:  http://localhost/html/ajax.html

//1. ajax.html

<!--//ajax 데이터 가져오기-->
<!-- http://localhost:3000/home -> nodejs json 데이터 보냄-->
<!-- http://localhost/html/ajax.html 클라이언트 서버-->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>ajax test -> api서버는 nodejs</title>
<script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
<script>
    $(document).ready(function() {
            $("#btn").click(function() {
                var result = document.getElementById('ajaxValue');
                $.ajax({
                    url : "http://localhost:3000/home", // test.jsp 에서 받아옴
                    dataType :"json", // 데이터타입을 json 으로 받아옴
                    success : function(data) {
                        //console.log(result.innerHTML = data);
                        //var jObj = JSON.parse(data);
                        //result.innerHTML = jObj;
                        result.innerHTML = data;
                    },
                    error : function(e) {
                        console.log(e.responseText);
                    }
                });
            });
    });
</script>

<!-- index.html  -->

<input type="button" id="btn" value="click">
<div id="ajaxValue"></div>
</body>
</html>

------------------------------------------------------------------------------

// 2. api server => index.js

var http = require('http');
var express = require('express');
var app = express();//express object
const cors = require('cors');

app.use(cors());

app.get('/home', cors(),function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.json(JSON.stringify(study));
});

var server = http.createServer(app);

server.listen(3000,function(){
console.log('http://localhost:%d',3000);
});

let study =	{"ajax" : "ajaxValue","react":"reactValue"}
