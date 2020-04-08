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
      // csv excel download
      function exportTableToCsv(tableId, filename) {
    if (filename == null || typeof filename == undefined)
        filename = tableId;
    filename += ".csv";

    var BOM = "\uFEFF";

    var table = document.getElementById(tableId);
    var csvString = BOM;
    for (var rowCnt = 0; rowCnt < table.rows.length; rowCnt++) {
        var rowData = table.rows[rowCnt].cells;
        for (var colCnt = 0; colCnt < rowData.length; colCnt++) {
            var columnData = rowData[colCnt].innerHTML;
            if (columnData == null || columnData.length == 0) {
                columnData = "".replace(/"/g, '""');
            }
            else {
                columnData = columnData.toString().replace(/"/g, '""'); // escape double quotes
            }
            csvString = csvString + '"' + columnData + '",';
        }
        csvString = csvString.substring(0, csvString.length - 1);
        csvString = csvString + "\r\n";
    }
    csvString = csvString.substring(0, csvString.length - 1);

    // IE 10, 11, Edge Run
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {

        var blob = new Blob([decodeURIComponent(csvString)], {
            type: 'text/csv;charset=utf8'
        });

        window.navigator.msSaveOrOpenBlob(blob, filename);

    } else if (window.Blob && window.URL) {
        // HTML5 Blob
        var blob = new Blob([csvString], { type: 'text/csv;charset=utf8' });
        var csvUrl = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none');
        a.setAttribute('href', csvUrl);
        a.setAttribute('download', filename);
        document.body.appendChild(a);

        a.click()
        a.remove();
    } else {
        // Data URI
        var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csvString);
        var blob = new Blob([csvString], { type: 'text/csv;charset=utf8' });
        var csvUrl = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.setAttribute('style', 'display:none');
        a.setAttribute('target', '_blank');
        a.setAttribute('href', csvData);
        a.setAttribute('download', filename);
        document.body.appendChild(a);
        a.click()
        a.remove();
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
      <button type="button" onclick="exportTableToCsv('example-table', 'Export example')">
        Export
    </button>

    <table id="example-table" border="1">
        <thead>
            <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>row 1, 'Col1'</td>
                <td>row 1, 'Col2'</td>
                <td>row 1, "Col3"</td>
            </tr>
            <tr>
                <td>row 2, 'Col1'</td>
                <td>row 2, 'Col2'</td>
                <td>row 2, "Col3"</td>
            </tr>
            <tr>
                <td>row 3, 'Col1'</td>
                <td>row 3, 'Col2'</td>
                <td>row 3, "Col3"</td>
            </tr>
            <tr>
                <td>row 4, 'Col1'</td>
                <td>row 4, 'Col2'</td>
                <td>row 4, "Col3"</td>
            </tr>
            <tr>
                <td>row 5, 'Col1'</td>
                <td>row 5, 'Col2'</td>
                <td>row 5, "Col3"</td>
            </tr>
        </tbody>
    </table>
    </div>
</body>
</html>
