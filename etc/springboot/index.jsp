<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="UTF-8">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/webjars/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  <script src="/webjars/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
  <script src="/webjars/jquery/3.6.0/dist/jquery.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
  <a class="navber-brand" href="/">Main</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/auth/login">로그인</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/auth/insertUser">회원가입</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container-fluid mt-3">
  <div class="card">
  	<div class="card-body">
  		<h4 class="card-title">포스트 제목</h4>
  		<a href="#" class="btn btn-secondaray">상세보기</a>
  	</div>
  </div>
</div>

<br>
<div class="mt-5 p-4 text-center">
	<p>Created by Gurum</p>
	<p>연락처: 010-1235-1235, 주소지: 서울시 강남구 대치동</p>
</div>

</body>
</html>
