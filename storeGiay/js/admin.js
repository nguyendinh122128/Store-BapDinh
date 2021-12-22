



// function taodanhmuc(){
//     var danhmuc = [
//         "TRANG CHỦ",
//         "SẢN PHẨM",
//         "ĐƠN HÀNG",
//         "KHÁCH HÀNG",
//         "QUẢN LÍ THÔNG TIN"
//     ]
//     var chuoidanhmuc = "";
//     for(var i=0;i<danhmuc.length;i++){
//         var temp = `<li>
//                       <a class="text-white" href="admin.html?${danhmuc[i]}">
//                         <i class="ti-shift-right-alt"></i>
//                         ${danhmuc[i]}
//                       </a>  
//                     </li>`
//         chuoidanhmuc += temp;
//     }
//     chuoidanhmuc = `<ul>${chuoidanhmuc}</ul>`
//     document.getElementById('content-sidebar').innerHTML = chuoidanhmuc;
// }
// --------------------Đăng Nhập--------------
function checkUserLogin(){
    var user_login = JSON.parse(localStorage.getItem('user_login'))
    if(user_login == null){
        window.location.href = 'dangnhap.html';
    }else{
        document.getElementById('dangnhapthanhcong').innerHTML = `${user_login.name}<a onclick="dangxuat();" class="text-white">/Đăng xuất</a>`
    }
}
// -----------------Đăng xuất cho admin --------
function dangxuat() {
    localStorage.removeItem('user_login');
    window.location.href = 'index.html';
}
// TRANG CHỦ
var httc=0;
function hienthitrangchu(){
    if(httc==0){
        document.getElementById('trangchu').style.display = "";
        httc ++;
        }else{
        document.getElementById('trangchu').style.display = "none";
        httc =0;
        }
        console.log(httc);
}

// SHOW DANH SÁCH ĐĂNG KÝ

function dsNguoidung(){
    if(localStorage.getItem('user')===null){
        return false;
    }
    userArray = JSON.parse(localStorage.getItem('user'));
    var tr=`    <tr>
                <th>STT</th>
                <th>Kiểu Người Dùng</th>
                <th>Tên đầy đủ</th>
                <th>Giới Tính</th>
                <th>Địa Chỉ</th>
                <th>Số điện thoại</th>
                <th>EMAIL</th>
                <th>TÊN ĐĂNG NHẬP</th>
                <th>Mật Khẩu</th>
                <th>NGÀY ĐĂNG KÝ</th>
                <th>XÓA</th>
                </tr>`;
    for(var i=0; i<userArray.length;i++){
        tr+=`<tr>
                <td>${i+1}</td>
                <td>${userArray[i].usertype}</td>
                <td>${userArray[i].tennguoidung}</td>
                <td>${userArray[i].gioitinh}</td>
                <td>${userArray[i].diachi}</td>
                <td>${userArray[i].sdt}</td>
                <td>${userArray[i].email}</td>
                <td>${userArray[i].tendangnhap}</td>
                <td>${userArray[i].matkhau}</td>
                <td>${userArray[i].ngaydk}</td>
                <td><button class="delete" onClick="deleteuser('${userArray[i].tendangnhap}')">&times;</button></td>
                </tr>`;
    }
    tr = `<h2>Danh sách người dùng</h2>
        <table class="center" >
            ${tr}
          </table>
        `
    document.getElementById('dsnguoidung').innerHTML=tr;
}


// XÓA USER

function deleteuser(tenxoa){
    var userArray = JSON.parse(localStorage.getItem('user'));
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].tendangnhap==tenxoa){
            if(confirm('BẠN MUỐN XÓA TÊN NÀY : '+userArray[i].tendangnhap)){
				userArray.splice(i, 1);
            }
        }
    }
    localStorage.setItem('user',JSON.stringify(userArray));
    dsNguoidung();
}

