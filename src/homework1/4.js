//1 ile 1000 arasındaki sayılardan asal olanları bulan program
let sayi = 1000

function asalOlanlar(sayii) {

    let sayac = 0
    for(let i = 1 ; i < sayii; i++)
    {
        for(let j =1; j < i; j++)
        {
            if(i % j == 0)
            {
                sayac++
            }
        }
        if(sayac == 1){console.log(i + " sayısı asaldır.")}
        sayac = 0 
    }
    
}
asalOlanlar(sayi)