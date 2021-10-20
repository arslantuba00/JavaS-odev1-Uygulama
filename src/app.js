//var kullanımı
var sayi1 = 10
var sayi1 ="Tubiş"
console.log(sayi1) // save type olayı yok maalesef ve bir değişken
                   //iki defa tanımlanabiliyor.
//let kullanımı
let sayi1 = 10
/*let*/ sayi1 = "Tubiş"//hata vermemesi için buradaki let anahtarını kaldır.
console.log(sayi1) // çıktıda hata mesajı verir. javascript' te save type yok:/

let student = {id:1,name:"Tuba"}

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan) 
}
save(undefined,student)


