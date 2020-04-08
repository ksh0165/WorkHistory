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
              numberOfMonths: 1,
              showButtonPanel: true
            });
        })
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
    </div>
</body>
</html>
