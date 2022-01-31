function waktuSholat(kota, tahun, bulan) {
  fetch(
    `https://api.aladhan.com/v1/calendarByAddress?address=${kota}&method=2&month=${bulan}&year=${tahun}`
  )
    .then((respon) => respon.json())
    .then(function (respon) {
      const initWaktu = moment().locale("id");
      let tanggal = initWaktu.format("Do") - 1;
      
      let data = respon.data[tanggal];
      let subuh = data.timings.Fajr;
      let imsak = data.timings.Imsak;
      let dzuhur = data.timings.Dhuhr;
      let ashar = data.timings.Asr;
      let maghrib = data.timings.Maghrib;
      let isya = data.timings.Isha;

      $('#nama-kota').html($('#kota').val());

      $('#imsak').html(imsak);
      $('#subuh').html(subuh);
      $('#dzuhur').html(dzuhur);
      $('#ashar').html(ashar);
      $('#maghrib').html(maghrib);
      $('#isya').html(isya);

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
    const kota = document.getElementById("kota").value.toLowerCase().split(" ").join("");
    let t = new Date().getFullYear();
    let b = `${new Date().getMonth() + 1}`.padStart(2, "0");

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
  $('#waktu-shalat').fadeOut(); 
  $('#nama-kota').fadeOut(); 
}

$('#waktu-shalat').ready(() => {
  $('#waktu-shalat').hide();
})



function updateDate() { 
  let init = moment().locale("id");
  $('#date-now').ready(() => {
    $('#date-now').html(init.format("dddd, D MMMM YYYY"))
    $('#time-now').text(init.format("HH:mm:ss"))
  });
  setTimeout(() => {
    updateDate();
  },1000)
}

updateDate()