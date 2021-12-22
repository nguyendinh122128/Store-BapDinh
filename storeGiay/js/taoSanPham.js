function taoSanPham() {
    if(localStorage.getItem('sanpham')===null){
        var danhsachsanpham = [
             {idsanpham:'ad1', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas1.jpg', tensanpham:'Giày Adidas 1',gia:'150000'}
            ,{idsanpham:'ad2', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas2.jpg', tensanpham:'Giày Adidas 2',gia:'1200000'}
            ,{idsanpham:'ad3', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas3.jpg', tensanpham:'Giày Adidas 3',gia:'1300000'}
            ,{idsanpham:'ad4', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas4.jpg', tensanpham:'Giày Adidas 4',gia:'500000'}
            ,{idsanpham:'ad5', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas5.jpg', tensanpham:'Giày Adidas 5',gia:'750000'}
            ,{idsanpham:'ad6', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas6.jpg', tensanpham:'Giày Adidas 6',gia:'890000'}
            ,{idsanpham:'ad7', thuonghieu:'adidas' , img:'./assets/img/adidas/adidas6.jpg', tensanpham:'Giày Adidas 7',gia:'890000'}
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
        return true;
    }
};