// let ar = [2,3,true,3,5,32,5]
//  console.log(ar.at(-5))


//  let array = [1,2,3,4,5]
// count = null
//  for (i of array ){
//     count += i
//  }
//  console.log(count);


// let array = [ "Asyokks", "Bro", "Freeee", "code"]
// let newArr = []
// count = 1
// outer:for(i in array){
//     newArr.push({})
//     inner: for(j of array[i]){
//          j in newArr[i] ? newArr[i][j] ++ :newArr[i][j] = count
//         console.log(j)
//     }
// }
// console.log(newArr);

// ================================================================


// ar1 = [1,2,3]
// ar2 = [1,2,3]

// const comp= (ar1,ar2)=>{
//     let res = ""
//     if(ar1.length === ar2.length){
//         for(i in ar1){
//             if(ar1[i] === ar2[i]){
//                 res="Ha"
//             } else{
//                 res= "YOq" ;break ; 
//             } 
    
//             console.log(ar1[i]);
//         }
//         return res
//     }
//     else{
//         res= "Yo'q"
//     }
    
//     return res
// }
// console.log(comp(ar2,ar1))

// ==========================================================

//     res= ""
// const camelize =(param)=>{
//     for(i in param ){
//         if(param[i] === "-") {
//             res += ""
//         }
//         else if(param[i-1] === "-"){
//          res += param[i].toUpperCase()
//         }
//         else {
//             res +=  param[i]
//         }
//     }
//     return res
// }
// console.log(camelize("-back-graun-d-color"))


// ==========================================================

// user.splice(0 ,4)

// console.log(user);

// let mator = []
// user.map((val)=>{
    //     if(val.year < 2010){
        //         console.log(val.year)
        //     }
        // })
        
        // user.map((val)=>{
            //    mator.push(val.engine)
//    max =Math.max(...mator)

// })

// console.log(max);
// console.log(mator)



//  num.forEach((val)=> {
    // val +2
    // })
    
    // console.log(num)
    
    // console.log(isNaN(1))
    // let num = [1,1,1,11,11,2,3,3,3,55,55]
    
    // let res = num.reduce(function(sum ,current,i){
        //     console.log(  i ,current, current - i )
        //     return  current - i
        // },0)
        
        // console.log(res)
        // news= []
        // for (i in num) !news.includes(num[i]) && news.push(num[i])
        // console.log(news,res)
        
        // res= num.filter((vl,i,ar)=> ar.indexOf(vl) === i)
        
        // res = new Set(num)
        // console.log(res);
        
        // const Update =(data)=>{
            //     res = user.map((val,index,array)=> val.id === data.id ? {...val, [data.type]:data["value"] }: val) 
            //     return res
            // }
            
            // console.log(Update({id:2, type:"name", value:"Electro Car"}));
            
            // datat = {id:2, type:"name", value:"Electro Car"}
            // console.log({[datat.type]:datat.value})
            
            // const Add =(param)=>{
                //     res = user.map((val,index,array)=>{...user,param})
                //     return res
                // }
                
                // console.log(Add())

// let course = prompt(" 1 => (Dollor -> Sum), 2 => (Sum -> Dollor)")
// if(course == 1){
    //     dol = prompt("$ dollor miqdorini kiriting")
    //     alert(` $${dol} giz ${dol * 11.59 } So'm b'ladi`)
    // }
    // else if (course == 2 ){
        //     sum = prompt("$ Sum miqdorini kiriting")
        //     alert(` $${sum} giz ${sun / 11.59 } So'm b'ladi`)
        // }else{
            //     alert("Mavjud emas")
            // }
            
            
let user =[
    {id: 1, year: 1998, engine: 1, name:"Tico"},
    {id: 2, year: 2004, engine: 1.3, name:"Matiz"},
    {id: 3, year: 2011, engine: 1, name:"Gentra"},
    {id: 4, year: 2017, engine: 1.1, name:"Cobalt"},
    {id: 5, year: 2022, engine: 1.2, name:"Malubu"},
    {id: 6, year: 2000, engine: 1.9, name:"Mers"},
    {id: 7, year: 2005, engine: 1.5, name:"Tracker"},
]
//     function getFilterByName ({key, value}){
//     let res = user.filter((item,inde,arr) =>  item[key].toLowerCase().includes(`${value}`.toLowerCase()))
//     return res
// }
// console.log(getFilterByName({key:"name",value:1}))


// str1= "web"
// str2= "wbe"
// const comprihetion =(str1,str2)=>{
//     res = []
//     for(item of str1){
//         res.push(str2.includes(item))
//     }
//     return !res.some((event) => event === false ) ?"teng":"Tengemas"
// }

// console.log(comprihetion(str1,str2))

// let str = "webbbra@innn accademmiy"

// function Duble(str){
//     res = ""
//     for(i in str){
//     if(str[i-1] !== str[i] ){
//         res += str[i]
//     }
//     }
//     return res
// }
// console.log(Duble(str))

// let str = "webbbr@innn @cc@demmiy"

// function email(str){
//     res = ""
//     for( i of str ){
//         if(i === "@"){
//             res += "a"
//         }
//         else{
//             res += i
//         }
//     }
//     return res


// }
// console.log(email(str))

// let str = "web12rain aca12my "

// const number =()=>{}
// obj ={
//     name:"asa",
//     age:10,
//     child:{
//         name:"asa",
//         age:10,
//         child:{
//             name:"asa",
//             age:10,
//             child:{
//                 name:"asa",
//                 age:10,
//                 child:{
//                     name:"asa",
//                     age:10
//                 }
//             }
//         }
//     }
// }
// obj ={name:"dasd", child:{parent:""}}

// console.log(JSON.stringify(obj,["name","child","parent"],8));

// function Age(obj){
//     count =null
//     while(obj){
//         count  += obj.age
//         obj = obj.child
//     }
   
//     return count
// }
// console.log(Age(obj));

let map = new Map()
let objs = {}
objs.name = "asl"
map.name = "asl"
console.log(objs,map)



