// fonksiyona gönderilen iki sayının arkadaş sayı olup olmadıklarını bulan program
let sayi1 = 221
let sayi2 = 284

function friedsNumber(num1,num2) {
    let total1 = 0
    let total2 = 0
    for( let i = 0; i<num1; i++ )
    {
        if(num1 % i == 0)
        {
            total1 += i
        }
    }

    for( let j = 0; j<num2; j++ )
    {
        if(num2 % j == 0)
        {
            total2 += j
        }
    }

    if(num1 == total2 && num2 == total1)
    {
        console.log(num1 + " and " + num2 + " are frieds number :)")
    }
    else
    {
        console.log(num1 + " and " + num2 + " are not frieds number :(")
    }
}
friedsNumber(sayi1,sayi2)