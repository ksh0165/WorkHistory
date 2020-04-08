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
  </head>
<body>
  <style>
    table {
      width: 100%;
    }
    table, th, td {
        border: 1px solid;
    }
  </style>
    <script>        
        $(document).ready(function(){
            $('ul.tabs li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#"+tab_id).addClass('current');
            })
            $("#datepicker").datepicker({
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
      function fnExcelReport(id, title) {
      var tab_text = '<html xmlns:x="urn:schemas-microsoft-com:office:excel">';
      tab_text = tab_text + '<head><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
      tab_text = tab_text + '<xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>'
      tab_text = tab_text + '<x:Name>Test Sheet</x:Name>';
      tab_text = tab_text + '<x:WorksheetOptions><x:Panes></x:Panes></x:WorksheetOptions></x:ExcelWorksheet>';
      tab_text = tab_text + '</x:ExcelWorksheets></x:ExcelWorkbook></xml></head><body>';
      tab_text = tab_text + "<table border='1px'>";
      var exportTable = $('#' + id).clone();
      exportTable.find('input').each(function (index, elem) { $(elem).remove(); });
      tab_text = tab_text + exportTable.html();
      tab_text = tab_text + '</table></body></html>';
      var data_type = 'data:application/vnd.ms-excel';
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      var fileName = title + '.xls';
      //Explorer 환경에서 다운로드
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      if (window.navigator.msSaveBlob) {
      var blob = new Blob([tab_text], {
      type: "application/csv;charset=utf-8;"
      });
      navigator.msSaveBlob(blob, fileName);
      }
      } else {
      var blob2 = new Blob([tab_text], {
      type: "application/csv;charset=utf-8;"
      });
      var filename = fileName;
      var elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob2);
      elem.download = filename;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
      }
      }
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
      <p>Date: <input type="text" id="datepicker"></p>
      
      <div class="demo-description">
      <p>Localize the datepicker calendar language and format (English / Western formatting is the default).  The datepicker includes built-in support for languages that read right-to-left, such as Arabic and Hebrew.</p>
      </div>

      <!-- excel download-->
      <div class="main-content">
        <div class="main-content-inner">
        <div class="page-content">
        <table id="table">
        <caption>Excel Download</caption>
        <thead>
        <tr>
        <th></th>
        <th>sample</th>
        <th>sample</th>
        <th>sample</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>sample</th>
        <td>Text</td>
        <td>Text</td>
        <td rowspan="2">Text</td>
        </tr>
        <tr>
        <th>sample</th>
        <td>Text</td>
        <td>Text</td>
        </tr>
        <tr>
        <th>sample</th>
        <td>Text</td>
        <td>Text</td>
        <td>Text</td>
        </tr>
        </tbody>
        </table>
        </div>
        <button type="button" onclick="fnExcelReport('table','title');">Excel Download</button>
        </div>
        </div>
    </div>
</body>
</html>
