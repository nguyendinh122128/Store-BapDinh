// Đăng nhập


function closedn(){
    document.getElementById('khuon-dn').style.display='none';
}


function dangnhap(){

    var flag = 0;
    var taikhoan = document.getElementById("taikhoandn").value;
	var matkhaudn = document.getElementById("matkhaudn").value;
    var mangtaikhoan = JSON.parse(localStorage.getItem('user'));

    if(mangtaikhoan != null){
        if(taikhoan != "" && matkhaudn != ""){
            for(var i=0; i<mangtaikhoan.length; i++){
                if((mangtaikhoan[i].tendangnhap == taikhoan) && mangtaikhoan[i].matkhau == matkhaudn){
                    flag ++;
                    if(mangtaikhoan[i].usertype == 'admin'){
                        alert("Đăng nhập thành công admin");
                        window.location = 'admin.html';

                    }else if(mangtaikhoan[i].usertype == 'kh'){
                        window.location = 'storeGiay.html';
                    }
                    // Tạo ra tên người đăng nhập
                    var user_login = {
                        name : mangtaikhoan[i].tennguoidung
                    }
                    localStorage.setItem('user_login',JSON.stringify(user_login))
                }
            }
            if(flag == 0){
                console.log("errror")
                alert("Tài khoản hoặc mật khẩu chưa đúng!");
                document.getElementById('taikhoandn').focus();
                return false;
            }
        }
        else{
            alert('Nhập tài khoản mật khẩu!');
            document.getElementById('taikhoandn').focus();
            return false;
        }
    }else{
        alert("Tài khoản hoặc mật khẩu chưa đúng!");
        document.getElementById('taikhoandn').focus();
        return false;
    }
}