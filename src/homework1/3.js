//1 ile 1000 sayıları arasındaki mükemmel sayıları bulan program
let sayi = 1000

function perfectNumber(number) {
    
    for (let i = 1; i < number ; i++) {
        let total = 0
        
        for (let j = 1; j < i; j++) {
          
            if(i % j == 0)
            {
                total += j
            }

        }
        if(i == total)
        {
            console.log(i + " is perfect number ")
          
        }
      
    }


}

perfectNumber(sayi)