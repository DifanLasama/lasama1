alert("Selamat Datang di Ticket App \n yang bisa masuk hanya umur 18 tahun keatas");

const umur = prompt("Masukkan umur anda");

if (umur >= 18) {
    const studio = prompt ("Masukan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");

    if (studio == "A" || studio == "B" || studio == "C"){
        const film = prompt("Pilih film \n 1 : Big Mouth \n 2 : Vincenzo \n 3 : Vagabone");
        let namafilm
        if (film == "1"){
            namaFilm = "Big Mouth";
        } else if (film == "2") {
            namaFilm = "Vincenzo"
        } else if (film == "3") {
            namaFilm = "Vagebone"
        } //mutable

        if(film == "1" || film == "2" || film == "3") {
            const nama = prompt ("Masukan nama anda");
            
            alert(`Berikut Tiket anda \n  nama : ${nama} \n umur : ${umur} \n Studio : ${studio} \n film : ${namaFilm}`);
        } else {
            alert("Maaf film yang anda pilih tidak tersedia");
        }
    } else {
        alert("Anda harus memilih studio");
    }
} else {
    alert (`Maaf tidak bisa masuk dibawah 18 tahun`);
}