

// Đăng nhập thành công

function checkDangNhap(){
    var user_login = JSON.parse(localStorage.getItem('user_login'))
    if(user_login == null){
        window.location.href = 'dangnhap.html';
    }else{
        document.getElementById('dangnhapthanhcong').innerHTML = `${user_login.name}<a onclick="dangxuat();" class="text-white">/Đăng xuất</a>`;
    }
   
}
// ---------------------Đăng xuất--------------------
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


// Phân trang

danhsachsanpham = JSON.parse(localStorage.getItem('sanpham')); 
let currenPage = 1;
let perPage = 9;
if(danhsachsanpham != null){
    var totolPage = Math.ceil(danhsachsanpham.length/perPage);
}


function nutPhantrang(){
    document.getElementById('nutphantrang').innerHTML = "";
    if(totolPage > 1){
        for(var i=1;i<=totolPage;i++){
            document.getElementById('nutphantrang').innerHTML += `<button class="btn-phantrang" onclick="nhapTrang(${i})" >${i}</button>`
        }
    }
}

function nhapTrang(i){
    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    currenPage = i;
    let star = (currenPage-1)*perPage;
    let end = currenPage*perPage;
    var sp = "";
    console.log(star,end)
    if(end>=danhsachsanpham.length){
        end = danhsachsanpham.length;
    }
    for(var i=star;i<end;i++){
        sp += sanPhamHTML(danhsachsanpham[i].idsanpham, danhsachsanpham[i].img, danhsachsanpham[i].tensanpham, danhsachsanpham[i].gia);

    }
    sp = `<h2 class="title">Danh mục sản phẩm</h2>
        <div class="row">
            ${sp}
          </div>
        `
    document.getElementById('dssanpham').innerHTML = sp;
}

// Hiện thị sản phẩm user

function hienThiSP() {
    if(localStorage.getItem('sanpham')===null){
        return false;
    }
    danhsachsanpham = JSON.parse(localStorage.getItem('sanpham'));
    var sp = "";
    for(var i = 0; i<perPage; i++){
        sp += sanPhamHTML(danhsachsanpham[i].idsanpham, danhsachsanpham[i].img, danhsachsanpham[i].tensanpham, danhsachsanpham[i].gia);
        if(sp == false){
            console.log('Loi function addToHTML');
            return false;
        }
    }
    sp = `<h2 class="title">Danh mục sản phẩm</h2>
        <div class="row">
            ${sp}
          </div>
        `
    document.getElementById('dssanpham').innerHTML = sp;
}

function sanPhamHTML(idsanpham, img, tensanpham, gia){

    if(idsanpham == '' || img == '' || tensanpham == '' || gia == ''){
        return false;
    }else{
        sp =
            `
            <div class="col col-3">
                <div class="card">
                    <div class="img">
                        <img  onclick="hienChiTiet('${idsanpham}')" src="${img}" alt="">
                    </div>
                    <div class="tensp">
                        <h3>${tensanpham}</h3>
                    </div>
                    <div class="giasp">
                        <p>Giá : ${parseFloat(gia).toLocaleString('de-DE')}</p>
                    </div>
                    <div class="muahang">
                        <button type="button" class="button btn-cart" onclick="muaHang('${idsanpham}')">Thêm Vào Giỏ</button>
                    </div>
                </div>
            </div>
            `;
        return sp;
    }
                
}

function addToHTML(dssanpham, brand){
        var sp = "";
        for(var i=0; i<dssanpham.length; i++){
            if(dssanpham[i].thuonghieu == brand){
                sp += sanPhamHTML(danhsachsanpham[i].idsanpham, danhsachsanpham[i].img, danhsachsanpham[i].tensanpham, danhsachsanpham[i].gia);
                if(sp == false){
                    console.log('Loi function addToHTML');
                    return false;
                }
            }
        }

        html = `<h2 class="title">Danh mục sản phẩm : ${brand}</h2>
        <div class="row">
            ${sp}
        </div>
        `
        document.getElementById('content').innerHTML = html;
}

function hienThiBrand(obj){
    var id = obj.id;
    console.log(id);
    var dssanpham = JSON.parse(localStorage.getItem('sanpham'));
    if(dssanpham == null){
        console.log('Danh sach san pham null');
        return false;
    }
    switch (id) {
        case 'ad':
            addToHTML(dssanpham, 'adidas');
            break;
        case 'ni':
            addToHTML(dssanpham, 'nike');
            break;
        case 'va':
            addToHTML(dssanpham, 'vans');
            break;
        case 'co':
            addToHTML(dssanpham, 'converse');
            break;
        case 'pk':
            addToHTML(dssanpham, 'phukien');
            break;
        default:
            break;
    }
}

