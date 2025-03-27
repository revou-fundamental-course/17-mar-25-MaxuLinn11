
// Program calculating

// Ini section perhitungan luas persegi
function hitungNilaiLuasPersegi() {
    let menghitungLuasPersegi = document.getElementById("nilai-sisi-luas-persegi").value;
    if (menghitungLuasPersegi=== "") {
        alert("Ayo masukkan nilai sisinya terlebih dahulu!");
        return} 
        else {("valid");}
        // Input valid maka program luas persegi dilanjutkan
    let hasilLuasPersegi = parseInt(menghitungLuasPersegi) + parseInt(menghitungLuasPersegi)
    // Result luas persegi diberikan
    document.getElementById("resultLuasPersegi1").innerHTML = "Luas Persegi = Sisi x Sisi";
    document.getElementById("resultLuasPersegi2").innerHTML = "Luas Persegi" + " " + "=" + " " + menghitungLuasPersegi + " " + "x" + " " + menghitungLuasPersegi;
    document.getElementById("resultLuasPersegi3").innerHTML = "Luas persegi tersebut adalah" + " " + hasilLuasPersegi + "m2";
    document.getElementById("resultLuasPersegi4").innerHTML = resetNilaiKelilingPersegi()
}

// Ini section perhitungan keliling persegi
function hitungNilaiKelilingPersegi() {
    let menghitungKelilingPersegi = document.getElementById("nilai-sisi-keliling-persegi").value;
    if (menghitungKelilingPersegi=== "") {
        alert("Ayo masukkan nilai sisinya terlebih dahulu!");
        return} 
        else {("valid");}
        // Input valid maka program keliling persegi dilanjutkan
    let hasilKelilingPersegi = parseInt(menghitungKelilingPersegi) * (4)
    // Result kaliling persegi diberikan
    document.getElementById("resultKelilingPersegi1").innerHTML = "Keliling Persegi = Sisi x 4"
    document.getElementById("resultKelilingPersegi2").innerHTML = "Keliling persegi" + " " + "=" + " " + menghitungKelilingPersegi + " " + "x" + " " + "4"
    document.getElementById("resultKelilingPersegi3").innerHTML = "Keliling persegi tersebut adalah" + " " + hasilKelilingPersegi + "m";
}

// Ini section perhitungan luas persegi panjang
function hitungNilaiLuasPersegiPanjang() {
    let menghitungLuasPanjangPersegiPanjang = document.getElementById("nilai-panjang-luas-persegi-panjang").value;
    if (menghitungLuasPanjangPersegiPanjang=== "") {
        alert("Ayo masukkan nilai panjangnya terlebih dahulu!");
        return} 
        else {("valid");}
        // Input valid maka dilanjutkan ke validasi nilai lebar
    let menghitungLuasLebarPersegiPanjang = document.getElementById("nilai-lebar-luas-persegi-panjang").value;
    if (menghitungLuasLebarPersegiPanjang=== "") {
        alert("Nilai lebarnya juga jangan lupa!");
        return} 
        else {("valid");}
        // Input valid maka program luas persegi panjang dilanjutkan
    let hasilLuasPersegiPanjang = parseInt(menghitungLuasLebarPersegiPanjang) * parseInt(menghitungLuasPanjangPersegiPanjang);
    // Result luas persegi panjang diberikan
    document.getElementById("resultLuasPersegiPanjang1").innerHTML = "Luas Persegi Panjang = Panjang x Lebar"
    document.getElementById("resultLuasPersegiPanjang2").innerHTML = "Luas persegi =" + " " + menghitungLuasPanjangPersegiPanjang + " " + "x" + " " + menghitungLuasLebarPersegiPanjang
    document.getElementById("resultLuasPersegiPanjang3").innerHTML = "Luas persegi panjang tersebut adalah" + " " + hasilLuasPersegiPanjang + "m2";
}

// Ini section perhitungan keliling persegi panjang
function hitungNilaiKelilingPersegiPanjang() {
    let menghitungPanjangKelilingPersegiPanjang = document.getElementById("nilai-panjang-keliling-persegi-panjang").value;
    if (menghitungPanjangKelilingPersegiPanjang=== "") {
        alert("Ayo masukkan nilai panjangnya terlebih dahulu!");
        return} 
        else {("valid");}
        // Input valid maka dilanjutkan ke validasi nilai lebar
    let menghitungLebarKelilingPersegiPanjang = document.getElementById("nilai-lebar-keliling-persegi-panjang").value;
    if (menghitungLebarKelilingPersegiPanjang=== "") {
        alert("Nilai lebarnya juga jangan lupa!");
        return} 
        else {("valid");}
        // Input valid maka program keliling persegi panjang dilanjutkan
    let hasilKelilingPersegiPanjang = (parseInt(menghitungPanjangKelilingPersegiPanjang) + parseInt (menghitungLebarKelilingPersegiPanjang)) * (2)
    // Result keliling persegi panjang diberikan
    document.getElementById("resultKelilingPersegiPanjang1").innerHTML = "Keliling persegi panjang = 2 (P + l)"
    document.getElementById("resultKelilingPersegiPanjang2").innerHTML = "Keliling persegi panjang = " + "2" + " " + "(" + menghitungPanjangKelilingPersegiPanjang + "+" + " " + menghitungLebarKelilingPersegiPanjang + ")"
    document.getElementById("resultKelilingPersegiPanjang3").innerHTML = "Keliling persegi panjang tersebut adalah" + " " + hasilKelilingPersegiPanjang + "m";
}


// Program tombol reset

// Ini program tombol reset luas persegi
function resetNilaiLuasPersegi() {
    let resetInputLuasPersegi = document.getElementById("nilai-sisi-luas-persegi").value = ""}

// Ini program tombol reset keliling persegi
function resetNilaiKelilingPersegi() {
    let resetInputKelilingPersegi = document.getElementById("nilai-sisi-keliling-persegi").value = ""}

// Ini program tombol reset luas persegi panjang
function resetNilaiLuasPersegiPanjang() {
    let resetInputPanjangPersegiPanjang = document.getElementById("nilai-panjang-luas-persegi-panjang").value = ""
    let resetInputLebar = document.getElementById("nilai-lebar-luas-persegi-panjang").value = ""
}

// Ini program tombol reset keliling persegi panjang
function resetNilaiKelilingPersegiPanjang() {
    let resetInputPanjang = document.getElementById("nilai-panjang-keliling-persegi-panjang").value = ""
    let resetInputlebar = document.getElementById("nilai-lebar-keliling-persegi-panjang").value = ""
}
