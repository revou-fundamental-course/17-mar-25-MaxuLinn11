/*Ini Javascript External*/
function hitungNilaiLuasPersegi() {
    let menghitungLuasPersegi = document.getElementById("nilai-sisi-luas-persegi").value;
    let hasilLuasPersegi = parseInt(menghitungLuasPersegi) + parseInt(menghitungLuasPersegi)
    console.log(hasilLuasPersegi);
    document.getElementById("result").innerHTML = "Luas persegi tersebut adalah" + " " + hasilLuasPersegi + " " + "m2";
}
