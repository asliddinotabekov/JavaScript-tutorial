// let data ="Lorem ipson ...... "
// console.log(data)

// let text; // o'zgaruvchi bor ammo qiymati yo'q
// console.log(text)// undefine
// console.log(text1)// varible yoq bolsa error beradi // "name" is not define
// let a=b=c=3
// console.log(a,b,c)// 3 3 3


let a;  // konfet yoq va qog'ozini ham tashavorgan
console.log(a) //undefined
console.log(typeof a) //undefined
console.log(undefined+1) //NaN


let b = null // konfet yoq va qog'ozi bor 🤕 
console.log(b) // null 
console.log(typeof b) //object 
console.log(null+1) // 1 => yanni arifmetik amal ishlash imkoniga ega bolamiz va istalgan data typga biriktirib ketishimiz mumlin 

console.log(a == b )//true 
console.log(a === b )// false 

// let a = Symbol("text")
// let a = Symbol("text")

// console.log(a == b )//false
// console.log(a === b )// false 

let arr =["Jon",12,"Doe"] // arryda malumotlar "index" bilan chaqiriladi "umumiy qismi " 
console.log(arr)// ["Jon",12,"Doe"]
console.log(arr[0])  //"Jon" ya'ni index orqali chaqiramiz


let obj ={name:Jon , id: 1} // key 
console.log(obj) //{name:Jon , id: 1}
console.log(obj.name) // "Jon" key orqali chaqiramiz

const test=()=> {
console.log(obj)
console.log(obj.name)
}
test()


// let a = 1 
// let a = 1
console.log(a === a ) // true "Primitive" data
// valueni taqqoslaydi 
console.log({b} == {a} ) // false "Non-primitive" data 
// linkni taqqoslaydi 
// biz Stack dagi joyni taqqoslaymiz ammo non-primitivening 
// qiymati Heapda boladi
