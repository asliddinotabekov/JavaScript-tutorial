// let obj={
//         id:1,
//         name:"WebBrain"
//     }
// for (let i in obj){
//     console.log(i);
// }

 // ===============2 ====

//  for (let i in obj){
//     typeof obj[`${i}`] === "number" && console.log( i );
// }


//  ======================================================================================// 
// let obj1={
//         id:1,
//         name:"WebBrain",
//         offline:true,
//         online:true,
//         individual:false
//     }

//     for (let i in obj1){
//         typeof obj1[`${i}`] !== "boolean" && delete obj1[`${i}`]
//     }   
//     console.log(obj1,"")

 // ===========================================================================================//
//  let obj2={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
//     for (let i in obj2){
//         console.log(typeof obj2[`${i}`])
//         typeof obj2[`${i}`] !== "string" && delete obj2[`${i}`]
//     }   
    
// console.log(obj2)
 // ===========================================================================================//


// let obj3={
//       id:1,
//       name:"atirgul",
//       color:"qizil",
//       count:10,
//       price:"10$"
//     }
// function searchValue(obj, type){
//     let res = []
//     for(let i in obj){
//         if( typeof obj[`${i}`] !== "string" ){
//            delete obj[`${i}`]       
//         }
//     }
//     for(let i in obj){
//         if( typeof obj[`${i}`] === "string" ){
//            res.push(obj[`${i}`] )       
//         }
//     }
//     console.log(res);
//     return res
// }
//    searchValue(obj3,"string") 
//     console.log(obj3)



 // ===========================================================================================//


//     let person = {
//             id: 1,
//             name: 'Odil',
//             age:78,
//             child: {
//                 id: 1,
//                 name: 'Ali',
//                 age:48,
//                 child: {
//                     id: 1,
//                     name: 'Umar',
//                     age:20
//                 }
//             }
//         }
// let sum =null; while(person){ 
//      sum += person.age 
//      person = person.child
//     }
//   console.log(sum);



 // ===========================================================================================//



// let arr=[
//         {id:1,name:'Usmon',job:'developer'},
//         {id:2,name:'Usmon',job:'developer'},
//         {id:3,name:'Usmon'},
//         {id:4,name:'Usmon',job:'developer'},
//         {id:5,name:'Usmon'}
//     ]

//  const clculJob =()=>{
//     let newArr = []
//     arr.map((val , index)=>{
//         val.job && newArr.push(val)
//     })
    
//    return newArr
// }
// console.log(clculJob())

 // ===========================================================================================//

// let obj={
//     id:1,name:'Usmon',job:'developer'
//     }
// let obj2 = structuredClone(obj)
// console.log(obj2=== obj)
 // ===========================================================================================//
//  let obj = {
//         id: 1,
//         name: 'Usmon',
//         job: 'developer',
//         practice:1,
//         talaba:false
//     }
// const getKridit =(obj)=>{
//     for(let i in obj ){
//         obj[`talaba`] ? obj.kridite = true : obj.kridite = false
//     }
//      return obj 
// }
// console.log(getKridit(obj))


 // ===========================================================================================//



// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age:18,
//     year:2005
// }
// const getAge =(obj)=>{
//         for(let i in obj ){
//             return 2023 - obj[`year`] ===  obj[`age`] ? "Togri" : "NoTogri"
//         }
           
//     }
//     console.log(getAge(obj))

 // ===========================================================================================//

//  const add =(obj,key , val)=>{
//     return obj[key]= val  
//  }
//  add(obj,"job",true )
//  console.log(obj);

 // ===========================================================================================//

//  let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:2
// }
// const getAge =(obj)=>{
//             for(let i in obj ){
//                 return obj[`practice`]  >  1 ? "Qabul qolindi " : "Ming bor uzur"
//             }
               
//         }
//         console.log(getAge(obj))
    
// chiqish
// qabul qilindi


 // ===========================================================================================//



// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'},
//     {id:2,name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'},
// ]

