let userObject = {
	init: function(){
		let _this = this;
		
		$("#btn-save").on("click", () => {
			_this.insertUser();
		});
	},
	
	insertUser: function(){
		alert("회원가입 요청됨");
	},
}

userObject.init();
