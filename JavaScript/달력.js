<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>radio 값 가져오기</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" />  
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>  
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
  <script src="../js/require.js"></script>
  <script src="../js/bootstrap.js"></script>
  <script src="../js/tableExport.js"></script>
  <script src="../js/FileSaver.min.js"></script>
  <script src="../js/jquery.table2excel.js"></script>
  </head>
<body>
    <script>        
        $(document).ready(function(){
            $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
            })
            $("#datepicker1").datepicker({
              changeMonth: true, 
              dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
              dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
              monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
              monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
              showButtonPanel: true, 
              closeText: '닫기', 
              dateFormat: "yymmdd"
            });
            $("#datepicker2").datepicker({
              changeMonth: true, 
              dayNames: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
              dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], 
              monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
              monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
              showButtonPanel: true, 
              closeText: '닫기', 
              dateFormat: "yymmdd"
            });
        })
    </script>
    <script>
      // csv excel download
      function ExcelDown(){
          $("#table1").table2excel({
              name: "Excel table",
              filename: "excel table",
              fileext: ".xls",
              exclude_img: true,
              exclude_links: true,
              exclude_inputs: true
          });
      }

      function setThumbnail(event) { var reader = new FileReader(); reader.onload = function(event) { var img = document.createElement("img"); img.setAttribute("src", event.target.result); document.querySelector("div#image_container").appendChild(img); }; reader.readAsDataURL(event.target.files[0]); }
</script>
<div class="container">

	<ul class="tabs">
		<li class="tab-link current" data-tab="tab-1">메뉴_하나</li>
		<li class="tab-link" data-tab="tab-2">메뉴_둘</li>
		<li class="tab-link" data-tab="tab-3">메뉴_셋</li>
	</ul>

	<div id="tab-1" class="tab-content current">
---- ---- -------- ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ----
	</div>
	<div id="tab-2" class="tab-content">
---- ---- ★------ ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ★-- ---- ---- ------★ ---- ---- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- ---- ★------ ---- ---- ---- ----
	</div>
	<div id="tab-3" class="tab-content">
---- ★-- -------- ---- ---- ---- -★- ---- ---- -------- ---- -★- ---- ---- ---- ---- -------- ---- ---- ---- ---- ---- --★ -------- ★-- ---- ---- ---- ---- ---- -------- ---- ---- --★ ---- ---- ---- -------- ---- ---- ---- --★
	</div>

    <div id="ex1" class="modal">
        <p>안녕하세요. 모달창안의 내용부분입니다.</p>
        <a href="#" rel="modal:close">닫기</a>
      </div>
       
      <p><a href="#ex1" rel="modal:open">모달창띄우기</a></p>

      <!-- calrender-->
      <p>Date: <input type="text" id="datepicker1">&nbsp<input type="text" id="datepicker2"></p>
      
      <div class="demo-description">
      <p>Localize the datepicker calendar language and format (English / Western formatting is the default).  The datepicker includes built-in support for languages that read right-to-left, such as Arabic and Hebrew.</p>
      </div>

      <!-- excel download-->
      <input type="button" value="엑셀다운로드" onclick="ExcelDown();">
      <div class="revenueInfo">
        <table id="table1">
          <thead>
            <tr id="inflowTable1">
              <th>PC/MO</th>
              <th>유입경로</th>
              <th>페이지</th>
              <th>페이지 상세</th>
              <th>접속 건수</th>
            </tr>
          </thead>
          <tbody id="inflowTable2">
            <tr class="">
              <td class="al_c">PC</td>
              <td class="al_c">팜스트리트</td>
              <td class="al_c">공급업체</td>
              <td class="">남동산업</td>
              <td class="al_c">1</td>
            </tr>
            <tr class="">
              <td class="al_c">PC</td>
              <td class="al_c">팜스트리트</td>
              <td class="al_c">메인페이지</td>
              <td class=""></td>
              <td class="al_c">4</td>
            </tr>
            <tr class="">
              <td class="al_c">Mobile</td>
              <td class="al_c">팜스트리트</td>
              <td class="al_c">시즌세일</td>
              <td class="">5Why 구강용품</td>
              <td class="al_c">1</td>
            </tr>
            <tr class="">
              <td class="al_c">Mobile</td>
              <td class="al_c">팜스트리트</td>
              <td class="al_c">메인페이지</td>
              <td class=""></td>
              <td class="al_c">2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //excel download-->
      <!-- img upload-->
      <input type="file" id="image" accept="image/*" onchange="setThumbnail(event);"/> <div id="image_container"></div>
      <!-- // img upload-->
    </div>
</body>
</html>