// const logIn =(name , parol)=>{
//     let result = {}
//     let res =arr.map((val,index)=>{
//         return ( val.name === name && parol === val.parol) ?  result.ha =true: result.yoq =true
//         })
//         return ("ha" in result )? "XUsh kelibsiz": "Parol yoki name notog'ri"
// }
// console.log(logIn("Usmon","1231") )
// // logIn('Salohiddin','3421') => .hush kelibsiz


 // ===========================================================================================//


// obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }

// const isObj =(obj)=>{
//     let result = new Object()
//     for(let i in obj ){
//         typeof obj[`${i}`] === "object" ? result.object = true : result.isnotobj =true
//     }
//     return "object" in  result ? 'Ha object mavjud ' : "object mavjud emas "
// }
// console.log(isObj(obj))

 // ===========================================================================================//

// talaba oz malumotlarini toldirmoqda. sizga object va massiv berilgan. massiv ichida uzbekiston viloyatlari berilgan. agar talaba massiv ichidagi viloyatlardan boshqa tanlasa bizning filallarimiz faqat shu viloyatlarda degan natija chiqsin.
// let person = prompt()
// arr=['Andijon','Namangan','Qarshi','toshkent']
// const accept = ()=> { 
//     let result = new Object()
//     arr.map((val)=>val.toLowerCase() ===  person.toLowerCase()? result.ok = true : result.not = true)
//     console.log(result)
//     return "ok" in result ? "Ha bunaqa filialimiz mavjud ": "Yo'q bu shaharda filialimiz mavjud emas "
// }
// accept()

// ===========================================================================================================================// 


// const ran =(min,max)=>{
//     let half =Math.ceil(Math.random()*max)
//     if (half < min){
//         half = Math.round(max- half * 0.7)
//         console.log(half ,"falshif")
//     }else{
//         console.log(half,"origin")
//     }

// }
// ran(100,500)
// ===========================================================================================================================// 

// let num = 17
// let biner = num.toString(2)
// let bir = null
// let nol = null
// for(i of biner){
//     +i ? bir ++ :nol ++ 
// }
// console.log(bir,nol);
// console.log(biner)

// let sr ={}
// let sr1 ={}
// console.log(sr === sr1);
// ===========================================================================================================================// 

// let str  = "Asliddin otabekov"
// console.log(str.localeCompare("as"))
// const LocCom =(str,search)=>{
//     let result = str.localeCompare(search)
//     let sss = ""
//     switch(result){
//         case 1 : return "Qisman Mavjud" ; break
//         case 0 : return "toliq mavjud" ; break
//         case -1 : return "Mavjud emas"; break
//     }
// }

// console.log(LocCom(str, "as"));

// x






 



// let d = 12121.212121
//  console.log(d.toFixed(3));
//  let str = String("aaaasss")
//  console.log(str.toUpperCase());

// const Wb =(num1 , num2)=>{
//     let max = Math.max(num1, num2)
//     let min = Math.min(num1, num2)
//     return max-min
// }
// console.log(Wb(12,211))

// let a = "122.2a21"
// console.log(Number(a))
// console.log(Number.parseInt(a))
// console.log(Number.parseFloat(a))

// console.log(str[-1]) // A 
// console.log(str.at(-2)) // A 
// console.log(str.charAt(1)) // 




let str = "webbaQ^1dfualsfkjladsfhaslfh8734012432984122@!@@!&*^@*a!12=-1"
const Letter =(char, )=>{
    let result = {}
    result.number= char.match(/[0-9]/g).length;
    result.letter= char.match(/[a-zA-Z]/g).length;
    result.character = char.length - (result.number + result.letter)
    return result
}

console.log(Letter(str)) 

const Letter2 =(str)=>{
    let result = {number : null, str:null , char :null }
    for(i of str ){
        if(isFinite(i)) {
            result.number ++
        }
        else if(i.toUpperCase() !== i.toLowerCase()) {
            result.str ++
        }
        else {
            result.char ++
        }
    }
    return result
}
console.log(Letter2(str) ,"dwqdq") 

// ====================================================

// let cashback = "$12$210$"

// const Cash =(cash)=>{
//     let res = cash.replace(/[$]/ig, "")
//     return +res
// }
// console.log(Cash(cashback));

let name = "Asliddin Bro free code"

const trunce =(str,n)=>{
    return str.substr(0,n)
}
console.log(trunce(name,3)    )