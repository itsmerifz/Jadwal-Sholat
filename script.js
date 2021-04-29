function waktuSholat(kota) { 
    fetch('https://islamic-api-indonesia.herokuapp.com/api/data/jadwalshalat?kota='+kota)
 .then((respon) => respon.json()).then(function(respon){
    let i = document.getElementById('imsak')
    let s = document.getElementById('subuh')
    let z = document.getElementById('dzuhur')
    let a = document.getElementById('ashar')
    let m = document.getElementById('maghrib')
    let y = document.getElementById('isya')
    let waktu = new Date()
    let tanggal = waktu.getDate() - 1
    let data = respon.result[tanggal]
    let subuh = data.shubuh
    let imsak = data.imsyak
    let dzuhur = data.dzuhur
    let ashar = data.ashr
    let maghrib = data.magrib
    let isya = data.isya

    const kota = document.getElementById('nama-kota')
    kota.innerHTML = "Kota "+ document.getElementById('kota').value
    i.innerHTML = imsak
    s.innerHTML = subuh
    z.innerHTML = dzuhur
    a.innerHTML = ashar
    m.innerHTML = maghrib
    y.innerHTML = isya
 })
}


function cariKota(){
    const kota = document.getElementById('kota').value.toLowerCase()
    if(kota == 'manado'){
        waktuSholat('menado')
    }else if(kota == 'jakarta pusat'){
        waktuSholat('jakartapusat')
    }
    else if(kota == 'jakarta timur'){
        waktuSholat('jakartatimur')
    }
    else if(kota == 'jakarta barat'){
        waktuSholat('jakartabarat')
    }
    else if(kota == 'jakarta selatan'){
        waktuSholat('jakartaselatan')
    }
    else if(kota == 'bandar lampung'){
        waktuSholat('bandarlampung')
    }
    
    waktuSholat(kota)
}

 