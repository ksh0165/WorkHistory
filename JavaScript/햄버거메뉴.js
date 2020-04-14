<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>햄버거 버튼</title> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>  

</head>
<body>
  <style>
    /*말줄임*/

    /*팝업위로*/

    /*이용약관 폼*/

    /*햄버거 메뉴*/
    .siteMapBtn p {
      position: absolute;
      top: 10px;
      right: 40px;
      z-index: 1;
      display: block;
      font-size:3em;
      color: #444;
      cursor: pointer;
      transform: translate3d(0, 0, 0);
      transition: transform .4s;
    }

    #leftmenuArea{height:900px; width:235px; background-color:#3e3d3d; font-family:'Malgun Gothic',Dotum,AppleGothic,sans-serif;}
    
  </style>
    <script>        
        $(document).ready(function(){
            
            /*더보기v*/
            
            /*팝업 위로*/

            /*이용약관 폼*/

            /*왼쪽 햄버거 메뉴*/
            $("#leftmenuArea").hide();
            $(".siteMapBtn").click(function(){
             $(".siteMapBtn p").toggle();
             $('#leftmenuArea').animate({width:'toggle'});
            });
        })
    </script>
    <script>

</script>
<!-- tab 화면 전환-->
    <div class="container">

      <!--//더보기V-->

      <!--팝업 위로-->

      <!-- 이용약관 폼-->

      <!--왼쪽 햄버거 메뉴-->
      <div class="siteMapBtn">
        <p style="margin:0;">&equiv;열림</p>
        <p style="display:none;margin:0;">&equiv;닫힘</p>
      </div>
      <div id="leftmenuArea"></div>

    </div>
</body>
</html>
