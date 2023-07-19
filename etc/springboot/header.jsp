<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="UTF-8">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="/webjars/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
  <script src="/webjars/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
  <script src="/js/jquery-3.7.0.min.js"></script>
  <link href="/webjars/summernote/0.8.10/summernote-bs4.css" rel="stylesheet">
  <script src="/webjars/summernote/0.8.10/summernote-bs4.min.js"></script>
</head>
<body>

	<nav class="navbar navbar-expand-md bg-dark navbar-dark">
		<a class="navbar-brand" href="/">Home</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="collapsibleNavbar">
			<c:choose>
				<c:when test="${empty sessionScope.principal }">
					<ul class="navbar-nav">
						<li class="nav-item"><a class="nav-link" href="/auth/login">로그인</a></li>
						<li class="nav-item"><a class="nav-link" href="/auth/insertUser">회원가입</a></li>
					</ul>
				</c:when>
				<c:otherwise>
					<ul class="navbar-nav">
						<li class="nav-item"><a class="nav-link" href="/user/updateUser">회원정보</a></li>
						<li class="nav-item"><a class="nav-link" href="/post/insertPost">포스트등록</a></li>
						<li class="nav-item"><a class="nav-link" href="/auth/logout">로그아웃</a></li>
					</ul>
				</c:otherwise>
			</c:choose>

		</div>
	</nav>
	<br>


</body>
</html>
