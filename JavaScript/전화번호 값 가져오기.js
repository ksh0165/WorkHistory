<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Test Page!</title>
<link rel="stylesheet" type="text/css" href="../css/style.css">
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <script src="../js/login.js"></script>
</head>
<body>
<style>
    .selected{color:yellow;}
</style>
    <form name="registerform" method="post" enctype="multipart/form-data" action="./register">
        <div class="fieldlabel"><label for="userId">아이디</label></div>
        <span class="formfield"><input type="text" id="userId" name="userId" maxlength="20" value=""></span>
        <input type="submit" value="중복확인">
        <div class="fieldlabel"><label for="userPw">패스워드</label></div>
        <div class="formfield">
<input type="password" id="userPw" name="userpPw" maxlength="20" autocomplete="off">
</div>
        <div class="fieldlabel"><label for="userPwCheck">패스워드확인</label></div>
        <div class="formfield">
<input type="password" id="userPwCheck" name="userPwCheck" maxlength="20" autocomplete="off">
</div>
        <div class="fieldlabel"><label for="userName">이름</label></div>
        <div class="formfield"><input type="text" id="userName" name="userName" maxlength="20" value=""></div>
        <div class="fieldlabel"><label for="nickName">닉네임</label></div>
        <div class="formfield"><input type="text" id="nickName" name="nickName" maxlength="20" value=""></div>

        <div class="fieldlabel"><label>성별</label></div>
        <div class="formfield">
            <input type="radio" name="sex" value="남" alt="남자" checked >남자
            <input type="radio" name="sex" value="여" alt="여자" >여자
        </div>

        <div class="fieldlabel"><label for="email01">연령대</label></div>
        <label class="radio">
            <input type="radio" name="radio" id="r1" value="1" style="display: none;"><label for="r1" style="display: inline-block;"><p style="text-align:center; background-color: yellow; border-radius: 50%;">10대</p></label>
            <input type="radio" name="radio" id="r2" value="2" style="display: none;"><label for="r2" style="display: inline-block;"><p style="text-align:center; background-color: yellow; border-radius: 50%;">20대</p></label>
            <input type="radio" name="radio" id="r3" value="3" style="display: none;"><label for="r3" style="display: inline-block;"><p style="text-align:center; background-color: yellow; border-radius: 50%;">30대</p></label>
            <input type="radio" name="radio" id="r4" value="4" style="display: none;"><label for="r4" style="display: inline-block;"><p style="text-align:center; background-color: yellow; border-radius: 50%;">40대</p></label>
            <input type="radio" name="radio" id="r5" value="5" style="display: none;"><label for="r5" style="display: inline-block;"><p style="text-align:center; background-color: yellow; border-radius: 50%;">50대</p></label>
            <input type="radio" name="radio" id="r6" value="6" style="display: none;"><label for="r6" style="display: inline-block;"><p style="text-align:center; background-color: yellow; border-radius: 50%;">60대이상</p></label>
        </label>

        <div class="fieldlabel"><label>취미</label></div>
        <div class="formfield">
            <input type="checkbox" id="h1" name="hobby" value="독서" alt="취미" style="display: none;"><label for="h1" style="display: inline-block;"><p style="text-align:center;">독서</p></label>
            <input type="checkbox" id="h2" name="hobby" value="낚시" alt="취미" style="display: none;"><label for="h2" style="display: inline-block;"><p style="text-align:center;">낚시</p></label>
            <input type="checkbox" id="h3" name="hobby" value="수영" alt="취미" style="display: none;"><label for="h3" style="display: inline-block;"><p style="text-align:center;">수영</p></label>
            <input type="checkbox" id="h4" name="hobby" value="노래" alt="취미" style="display: none;"><label for="h4" style="display: inline-block;"><p style="text-align:center;">노래</p></label>
            <input type="checkbox" id="h5" name="hobby" value="게임" alt="취미" style="display: none;"><label for="h5" style="display: inline-block;"><p style="text-align:center;">게임</p></label>
            <input type="checkbox" id="h6" name="hobby" value="영화" alt="취미" style="display: none;"><label for="h6" style="display: inline-block;"><p style="text-align:center;">영화</p></label>
            <input type="checkbox" id="h7" name="hobby" value="공연" alt="취미" style="display: none;"><label for="h7" style="display: inline-block;"><p style="text-align:center;">공연</p></label>
            <input type="checkbox" id="h8" name="hobby" value="악기" alt="취미" style="display: none;"><label for="h8" style="display: inline-block;"><p style="text-align:center;">악기</p></label>
        </div>

        <div class="fieldlabel"><label for="mPhone1">연락처</label></div>
        <div class="formfield">
            <select id="mPhone1" name="mPhone1">
                <option value="010" selected>010</option>
                <option value="011">011</option>
                <option value="016">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
            </select>-
            <input id="mPhone2" name="mPhone2" type="text" value="" size="4" maxlength="4">-
            <input id="mPhone3" name="mPhone3" type="text" value="" size="4" maxlength="4">
            <input type="button" id="mPBtn" value="확인">
        </div>

        <div class="fieldlabel"><label>이메일수신</label></div>
        <div class="formfield">
            <input type="radio" name="emailYn" value="Y" checked>수신
            <input type="radio" name="emailYn" value="N">미수신
        </div>
        <div class="fieldlabel"><label>SMS수신</label></div>
        <div class="formfield">
            <input type="radio" name="smsYn" value="Y"checked>수신
            <input type="radio" name="smsYn" value="N">미수신
        </div>


        <div class="fieldlabel"><label for="profile">프로필사진</label></div>
        <div class="formfield">
            <input type="file" id="profile" name="profile" required>
        </div>
        <div class="btnfield">
            <input type="submit" value="회원가입">
        </div>
    </form>
    <script>
        var pwJ = /^([0-9a-zA-Z]+){8,12}$/;
        var mainJ = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        $("#userPw").blur(function(){
            if(pwJ.test($('#userPw').val())){
                console.log('true');
                console.log(pwJ);
            }else{
                console.log('false');
                console.log(pwJ);
            }
        });
        $("#userId").blur(function(){
            if(mainJ.test($('#userId').val())){
                console.log('true');
                console.log(mainJ);
            }else{
                console.log('false');
                console.log(mainJ);
            }
        });
        $("input:radio[name=radio]").click(function(){
        if($("input[name=radio]:checked").val() == "1"){
                alert("10대");
        }else if($("input[name=radio]:checked").val() == "2"){
            alert("20대");
        }else if($("input[name=radio]:checked").val() == "3"){
            alert("30대");
        }else if($("input[name=radio]:checked").val() == "4"){
            alert("40대");
        }else if($("input[name=radio]:checked").val() == "5"){
            alert("50대");
        }else if($("input[name=radio]:checked").val() == "6"){
            alert("60대이상");
        }
        alert($("input[name=radio]:checked").val());
        });
        var DATA = "";
        var currentData = "";
        var cnt = 0;
        $("input:checkbox[name=hobby]").click(function(){       
            $("input:checkbox[name='hobby']:checked").each(function(){
                currentData = $(this).val();                
            });
            cnt = cnt + 1;
            if(cnt < 4){
            DATA += $(this).val();
            alert(DATA);
            }
            alert(DATA);
        });
    </script>
    <script>
        $(document).ready(function () {
            $("#mPBtn").click(function(){
            alert($("#mPhone1 option:selected").val(),"-",$("input[id=mPhone2]").val(),"-",$("input[id=mPhone3]").val());
            alert($("input[id=mPhone2]").val());
            alert($("input[id=mPhone3]").val());
            var Number1 = ($("#mPhone1 option:selected").val()).toString();
            var Number2 = ($("input[id=mPhone2]").val()).toString();
            var Number3 = ($("input[id=mPhone3]").val()).toString();
            var Num = Number1+"-"+Number2+"-"+Number3;
            alert(Num);
            });
        });
    </script>
</body>
</html>
