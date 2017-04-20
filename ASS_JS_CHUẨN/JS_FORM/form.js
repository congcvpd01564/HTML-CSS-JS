function CheckForm()
{
	var a= document.check;
	/*1.Email không được rỗng
	2. Email phai ít nhất có 5 ký tự
	3.Email không bắt đầu bằng @.
	4.Sau ký tự '.' phải là ít nhất một ký tự khác nữa
	5.Giữa hai ký tự @ và '.' phải có ký tự.
	*/
	var mail = document.all.email.value;
	var acong = mail.indexOf('@');
	var dodai = mail.length-1;
	var daucham = mail.lastIndexOf('.');
	var daucach = mail.indexOf( );

	//check email
	
	if((dodai<=5)||(acong<1)||(daucham<=acong+1)||(daucach!=-1))
		{
		alert("Vui lòng nhập email theo đúng định dạng vd: 'abc@gmail.com'");
		a.email.focus();//focus con trỏ chuột đến ô email nếu bạn chưa nhập thông tin
		return false;
		}
		
		//check options
	//var b = document.getElementById("choice").checked;
	if(a.choice.value=="Chọn mục bạn muốn nhận tin")
	//if(b=="Chọn mục bạn muốn nhận tin")
		{
		alert("Vui lòng thêm lựa chọn của bạn");
		return fasle;
		}
		return true;
}
//form trang liên hệ
function TestForm(){
	var x = document.Test;
	
	//check noi dung
	if(x.text.value==""){
		alert("Vui lòng nhập nội dung của bạn");
		x.text.focus();
		return false;
		}
	
	//check giới tính
	if(x.gioitinh.value=="Giới tính"){
		alert("Vui lòng chọn giới tính của bạn");
		return fasle;
		}
		
	//check họ tên:
	if(x.hoten.value==""){
		alert("Vui lòng nhập học tên của bạn");
		x.hoten.focus();
		return fasle;
		}
		
	//check email
	if(x.email.value==""){
		alert("Vui lòng nhập email của bạn");
		x.email.focus();
		return fasle;
		}
		
	//check phone
	var checkphone= isNaN(x.phone.value);//isNaN = is not a number.
	if(x.phone.value==""){
		alert("Vui lòng nhập số điện thoại của bạn");
		
		x.phone.focus();
		return fasle;
		}
		//kiểm tra điện thoại phải là dạng số
	if(checkphone == true){
		alert("Điện thoại phải để ở định dạng số");
	return false;
		}
		//Định dạng điên thoại phải là 10 hoặc 11 số.
	if((x.phone.value.length < 10)||(x.phone.value.length > 11)){
		alert("Điện thoại phải để ở định dạng 10 hoặc 11 số");
		return false;
	}
			
	//check Tuổi
	var checkAge = isNaN(x.Age.value);//isNaN = is not a number.
	if(x.Age.value==""){
		alert("Vui lòng nhập tuổi của bạn");
		x.Age.focus();
		return fasle;
		}
	if(checkAge== true){
		alert("Tuổi để ở định dạng số");
		return fasle;
		}
		
	//check Địa chỉ
	if(x.Add.value==""){
		alert("Vui lòng nhập địa chỉ của bạn");
		x.Add.focus();
		return fasle;
		}
		
	//check Thành phố
	if((x.Town.value=="Tỉnh/Thành phố")||(x.Town.value=="")){
		alert("Vui lòng nhập tỉnh/thành phố của bạn");
		return fasle;
		}
		
	//check Danh mục
	if((x.option.value=="Danh Mục")||(x.option.value=="")){
		alert("Vui lòng chọn danh mục của bạn");
		//document.getElementById("option").innerHTML="Vui lòng nhập nội dung";
		x.option.focus();
		return fasle;
		}
		return true;
	}
	
	
	//Form LOGIN;

function checkLogin() {
	var b = document.login;
	
	//check username và password phải trên 5 ký tự
	//var user = document.all.username.value;
	//var pass = document.all.password.value;
	//var dodai1 = user.length-1;
	//var dodai2 = pass.length-1;
	//if(dodai1<=5){
	if(b.username.value==""){
		alert("Username không được để trống");
		b.username.focus();
		return false;
	}
	//check password;
	//if(dodai2 <=5){
	if(b.password.value==""){
		alert("Mật khẩu phải lớn hơn 5 ký tự");
		b.password.focus();
		return false;
	}
	return true;
	
}

/*function checkLogin() {
	var c = document.login;
	
	//check username và password phải trên 5 ký tự
	var user = document.all.username.value;
	var pass = document.all.password.value;
	var dodai1 = user.length-1;
	var dodai2 = pass.length-1;
	if(dodai1<=5){
		alert("Username phải trên 5 ký tự");
		c.username.focus();
		return false;
	}
	return true;
	
	//check password;
	if(dodai2 <=5){
		alert("Mật khẩu phải lớn hơn 5 ký tự");
		c.password.focus();
		return false;
	}
	return true;
	
}*/