// Hiển thị khách hàng
var htnd=0;
function hienthinguoidung(){
    if(htnd==0){
        document.getElementById('dsnguoidung').style.display = "";
        htnd ++;
        }else{
        document.getElementById('dsnguoidung').style.display = "none";
        htnd =0;
        }
        console.log(htnd);
}

//  TẠO SẢN PHẨM

function taosanpham(){
    // alert('Tạo sản phâm thành công')
    if(localStorage.getItem('sanpham')===null){
        var danhsachsanpham = [
             {idsanpham:'ad1', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas1.jpg', tensanpham:'Giày Adidas 1',gia:'150000'}
            ,{idsanpham:'ad2', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas2.jpg', tensanpham:'Giày Adidas 2',gia:'1200000'}
            ,{idsanpham:'ad3', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas3.jpg', tensanpham:'Giày Adidas 3',gia:'1300000'}
            ,{idsanpham:'ad4', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas4.jpg', tensanpham:'Giày Adidas 4',gia:'500000'}
            ,{idsanpham:'ad5', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas5.jpg', tensanpham:'Giày Adidas 5',gia:'750000'}
            ,{idsanpham:'ad6', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas6.jpg', tensanpham:'Giày Adidas 6',gia:'890000'}
            // ,{idsanpham:'ad7', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas7.jpg', tensanpham:'adidas7',gia:'100000'}
            // ,{idsanpham:'ad8', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas8.jpg', tensanpham:'adidas8',gia:'100000'}
            // ,{idsanpham:'ad9', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas9.jpg', tensanpham:'adidas9',gia:'100000'}
            // ,{idsanpham:'ad10', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas10.jpg', tensanpham:'adidas10',gia:'100000'}
            ,{idsanpham:'nk1', thuonghieu:'nike' , img:'./assets/img/nike/nike1.jpg', tensanpham:'Giày Nike 1',gia:'1000000'}
            ,{idsanpham:'nk2', thuonghieu:'nike' , img:'./assets/img/nike/nike2.jpg', tensanpham:'Giày Nike 2',gia:'13000000'}
            ,{idsanpham:'nk3', thuonghieu:'nike' , img:'./assets/img/nike/nike3.jpg', tensanpham:'Giày Nike 3',gia:'700000'}
            ,{idsanpham:'nk4', thuonghieu:'nike' , img:'./assets/img/nike/nike4.jpg', tensanpham:'Giày Nike 4',gia:'999000'}
            ,{idsanpham:'nk5', thuonghieu:'nike' , img:'./assets/img/nike/nike5.jpg', tensanpham:'Giày Nike 5',gia:'950000'}
            ,{idsanpham:'nk6', thuonghieu:'nike' , img:'./assets/img/nike/nike6.jpg', tensanpham:'Giày Nike 6',gia:'200000'}
            ,{idsanpham:'nk7', thuonghieu:'nike' , img:'./assets/img/nike/nike7.jpg', tensanpham:'Giày Nike 7',gia:'300000'}
            ,{idsanpham:'nk8', thuonghieu:'nike' , img:'./assets/img/nike/nike8.jpg', tensanpham:'Giày Nike 8',gia:'330000'}
            ,{idsanpham:'va1', thuonghieu:'vans' , img:'./assets/img/vans/vans1.jpg', tensanpham:'Giày Vans 1',gia:'720000'}
            ,{idsanpham:'va2', thuonghieu:'vans' , img:'./assets/img/vans/vans2.jpg', tensanpham:'Giày Vans 2',gia:'690000'}
            ,{idsanpham:'va3', thuonghieu:'vans' , img:'./assets/img/vans/vans3.jpg', tensanpham:'Giày Vans 3',gia:'850000'}
            ,{idsanpham:'va4', thuonghieu:'vans' , img:'./assets/img/vans/vans4.jpg', tensanpham:'Giày Vans 4',gia:'10000000'}
            // ,{idsanpham:'va5', thuonghieu:'vans' , img:'./assets/img/vans/vans5.jpg', tensanpham:'vans5',gia:'100000'}
            // ,{idsanpham:'va6', thuonghieu:'vans' , img:'./assets/img/vans/vans6.jpg', tensanpham:'vans6',gia:'100000'}
            // ,{idsanpham:'va7', thuonghieu:'vans' , img:'./assets/img/vans/vans7.jpg', tensanpham:'vans7',gia:'100000'}
            // ,{idsanpham:'va8', thuonghieu:'vans' , img:'./assets/img/vans/vans8.jpg', tensanpham:'vans8',gia:'100000'}
            // ,{idsanpham:'va9', thuonghieu:'vans' , img:'./assets/img/vans/vans9.jpg', tensanpham:'vans9',gia:'100000'}
            // ,{idsanpham:'va10', thuonghieu:'vans' , img:'./assets/img/vans/vans10.jpg', tensanpham:'vans10',gia:'100000'}
            // ,{idsanpham:'va11', thuonghieu:'vans' , img:'./assets/img/vans/vans11.jpg', tensanpham:'vans11',gia:'100000'}
            // ,{idsanpham:'va12', thuonghieu:'vans' , img:'./assets/img/vans/vans12.jpg', tensanpham:'vans12',gia:'100000'}
            ,{idsanpham:'co1', thuonghieu:'converse' , img:'./assets/img/converse/converse1.jpg', tensanpham:'giày Converse 1',gia:'650000'}
            ,{idsanpham:'co2', thuonghieu:'converse' , img:'./assets/img/converse/converse2.jpg', tensanpham:'giày Converse 2',gia:'700000'}
            ,{idsanpham:'co3', thuonghieu:'converse' , img:'./assets/img/converse/converse3.jpg', tensanpham:'giày Converse 3',gia:'100000'}
            ,{idsanpham:'co4', thuonghieu:'converse' , img:'./assets/img/converse/converse4.jpg', tensanpham:'giày Converse 4',gia:'880000'}
            ,{idsanpham:'co5', thuonghieu:'converse' , img:'./assets/img/converse/converse5.jpg', tensanpham:'giày Converse 5',gia:'100000'}
            ,{idsanpham:'co6', thuonghieu:'converse' , img:'./assets/img/converse/converse6.jpg', tensanpham:'giày Converse 6',gia:'799000'}
            ,{idsanpham:'co7', thuonghieu:'converse' , img:'./assets/img/converse/converse7.jpg', tensanpham:'giày Converse 7',gia:'100000'}
            ,{idsanpham:'pk1', thuonghieu:'phukien' , img:'./assets/img/phukien/pk1.jpg', tensanpham:'Phụ kiện 1',gia:'10000'}
            ,{idsanpham:'pk2', thuonghieu:'phukien' , img:'./assets/img/phukien/pk2.jpg', tensanpham:'Phụ kiện 2',gia:'50000'}
            ,{idsanpham:'pk3', thuonghieu:'phukien' , img:'./assets/img/phukien/pk3.jpg', tensanpham:'Phụ kiện 3',gia:'100000'}
            ,{idsanpham:'pk4', thuonghieu:'phukien' , img:'./assets/img/phukien/pk4.jpg', tensanpham:'Phụ kiện 4',gia:'2000'}
            ,{idsanpham:'pk5', thuonghieu:'phukien' , img:'./assets/img/phukien/pk5.jpg', tensanpham:'Phụ kiện 5',gia:'30000'}
            ,{idsanpham:'pk6', thuonghieu:'phukien' , img:'./assets/img/phukien/pk6.jpg', tensanpham:'Phụ kiện 6',gia:'55000'}
            ,{idsanpham:'pk7', thuonghieu:'phukien' , img:'./assets/img/phukien/pk7.jpg', tensanpham:'Phụ kiện 7',gia:'100000'}

        ];
        localStorage.setItem('sanpham',JSON.stringify(danhsachsanpham));
    }
}

// NÚT PHÂN TRANG
danhsachsanpham = JSON.parse(localStorage.getItem('sanpham')); 
let currenPage = 1;
let perPage = 8;
let totolPage = Math.ceil(danhsachsanpham.length/perPage);

function nutPhantrang(){
    document.getElementById('nutphantrang').innerHTML = "";
    if(totolPage>1){
        for(var i=1;i<=totolPage;i++){
            document.getElementById('nutphantrang').innerHTML += `<button class="btn-phantrang" onclick="nhapTrang(${i})" >${i}</button>`
        }
    }
}
function nhapTrang(i){
    currenPage = i;
    let star = (currenPage-1)*perPage;
    let end = currenPage*perPage;
    var tr = `  <tr>
                <th style="width: 10%">ID</th>
                <th style="width: 20%">ẢNH</th>
                <th style="width: 20%">THƯƠNG HIỆU</th>
                <th style="width: 20%">TÊN</th>
                <th style="width: 20%">GIÁ</th>
                <th style="width: 10%">Chức Năng</th>
            </tr>`
    console.log(star,end)
    if(end>=danhsachsanpham.length){
        end = danhsachsanpham.length;
    }
    for(var i=star;i<end;i++){
        tr +=
            `<tr>
            <td>${danhsachsanpham[i].idsanpham}</td>
            <td class="img-dssanpham"><img src="${danhsachsanpham[i].img}" alt=""></td>
            <td>${danhsachsanpham[i].thuonghieu}</td>
            <td>${danhsachsanpham[i].tensanpham}</td>
            <td>${danhsachsanpham[i].gia}</td>
            <td>
                <button id="btn-xacnhan" onclick="xoasanpham('${danhsachsanpham[i].idsanpham}');" >Xóa</button>
                <button id="btn-xacnhan" onclick="hienThiKhungSuaSP('${danhsachsanpham[i].idsanpham}');" >Sửa</button>
            </td>
        </tr>`
    }
    tr = `<h2>Danh mục sản phẩm</h2>
        <table>
            ${tr}
          </table>
        `
    document.getElementById('dssanpham').innerHTML = tr;
}

function dsSanpham(){
    if(localStorage.getItem('sanpham')===null){
        return false;
    }
    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    var tr = `  <tr>
          <th style="width: 10%">ID</th>
          <th style="width: 20%">ẢNH</th>
          <th style="width: 20%">THƯƠNG HIỆU</th>
          <th style="width: 20%">TÊN</th>
          <th style="width: 20%">GIÁ</th>
          <th style="width: 10%">Chức Năng</th>
            </tr>`
    for(var i=0;i<perPage;i++){
        tr +=
            `<tr>
            <td>${danhsachsanpham[i].idsanpham}</td>
            <td class="img-dssanpham"><img src="${danhsachsanpham[i].img}" alt=""></td>
            <td>${danhsachsanpham[i].thuonghieu}</td>
            <td>${danhsachsanpham[i].tensanpham}</td>
            <td>${danhsachsanpham[i].gia}</td>
            <td>
                <button id="btn-xacnhan" onclick="xoasanpham('${danhsachsanpham[i].idsanpham}');" >Xóa</button>
                <button id="btn-xacnhan" onclick="hienThiKhungSuaSP('${danhsachsanpham[i].idsanpham}');" >Sửa</button>
            </td>
        </tr>`
    }
    tr = `<h2  >Danh mục sản phẩm</h2>
        <table>
            ${tr}
          </table>
        `
    document.getElementById('dssanpham').innerHTML = tr;
}  

// XÓA SẢN PHẨM

function xoasanpham(idsanphamxoa){
    // alert('Vào Hàm xóa SP')
    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    for(var i=0;i<danhsachsanpham.length;i++){
        if(danhsachsanpham[i].idsanpham==idsanphamxoa){
            if(confirm('Bạn muốn xóa sp có id : '+danhsachsanpham[i].idsanpham)){
                danhsachsanpham.splice(i,1);
            }
        }
    }
    localStorage.setItem('sanpham',JSON.stringify(danhsachsanpham));
    window.onload();
}

// THÊM SẢN PHẨM
var sanphammoi;
function themsanpham(){
    if(localStorage.getItem('sanpham') == null){
        danhsachsanpham = [];
    }
    else{
        danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    }
    if(document.getElementById('idspmoi').value==''||document.getElementById('linkanhmoi').value==''||document.getElementById('tenspmoi').value==''||document.getElementById('giaspmoi').value == ''){
        alert('Không được để rỗng các thuộc tính sản phẩm');
        return false;
    }else{
        sanphammoi = {
            idsanpham : document.getElementById('idspmoi').value,
            thuonghieu:document.getElementById('thuonghieuspmoi').value,
            img:document.getElementById('linkanhmoi').value,
            tensanpham:document.getElementById('tenspmoi').value,
            gia:document.getElementById('giaspmoi').value
        }
        danhsachsanpham.push(sanphammoi);
        localStorage.setItem('sanpham',JSON.stringify(danhsachsanpham));
        dsSanpham();
    }
}
// -------------Hiện thị khung sửa sản phẩm -------------------
function hienThiKhungSuaSP(idsanphamsua) {
    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    if(danhsachsanpham == null){
        return false;
    }else{
        document.querySelector('.suasanpham').style.display = "";
        danhsachsanpham.forEach((element,index) => {
            if(element.idsanpham == idsanphamsua){
                var suaSP = 
                `
                <div class="dongsuasanpham" onclick="dongSuaSanPham();" >X</div>
                                <br>
                                <h3 style="text-align: center;" >Sửa sản phẩm</h3>
                                <br>
                                <p>Sửa ID sản phẩm</p>
                                <input type="text" name="" id="suaidsp" placeholder="ID SẢN PHẨm" value="${danhsachsanpham[index].idsanpham}">
                                <p>Sửa thương hiệu sản phẩm</p>
                                <select name="" id="suathuonghieusp">
                                    <option value="">${danhsachsanpham[index].thuonghieu}</option>
                                    <option value="adidas">Adidas</option>
                                    <option value="nike">Nike</option>
                                    <option value="vans">Vans</option>
                                    <option value="converse">Converse</option>
                                    <option value="phukien">Phụ Kiện</option>
                                </select>
                                <br>
                                <p>Sửa Tên sản phẩm</p>
                                <input type="text" name="" id="suatensp" placeholder="Tên SẢN PHẨM MƠI" value="${danhsachsanpham[index].tensanpham}">
                                <p>Sửa link ảnh sản phẩm</p>
                                <input type="text" name="" id="sualinkanh" placeholder="LINK ảnh sản phẩm" value="${danhsachsanpham[index].img}">
                                <p>Sửa giá sản phẩm</p>
                                <input type="text" name="" id="suagiasp" placeholder="GIÁ SẢN PHẨM" value="${danhsachsanpham[index].gia}">
                                <button onclick="suasanpham('${danhsachsanpham[index].idsanpham}');" >Sửa sản phẩm</button>
                `
                document.querySelector('.suasanpham').innerHTML = suaSP;
            }
        });

    }
}

// SỬA SẢN PHẨM
function suasanpham(idsanphamsua){
    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    if(danhsachsanpham == null){
        return false;
    }else{
        if(confirm('Bạn có muốn sửa sản phẩm có ID : '+idsanphamsua)){
            for(var i=0;i<danhsachsanpham.length;i++){
                if(danhsachsanpham[i].idsanpham==idsanphamsua){
                    if(document.getElementById('suaidsp').value != ""){
                        danhsachsanpham[i].idsanpham = document.getElementById('suaidsp').value;
                    }
                    if(document.getElementById('suathuonghieusp').value != ""){
                        danhsachsanpham[i].thuonghieu = document.getElementById('suathuonghieusp').value;
                    }
                    if(document.getElementById('suatensp').value != ""){
                        danhsachsanpham[i].tensanpham = document.getElementById('suatensp').value;
                    }
                    if(document.getElementById('sualinkanh').value != ""){
                        danhsachsanpham[i].img = document.getElementById('sualinkanh').value;
                    }
                    if(document.getElementById('suagiasp').value != ""){
                        danhsachsanpham[i].gia = document.getElementById('suagiasp').value;
                    }
                    localStorage.setItem('sanpham',JSON.stringify(danhsachsanpham));
                    // window.onload();
                    dsSanpham()
                    document.getElementById('sanpham').style.display = "";
                }
            }
        }
    }

}

function dongSuaSanPham() {
    document.querySelector('.suasanpham').style.display = 'none';
}

// HIỆN THỊ SẢN PHẨM
var htsp = 0;
function hienthisanpham(){
    if(htsp==0){
    document.getElementById('sanpham').style.display = "";
    htsp ++;
    }else{
    document.getElementById('sanpham').style.display = "none";
    htsp = 0;
    }
    console.log(htsp);
}

// QUẢN LÍ ĐƠN HÀNG

function quanLiDonHang(){
    var nhieuDonHang = "";
    if(localStorage.getItem('donhang')===null){
    document.querySelector('.quanlidon').innerHTML =
     `
     <h1>CỬA HÀNG CỦA BẠN CHƯA CÓ ĐƠN HÀNG NÀO <i class="ti-face-sad"></i>
        
    `;
    return false;
    }
    danhsachdonhang = JSON.parse(localStorage.getItem('donhang'))
    for(var i=0;i<danhsachdonhang.length;i++){
        nhieuDonHang += `
                        </br>
                        <table class="table table-hover table-bordered">
                          <tr>
                            <th style="width: 10%">Mã Đơn</th>
                            <th style="width: 35%">Đơn hàng</th>
                            <th style="width: 5%">Số lượng</th>
                            <th style="width: 15%">Tổng Tiền</th>
                            <th style="width: 10%">Ngày Mua Hàng</th>
                            <th style="width: 10%">Trạng thái</th>
                          </tr>
                        </thead>
                        <td>BAP10${i+1}</td>
                        <td>${danhsachdonhang[i].hangMua}</td>
                        <td>${danhsachdonhang[i].tongSpTrenDon}</td>
                        <td>${danhsachdonhang[i].tongTienThanhToan}</td>
                        <td>${danhsachdonhang[i].ngayThanhToan}</td>
                        <td>${danhsachdonhang[i].trangThai}</td>
                        <td id="madonhang${i}" onclick="xacNhanDonHang(this);" ><p class="xacnhandonhang text-black"><button id="btn-xacnhan">Xác nhận đơn hàng</button></p></td>
                        </ul>
                        </br>
                        `
    }
    document.querySelector('.quanlidon').innerHTML = `<h1>Đơn hàng của bạn</h1>${nhieuDonHang}`;
}

function xacNhanDonHang(donhang){
    danhsachdonhang = JSON.parse(localStorage.getItem('donhang'))
    console.log(donhang.id)
    for(var i=0;i<danhsachdonhang.length;i++){
        if(donhang.id=="madonhang"+i){
            danhsachdonhang[i].trangThai = "Đã xác nhận"
        }
    }
    localStorage.setItem('donhang',JSON.stringify(danhsachdonhang))
    quanLiDonHang()
}

window.onload = function(){
    checkUserLogin();
        
    // taodanhmuc();
    dsNguoidung();
    taosanpham();
    dsSanpham();
    nutPhantrang();
    quanLiDonHang();
}