// TÌm kiếm sản phẩm 

 function timkiemsp(){
    let tensp = document.getElementById('timkiemsp').value
    var danhsachsptim = [];
    for(var i=0;i<danhsachsanpham.length;i++){
        if(danhsachsanpham[i].tensanpham.toUpperCase().includes(tensp.toUpperCase())){
             danhsachsptim.push(danhsachsanpham[i])
        }
    }
    console.log(danhsachsptim)
    if(danhsachsptim.length > 0){
        var sp = "";
            for(var i=0; i<danhsachsptim.length; i++){
                sp += sanPhamHTML(danhsachsptim[i].idsanpham, danhsachsptim[i].img, danhsachsptim[i].tensanpham, danhsachsptim[i].gia);
                if(sp == false){
                    console.log('Loi function addToHTML');
                    return false;
                }
                
             }
            html = `<h2 class="title">Có ${danhsachsptim.length} kết quả cho từ khóa: "${tensp}" </h2>
                <div class="row">
                    ${sp}
                </div>
                `;
            document.getElementById('content').innerHTML = html;
    } else{
        html = `<h2 class="title">Không tìm thấy sản phẩm cho từ khóa: "${tensp}"</h2>
        <div class="row">
            
        </div>
        `
        document.getElementById('content').innerHTML = html;
    }
     

 }




// ------------------------CHI TIẾT SẢN PHẨM--------------------------

function dongChiTiet() {
    var dongCT = document.querySelector('.chitiet');
    // var x = document.querySelector('.dong-chitiet');
    if(dongCT.style.display==''){
        dongCT.style.display='none'
    }
}
function hienChiTiet(idchitiet) {
    var dongCT = document.querySelector('.chitiet');
    // var x = document.querySelector('.dong-chitiet');
    if(dongCT.style.display=='none'){
        dongCT.style.display=''
    }
    for(var i=0;i<danhsachsanpham.length;i++){
        console.log(idchitiet)
        if(idchitiet==danhsachsanpham[i].idsanpham){
            var chietTietSp = 
                `
                <div class="header-chitiet">
                        <div style="cursor: pointer;padding: 3px;" class="dong-chitiet" onclick="dongChiTiet()" >X</div>
                    </div>
                    <div class="container-fliud">
                        <input type="hidden" name="sp_ma" id="sp_ma" value="5">
                        <input type="hidden" name="sp_ten" id="sp_ten" value="Jodan_1">
                        <input type="hidden" name="sp_gia" id="sp_gia" value="10000 VNĐ">

                        <div class="wrapper row">
                            <div class="preview col-md-6">
                                <div class="tab-pane" id="pic-1">
                                    <img src="${danhsachsanpham[i].img}">
                                </div>
                            </div>
                            <div class="details col-md-6">
                                <h3 class="product-title">${danhsachsanpham[i].tensanpham}</h3>
                                <div class="rating">
                                    <span class="review-no">34 reviews</span>
                                </div>
                                <small class="text-muted">Giá cũ: <s><span>1,990,000 vnđ</span></s></small>
                                <h4 class="price">Giá hiện tại: <span>${parseFloat(danhsachsanpham[i].gia).toLocaleString('de-DE')} vnđ</span></h4>
                                <div>
                                    Số lượng: <input id="soLuongMua" type="number" min="1" max="100" value="1" />
                                </div>
                                <p class="vote"><strong>100%</strong> hàng <strong>Chất lượng</strong>, đảm bảo
                                    <strong>Uy tín</strong>!</p>
                                <div class="sizes">sizes:
                                    <span class="size" data-toggle="tooltip" title="cỡ Nhỏ"><del>s</del></span>
                                    <span class="size" data-toggle="tooltip" title="cỡ Trung bình">m</span>
                                    <span class="size" data-toggle="tooltip" title="cỡ Lớn">l</span>
                                    <span class="size" data-toggle="tooltip" title="cỡ Đại"><del>xl</del></span>
                                </div>
                                <div class="colors">colors:
                                    <span class="color orange not-available" data-toggle="tooltip" title="Hết hàng"></span>
                                    <span class="color white"></span>
                                    <span class="color blue"></span>
                                </div>
                                
                            </div>
                        </div>
                        <a class="add-to-cart btn btn-default" id="btnThemVaoGioHang" onclick="muaHang('${danhsachsanpham[i].idsanpham}', true)">Thêm vào giỏ hàng</a>
                    </div>
                `
                document.querySelector('.chitiet').innerHTML = chietTietSp;
    
        }
    }
}




// // -----------------------ĐÁNH GIÁ---------------------
// function hienThiDanhGia(){
//     var user_login = JSON.parse(localStorage.getItem('user_login'))
//     if(user_login == null){
//         return false;
//     }else{
//         var danhGia =
//         `
//         <div class="nguoiDanhGia">
//             <span> Tên của bạn : ${user_login.name}</span>
//         </div>
//         <div class="danhGia-content">
//             <span>Đánh giá của bạn</span>
//             <input type="text" name="" id="danhGia-content">
//         </div>
//             `
//         document.getElementById('content').innerHTML = danhGia
//     }
// }
//  function danhSachDanhGia() {
//     var user_login = JSON.parse(localStorage.getItem('user_login'))
//     if(localStorage.getItem('dsdanhgia')===null){
//         dsDanhGia = [];
//     }
//     else{
//         dsDanhGia = JSON.parse(localStorage.getItem('dsdanhgia'))
//     }
//     var danhGiaMoi = {
//         name : user_login.name
//         ,danhGia : document.getElementById('danhGia-content').value
//     }
//  }


window.onload = function(){
    checkDangNhap();
    taoSanPham();
    hienThiSP();
    demSanPham();
    nutPhantrang();
}