//var kullanımı
var sayi1 = 10
var sayi1 ="Tubiş"
//console.log(sayi1) // save type olayı yok maalesef ve bir değişken
                   //iki defa tanımlanabiliyor.
//let kullanımı
// let sayi1 = 10
// /*let*/ sayi1 = "Tubiş"//hata vermemesi için buradaki let anahtarını kaldır.
// console.log(sayi1) // çıktıda hata mesajı verir. javascript' te save type yok:/

let student = {id:1,name:"Tuba"}

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan) 
}
//save(undefined,student)

let students =["Tuba ARSLAN","Fırat YANIK","Tuna YANIK"]
// console.log(students)

let students2 = [student,{id:2,name:"Fırat"},{id:3,name:"Tuna"},"Ankara",{city:"İzmir"}]
//console.log(students2)

let points = [1,2,3,4,5,22,32,453,44,67,876]
console.log(...points)
console.log("maximum değer: " + Math.max(...points))

console.log("ABC","D","EFG","H")
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let someFunction = function ([small1,small2],number) {
    console.log(small1,small2)
}

someFunction(points)

let category = {id:4,name1:"Elektronik"}
let{id,name1} = category

console.log(category.id)
console.log(category["name1"])//alternatif yazım

console.log("id: " + id)
console.log("Kategori: " + name1)








