function waktuSholat(kota, tahun, bulan) {
  fetch(
    `https://cdn.statically.io/gh/lakuapik/jadwalsholatorg/master/adzan/${kota}/${tahun}/${bulan}.json`
  )
    .then((respon) => respon.json())
    .then(function (respon) {
      let i = document.getElementById("imsak");
      let s = document.getElementById("subuh");
      let z = document.getElementById("dzuhur");
      let a = document.getElementById("ashar");
      let m = document.getElementById("maghrib");
      let y = document.getElementById("isya");
      let waktu = new Date();
      let tanggal = waktu.getDate() - 1;
      let data = respon[tanggal];
      let subuh = data.shubuh;
      let imsak = data.imsyak;
      let dzuhur = data.dzuhur;
      let ashar = data.ashr;
      let maghrib = data.magrib;
      let isya = data.isya;

      const kota = document.getElementById("nama-kota");
      kota.innerHTML = "Kota " + document.getElementById("kota").value;
      i.innerHTML = imsak;
      s.innerHTML = subuh;
      z.innerHTML = dzuhur;
      a.innerHTML = ashar;
      m.innerHTML = maghrib;
      y.innerHTML = isya;

      $('#waktu-shalat').fadeIn();
      $('#nama-kota').fadeIn();
    })
    .catch((error) => {
      alert("Kota tidak ditemukan");
      console.log(error);
    });
}

function cariKota() {
  try{
    const kota = document.getElementById("kota").value.toLowerCase();
    localStorage.setItem("kota", kota);
    let t = new Date().getFullYear();
    let b = `${new Date().getMonth() + 1}`.padStart(2, "0");
    switch(kota){
      case "manado":
        waktuSholat("menado", t, b);
        break;
      case "jakarta":
        waktuSholat("jakartapusat", t, b);
        break;
      case "bandar lampung":
        waktuSholat("bandarlampung", t, b);
        break;
    }

    waktuSholat(kota, t, b);
  }catch(e){
    alert("Kota tidak ditemukan");
  }
}

function resetData(){
  document.getElementById("kota").value = "";
  document.getElementById("nama-kota").innerHTML = "";
  document.getElementById("imsak").innerHTML = "";
  document.getElementById("subuh").innerHTML = "";
  document.getElementById("dzuhur").innerHTML = "";
  document.getElementById("ashar").innerHTML = "";
  document.getElementById("maghrib").innerHTML = "";
  document.getElementById("isya").innerHTML = "";
  localStorage.removeItem("kota");
  $('#waktu-shalat').fadeOut(); 
  $('#nama-kota').fadeOut(); 
}

$('#waktu-shalat').ready(() => {
  $('#waktu-shalat').hide();
})
