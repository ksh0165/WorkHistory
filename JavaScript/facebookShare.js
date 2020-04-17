<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>facebook공유</title>
    <meta property="og:title" content="페이스북 공유하기"/>
    <meta property="og:url" content="http://172.16.20.95/html/sns.html"/>
    <meta property="og:description" content="페이스북 공유 한번 해보기"/>
    <meta property="og:image" content="http://172.16.20.95/image/facebook.jpg"
    <script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
  <style>

  </style>
    <script>
    /*facebook 공유하기*/
    //"https://www.your-domain.com/your-page.html"
    //"website"
    //"Your Website Title"
    //"Your description"
    //"https://www.your-domain.com/path/image.jpg"
    
    function facebookShare(url){
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
    }
    </script>

      <!--facebook 공유하기-->
      <a href="javascript:facebookShare('http://172.16.20.95/html/sns.html')">페이스북공유</a>
</body>
</html>
