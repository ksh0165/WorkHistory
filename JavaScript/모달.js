<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>radio 값 가져오기</title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
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
</div>
</body>
</html>
