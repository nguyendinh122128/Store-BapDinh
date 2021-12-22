

// Hiện giỏ hàng

function xuatHienGioHang(){
    var gioHang = document.querySelector('.giohang')
    // console.log(gioHang)
    if(gioHang.style.display=='none'){
        gioHang.style.display="";
    }
    else{
        gioHang.style.display='none';
    }
    hienThiGioHang();
}

// Ẩn giỏ hàng
function dongGioHang() {
    document.querySelector('.giohang').style.display = 'none'
}

var danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));

var dsgiohang = [];
var sanphammua;
function muaHang(idsp, chitiet){
    if(chitiet == true){
        soluongmua = parseInt(document.getElementById('soLuongMua').value);
        if(soluongmua < 1){
           alert('Số lượng phải lớn hơn 0');
           return false;
        }
    }else{
        soluongmua = 1;
    }
    if(localStorage.getItem('giohang') === null){
        var dsgiohang = [];
    }
    else{
        dsgiohang = JSON.parse(localStorage.getItem('giohang'));
    }
    var tongSP = tongSanPham(dsgiohang);

    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    for(var i=0; i<danhsachsanpham.length; i++){
        if(danhsachsanpham[i].idsanpham == idsp){
            if(confirm('Bạn muốn mua sản phẩm : '+danhsachsanpham[i].tensanpham)){
                if(dsgiohang.length == 0){
                    soluong = soluongmua;
                }else{
                    for(var j=0; j<dsgiohang.length; j++){
                        if(dsgiohang[j].thongtinsp.idspgiohang == idsp){
                            soluong = dsgiohang[j].soluongmua + soluongmua;
                            dsgiohang.splice(j, 1);
                        }else{
                            soluong = soluongmua;
                        }
                    }

                }
                sanphammua = {
                    thongtinsp : { tensanpham : danhsachsanpham[i].tensanpham
                                ,gia : danhsachsanpham[i].gia
                                ,img : danhsachsanpham[i].img
                                ,idspgiohang : danhsachsanpham[i].idsanpham}
                    ,soluongmua : soluong
                }
                dsgiohang.push(sanphammua);
                localStorage.setItem('giohang',JSON.stringify(dsgiohang));

                
                document.getElementById('demSanPham').innerHTML = tongSP + soluongmua;
                alert('Thêm sản phẩm thành công');
            }
        }
    }
    hienThiGioHang();
}
// Kiểm tra sản phẩm trùng
function kiemTraTrung(idDaMua){
    if(localStorage.getItem('giohang')===null){
        var dsgiohang = [];
    }
    else{
        dsgiohang = JSON.parse(localStorage.getItem('giohang'))
    }
    if(dsgiohang.length!=0){
        for(var i=0;i<dsgiohang.length;i++){
            if(dsgiohang[i].thongtinsp.idspgiohang==idDaMua){
                if(confirm('Sản phẩm đã có trong giỏ hàng bạn có muốn mua!')){
                    dsgiohang[i].soluongmua =  dsgiohang[i].soluongmua+1
                    localStorage.setItem('giohang',JSON.stringify(dsgiohang))
                }
            }
        }
    }
    hienThiGioHang();
}

// ----------Đếm sản phẩm-----------

function demSanPham() {
    danhsachgiohang = JSON.parse(localStorage.getItem('giohang'))
    var tongSP = tongSanPham(danhsachgiohang);
    document.getElementById('demSanPham').innerHTML = tongSP;
    
}

//  Giỏ hàng
function hienThiGioHang() {
    var gioHang = "";
    danhsachgiohang = JSON.parse(localStorage.getItem('giohang'))
    if(localStorage.getItem('giohang') != null){
        for(var i=0;i<danhsachgiohang.length;i++){
            gioHang +=`
                    <ul style="border-bottom: 2px black solid">
                        <li>
                            <img src="${danhsachgiohang[i].thongtinsp.img}" alt="">
                        </li>
                        <li>${danhsachgiohang[i].thongtinsp.tensanpham}</li>
                        <li><p>${parseFloat(danhsachgiohang[i].thongtinsp.gia).toLocaleString('de-DE')}</p></li>
                        <li><input type="number" name="" id="soluong${i}" min="1" value="${danhsachgiohang[i].soluongmua}"
                        onchange="thayDoiSoLuong(this)">
                        </li>
                        <li><button id="btn-xoa" onclick="xoaGioHang('${danhsachgiohang[i].thongtinsp.tensanpham}')" >Xóa</button></li>
                        <div style="clear: both;" ></div>
                    </ul>
                    <div style="clear: both;" ></div>
                    `
        }
        document.querySelector('.sanPhamDaThem').innerHTML = 'Sản phẩm đã thêm';
        document.querySelector('.thanhtoan').style.display = 'block';
        document.querySelector('.giohang-content').innerHTML = gioHang;
        tongHang();
    }else{
        document.querySelector('.sanPhamDaThem').innerHTML = 'Có 0 sản phẩm trong giỏ hàng';
        document.querySelector('.thanhtoan').style.display = 'none';
        document.querySelector('.giohang-content').innerHTML = gioHang;
        document.getElementById('tonggia').innerHTML = "";
    }
    demSanPham();
}

