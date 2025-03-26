/*Ini Javascript External*/
function hitungNilaiLuasPersegi() {
    let menghitungLuasPersegi = document.getElementById("nilai-sisi-luas-persegi").value;
    let hasilLuasPersegi = parseInt(menghitungLuasPersegi) + parseInt(menghitungLuasPersegi)
    console.log(hasilLuasPersegi);
    document.getElementById("resultLuasPersegi").innerHTML = "Luas persegi tersebut adalah" + " " + hasilLuasPersegi + "m2";
}

function hitungNilaiKelilingPersegi() {
    let menghitungKelilingPersegi = document.getElementById("nilai-sisi-keliling-persegi").value;
    let hasilKelilingPersegi = parseInt(menghitungKelilingPersegi) * (4)
    console.log(hasilKelilingPersegi);
      document.getElementById("resultKelilingPersegi").innerHTML = "Keliling persegi tersebut adalah" + " " + hasilKelilingPersegi + "m";

}

function hitungNilaiLuasPersegiPanjang() {
    let menghitungLuasPanjangPersegiPanjang = document.getElementById("nilai-panjang-luas-persegi-panjang").value;
    let menghitungLuasLebarPersegiPanjang = document.getElementById("nilai-lebar-luas-persegi-panjang").value;
    let hasilLuasPersegiPanjang = parseInt(menghitungLuasLebarPersegiPanjang) * parseInt(menghitungLuasPanjangPersegiPanjang);
    console.log(hasilLuasPersegiPanjang);
    document.getElementById("resultLuasPersegiPanjang").innerHTML = "Luas persegi panjang tersebut adalah" + " " + hasilLuasPersegiPanjang + "m2";
}

function hitungNilaiKelilingPersegiPanjang() {
    let menghitungPanjangKelilingPersegiPanjang = document.getElementById("nilai-panjang-keliling-persegi-panjang").value;
    let menghitungLebarKelilingPersegiPanjang = document.getElementById("nilai-lebar-keliling-persegi-panjang").value;
    let hasilKelilingPersegiPanjang = (parseInt(menghitungPanjangKelilingPersegiPanjang) + parseInt (menghitungLebarKelilingPersegiPanjang)) * (2)
    console.log(hasilKelilingPersegiPanjang);
        document.getElementById("resultKelilingPersegiPanjang").innerHTML = "Keliling persegi panjang tersebut adalah" + " " + hasilKelilingPersegiPanjang + "m";
}