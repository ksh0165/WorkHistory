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
var num1 = Math.ceil(Math.random()*9);
var num2 = Math.ceil(Math.random()*9);
var res = num1 * num2;

var div = document.createElement('div');
div.textContent = String(num1)+ '곱하기' + String(num2) + '는?';
document.body.append(div);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number';
form.append(input);
var clickBtn = document.createElement('button');
clickBtn.textContent = '입력!';
form.append(clickBtn);
var result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit',function callFunc(e){
    e.preventDefault();
    if(res == Number(input.value)){
        result.textContent = '딩동댕';
        num1 = Math.ceil(Math.random()*9);
        num2 = Math.ceil(Math.random()*9);
        res = num1 * num2;
        div.textContent = String(num1) + '곱하기' + String(num2) + '는?';
        input.value = '';
        input.focus(); 
    }else{
        result.textContent = '땡';
        input.value='';
        input.focus();
    }
})
</script>
</body>
</html>