// Tổng hàng
function tongHang() {
    var tongGia = 0;
    danhsachgiohang = JSON.parse(localStorage.getItem('giohang'))
    if(danhsachgiohang == null){
        return false;
    }else{
        for(var i=0;i<danhsachgiohang.length;i++){
            var gia = parseFloat(danhsachgiohang[i].thongtinsp.gia)
            // console.log(danhsachgiohang[i].thongtinsp.gia)
            // console.log(gia)
            var soluong = parseInt(document.getElementById('soluong'+i).value);
            tongGia += gia*soluong;
        }
        tongGia = tongGia.toLocaleString('de-DE')
        document.getElementById('tonggia').innerHTML = `<h3> ${tongGia} vnđ</h3>`

        var tongSP = tongSanPham(danhsachgiohang);
        document.getElementById('demSanPham').innerHTML = tongSP;
    }
}

// Số lượng giày

function thayDoiSoLuong(obj){
    var iddoisoluong = obj.id
    console.log(obj.id)
    danhsachgiohang = JSON.parse(localStorage.getItem('giohang'))
    console.log(iddoisoluong)
    for(var i=0;i<danhsachgiohang.length;i++){
        if('soluong'+i==iddoisoluong){
            danhsachgiohang[i].soluongmua = document.getElementById('soluong'+i).value;
            console.log(danhsachgiohang[i].soluongmua);  
            break;
        }
    }
    localStorage.setItem('giohang',JSON.stringify(danhsachgiohang));
    tongHang();
}

// Xóa bớt trong giỏ hàng
function xoaGioHang(tenSpXoa){
    danhsachgiohang = JSON.parse(localStorage.getItem('giohang'))
        for(var i=0;i<danhsachgiohang.length;i++){
            if(danhsachgiohang[i].thongtinsp.tensanpham==tenSpXoa){
                if(confirm('Bạn muốn xóa sản phẩm : '+danhsachgiohang[i].thongtinsp.tensanpham)){
                    danhsachgiohang.splice(i,1);
                }
            }
        }
    if(danhsachgiohang.length==0){
        localStorage.removeItem('giohang');
    }else{
    localStorage.setItem('giohang',JSON.stringify(danhsachgiohang));
    }
    hienThiGioHang();
    tongHang();
}

function tongSanPham(danhsachgiohang)
{
    var tongSP = 0;
    if(danhsachgiohang != null){
        for(var i=0; i<danhsachgiohang.length; i++){
            tongSP += parseInt(danhsachgiohang[i].soluongmua);
        }
    }
    return tongSP;
}

// ĐƠN HÀNG
function thanhToan() {
    if(localStorage.getItem('giohang')===null){
        return false;
    }
    else{
        danhsachgiohang = JSON.parse(localStorage.getItem('giohang'))
    }
    if(localStorage.getItem('donhang')===null){
        danhsachdonhang = [];
    }
    else{
        danhsachdonhang = JSON.parse(localStorage.getItem('donhang'))
    }
    var tenDonHang = "";
    var tongSP = tongSanPham(danhsachgiohang);
    for(var i=0;i<danhsachgiohang.length;i++){
        if(i != 0){
            tenDonHang += ', ';
        }
        tenDonHang += ''+danhsachgiohang[i].thongtinsp.tensanpham
    }
    if(confirm('Bạn thanh toán hàng : '+tenDonHang)){
            donhang = {
            hangMua : tenDonHang
            ,tongSpTrenDon : tongSP
            ,tongTienThanhToan : document.getElementById('tonggia').innerText
            ,ngayThanhToan : getDate()
            ,trangThai : 'Chưa xác nhận'
        };
        localStorage.removeItem('giohang')
        danhsachdonhang.push(donhang)
        localStorage.setItem('donhang',JSON.stringify(danhsachdonhang));
        alert('Thanh toán thành công')
        window.location.href = 'storeGiay.html';
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

// Hiển thị đơn hàng

function hienThiDonHang(){
    var nhieuDonHang = "";
    if(localStorage.getItem('donhang')===null){
    document.getElementById('content').innerHTML =
     `
     Bạn chưa có đơn hàng nào.
     </br>
     Nhập vào trang chủ đây để mua hàng : 
     <li><a href="" class="text-black">TRANG CHỦ</a></li>
        
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
                            <th style="width: 40%">Đơn hàng</th>
                            <th style="width: 5%">Số lượng</th>
                            <th style="width: 20%">Tổng Tiền</th>
                            <th style="width: 15%">Ngày Mua Hàng</th>
                          </tr>
                        </thead>
                        <td>BAP10${i+1}</td>
                        <td>${danhsachdonhang[i].hangMua}</td>
                        <td>${danhsachdonhang[i].tongSpTrenDon}</td>
                        <td>${danhsachdonhang[i].tongTienThanhToan}</td>
                        <td>${danhsachdonhang[i].ngayThanhToan}</td>
                        <td>${danhsachdonhang[i].trangThai}</td>
                        </ul>
                        </br>
                        `
    }
    document.getElementById('content').innerHTML = nhieuDonHang;
}