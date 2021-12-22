
// ĐĂNG KÝ

function closedk(){
    document.getElementById('khuon-dk').style.display='none';
}

function ktradangky(){

    // HỌ TÊN
    if(document.getElementById('hoten').value == ""){
        document.querySelector('.error-hoten').innerHTML = 'Vui lòng nhập họ tên!';
        document.getElementById('hoten').focus();
        return false;
    } else{
        document.querySelector('.error-hoten').innerHTML = "";
    }

    // Địa Chỉ
    if(document.getElementById('diachi').value == ""){
        document.querySelector('.error-diachi').innerHTML = 'Vui lòng nhập địa chỉ!';
        document.getElementById('diachi').focus();
        return false;
    }else{
        document.querySelector('.error-diachi').innerHTML = "";
    }

    // Số Điện Thoại
    if(document.getElementById('sdt').value == ""){
        document.querySelector('.error-sdt').innerHTML = 'Vui lòng nhập số điện thoại!';
        document.getElementById('sdt').focus();
        return false;
    }else if(isNaN(document.getElementById('sdt').value) || document.getElementById('sdt').value.length < 10){
        document.querySelector('.error-sdt').innerHTML = 'Số điện thoại không hợp lệ!';
        document.getElementById('sdt').focus();
        return false;
    }else{
        document.querySelector('.error-sdt').innerHTML = "";
    }

    // email
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(document.getElementById('email').value == ""){
        document.querySelector('.error-email').innerHTML = 'Vui lòng nhập email!';
        document.getElementById('email').focus();
        return false;
    } 
    else if (!filter.test(document.getElementById('email').value)) { 
        document.querySelector('.error-email').innerHTML = "Nhập địa chỉ email hợp lệ.\nExample@gmail.com";
        document.getElementById('email').focus(); 
        return false; 
    }
    else{
        document.querySelector('.error-email').innerHTML = "";
    }

    // GIỚI TÍNH
    if(document.formdangky.txtgioitinh.value==''){
        document.querySelector('.error-gioitinh').innerHTML = "Vui lòng chọn giới tính";
        return false;
    }else{
        document.querySelector('.error-gioitinh').innerHTML = "";

    }

    // Tên đăng nhập
    if(document.getElementById('tendangnhap').value==""){
        document.querySelector('.error-tendangnhap').innerHTML = 'Vui lòng nhập tên đăng nhập!';
        document.getElementById('tendangnhap').focus();
        // console.log(document.getElementById('tendangnhap').value)
        return false;
    }else{
        document.querySelector('.error-tendangnhap').innerHTML = "";

        //check trung ten dang nhap
        tendangnhap = document.getElementById('tendangnhap').value;
        result = checkTenDangNhap(tendangnhap);
        if(result == false){
            document.querySelector('.error-tendangnhap').innerHTML = '<b>' + tendangnhap + '</b> đã được đăng ký!';
            return false;
        }else{
            document.querySelector('.error-tendangnhap').innerHTML = '';
        }

    }

    // Mật khẩu

    var regexpass = /\ /;
    if(document.getElementById('matkhau').value==""){
        document.querySelector('.error-matkhau').innerHTML = 'Vui lòng nhập mật khẩu!';
        document.getElementById('matkhau').focus();
        // console.log(document.getElementById('matkhau').value)
        return false;
    }else if(document.getElementById('matkhau').value.length<=5){
        document.querySelector('.error-matkhau').innerHTML = 'Vui lòng nhập mật khẩu dài hơn 6 ký tự!';
        document.getElementById('matkhau').focus();
        return false;
    }else if(regexpass.test(document.getElementById('matkhau').value)){
        document.querySelector('.error-matkhau').innerHTML = 'Mật khẩu không có dấu cách!';
        document.getElementById('matkhau').focus();
        return false;
    }else{
        document.querySelector('.error-matkhau').innerHTML = "";
    }

    // Nhập lại mật khẩu
    if(document.formdangky.txtnlmatkhau.value!=document.formdangky.txtmatkhau.value){
    document.querySelector('.error-nlmatkhau').innerHTML = 'Vui lòng nhập mật khẩu giống mật khẩu đã nhập!';
        document.formdangky.txtnlmatkhau.focus();
        return false;
    }else{
        document.querySelector('.error-nlmatkhau').innerHTML = "";
    }
    
}

// check tên đăng nhập

function checkTenDangNhap(tendangnhap)
{
    dataUser = JSON.parse(localStorage.getItem('user'));
    console.log(dataUser);
    error = 0;
    if(dataUser != null){
        dataUser.forEach(function(item, index){
            if(item.tendangnhap == tendangnhap){
                error = 1;
                return false;
            }
        });
    }

    if(error == 0){
        return true;
    }else{
        return false;
    }
    
}

function createAdmin(){
    if(localStorage.getItem('user')===null){
        var userArray = [];
        var admin = {
            tennguoidung : "ADMIN333",
            diachi : "Gia Lai",
            sdt : "0327477222",
            email : "email@gmail.com",
            tendangnhap : "ad12345",
            matkhau : "admin123",
            ngaydk: getDate(),
            usertype : "admin",
            gioitinh : "Nam"
        };
        userArray.push(admin);
        localStorage.setItem('user',JSON.stringify(userArray));
    }
}


// Hàm ngày
function getDate(){
	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth()+1;
	var year = date.getFullYear();
	return (`${day}/${month}/${year}`)
}
// console.log(getDate());


// Tạo người đăng ký
var user1;
function createUser(){
    validate = ktradangky();
    if(validate == false){
        return false;
    }
    
    userArray = JSON.parse(localStorage.getItem('user'));
    user1 = {
        tennguoidung : document.getElementById('hoten').value,
        diachi : document.getElementById('diachi').value,
        sdt : document.getElementById('sdt').value,
        email : document.getElementById('email').value,
        tendangnhap : document.getElementById('tendangnhap').value,
        matkhau : document.getElementById('matkhau').value,
        ngaydk: getDate(),
        usertype : "kh",
        gioitinh : document.formdangky.txtgioitinh.value
    };
    userArray.push(user1);
	localStorage.setItem('user',JSON.stringify(userArray));
    alert('Đăng ký thành công');
    window.location.href = 'dangnhap.html';
}

// ĐĂNG NHẬP
function closedn(){
    document.getElementById('khuon-dn').style.display='none';
}


window.onload = function () {
    // alert("Chạy thành công onload");
    createAdmin();
}