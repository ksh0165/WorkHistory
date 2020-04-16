<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>radio 값 가져오기</title>
    <script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
  <style>

    /*팝업위로 결재*/
    .box {position: absolute; left: 50%; top:50%; transform: translate(-50%,-50%);
      width: 500px; height: 500px; box-shadow: 0 0 10px rgba(0,0,0,0.5);
      background: #fff; border-radius: 5px; text-align: right; padding: 0px; box-sizing: border-box;
      /* animation: move; animation-duration: 3s;  */  opacity: 0;
    }
 
     /* @keyframes move {
      from {
        bottom: 0px;
      }
      to {
        border-top: 228px;
      }
    } */
    
  </style>
    <script>
        $(function(){
            $('#start').click(function() {
                $('.box').css('opacity','1');
                const box = document.querySelector('.box');
                box.style.animationPlayState = 'running';
                box.style.marginTop = '228px';
            });
        });
    </script>

      <!--팝업 위로-->
      <div class="box">
          <!--내용 입력-->
      </div>
      <input type="button" id="start" value="start"/>
      
</body>
</html>
