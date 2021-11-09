// gönderilen sayıların asal olup olmadığını buan program
let sayilar = [13,2,4,91,42,53]

function asalSayiyiBul(...gelenSayilar) {
    
    let sayac = 1
       
    for (let i = 0; i < gelenSayilar.length; i++) {
       
        for(let j = 2; j < gelenSayilar[i]; j++)
        {
            if(gelenSayilar[i] % j == 0)
            {
                sayac++
            }

        }
        if(sayac == 1){console.log(gelenSayilar[i] + " sayisi asaldır.")}
        else{console.log(gelenSayilar[i] + " sayisi asal değildir.")}
        sayac = 1
    }
}

asalSayiyiBul(...sayilar)
