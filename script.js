function waktuSholat(kota, tahun, bulan) {
  fetch(
    `https://api.aladhan.com/v1/calendarByAddress?address=${kota}&method=2&month=${bulan}&year=${tahun}`
  )
    .then((respon) => respon.json())
    .then(function (respon) {
      let tanggal = initDate.format("Do") - 1;

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
    let kota = $('#kota').val().toLowerCase().split(" ").join("");
    let t = initDate.format("YYYY");
    let b = initDate.format("MM");

    waktuSholat(kota, t, b);
  }catch(e){
    alert("Kota tidak ditemukan");
  }
}

function resetData(){
  $('#kota').val('');
  $('#nama-kota').html('');
  $('#imsak').html('');
  $('#subuh').html('');
  $('#dzuhur').html('');
  $('#ashar').html('');
  $('#maghrib').html('');
  $('#isya').html('');

  $('#waktu-shalat').fadeOut(); 
  $('#nama-kota').fadeOut(); 
}

$('#waktu-shalat').ready(() => {
  $('#waktu-shalat').hide();
})



function updateDate() { 
  $('#date-now').ready(() => {
    $('#date-now').html(initDate.format("dddd, D MMMM YYYY"))
    $('#time-now').text(initDate.format("HH:mm:ss"))
  });
  setTimeout(() => {
    updateDate();
  },1000)
}

const initDate = moment().locale("id");
updateDate()