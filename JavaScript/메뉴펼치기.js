<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>menu펼치기</title>
    <script src="//code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
  <style>

    /*메뉴펼치기*/
   
  </style>
    <script>
        /*메뉴펼치기*/

    </script>

      <!--메뉴펼치기-->

      <div>
        <input value="더보기" onclick="if(this.parentNode.getElementsByTagName('div')[0].style.display != '')
        {
          this.parentNode.getElementsByTagName('div')[0].style.display = '';
          this.value = '숨기기';
        }else{
          this.parentNode.getElementsByTagName('div')[0].style.display = 'none';
          this.value = '더보기';
        }" type="button" /><br>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span><br> 
        <div style="display: none;">
            <div> 
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
            </div>
      </div>
</body>
</html>
