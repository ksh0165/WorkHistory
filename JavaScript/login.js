$(document).ready(function(){
    $omi = $('#ol_id'); //아이디 입력창
    $omp = $('#ol_pw'); //패스워드 입력창
    $omi_label = $('#ol_idlabel'); //아이디 레이블
    $omp_label = $('#ol_pwlabel'); //패스워드 레이블
    $omi.focus(function() { //아이디 입력창 포커스
        $omi_label.css('visibility','hidden');
    });
    $omp.focus(function() { //패스워드 입력창 포커스
        $omp_label.css('visibility','hidden');
    });
    $omi.blur(function() { //아이디 입력창 포커스 해제
        $this = $(this);
        if($this.attr('id') == "ol_mb_id" && $this.attr('value') == "") $omi_label.css('visibility','visible');
    });
    $omp.blur(function() { //패스워드 입력창 포커스 해제
        $this = $(this);
        if($this.attr('id') == "ol_mb_pw" && $this.attr('value') == "") $omp_label.css('visibility','visible');
    });
});