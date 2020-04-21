<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>radio 값 가져오기</title>
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
</head>
  <body>
    <div style="width:200px;">
        <input type="radio" name="radio" id="r1" value="1" checked><label for="r1">유튜브</label>
        <input style="width:200px;" type="text" id="yutTxt" name="yutTxt">
        <input type="radio" name="radio" id="r2" value="0"><label for="r2">인스타그램</label>
        <input  style="width:200px;" type="text" id="insTxt" name="insTxt">
    </div>

    <script type="text/javascript">
      $(document).ready(function () {
        var yutubeVal;
        var insVal;
          // 기본 이벤트 발생
        $("input:text[name=yutTxt]").attr("disabled",false);
        $("input:text[name=insTxt]").attr("disabled",true);
            // 라디오버튼 클릭시 이벤트 발생
        $("input:radio[name=radio]").click(function(){
        
        //var check = $('input:checkbox[id="rd2"]').is(':checked');
        //alert(check);
        if($("input[name=radio]:checked").val() == "1"){
            $("input:text[name=yutTxt]").attr("disabled",false);
            $("input:text[name=insTxt]").attr("disabled",true);
            // radio 버튼의 value 값이 1이라면 활성화
            alert($("input[id=yutTxt]").val());
        }else if($("input[name=radio]:checked").val() == "0"){
            $("input:text[name=yutTxt]").attr("disabled",true);
            $("input:text[name=insTxt]").attr("disabled",false);
            // radio 버튼의 value 값이 0이라면 비활성화
            alert($("input[id=insTxt]").val());
        }
        });
      });
    </script>
  </body>
</html>
