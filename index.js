
    // obj = {name: "Asliddin "}
    // obj1 = {name: "Asliddin "}
    // obj2= obj 
    // // obj2 = {child:{name:"asljons"}}
    // obj = null 
    // console.log(obj)// null 
    // console.log(obj2)//  { name: 'Asliddin ' }

    // let user = {
    //     name:"Asliddin" ,
    //     saidHi : function () { 
    //         return ()=> {
    //             console.log(`Hi, ${this.name}`);
    //         }
    //     }
    // }
    //     user.saidHi()()

        // let user = {
//   name: "webbrain",
//   sayHi() {
//     // console.log(`Hi, ${user.name}`);
//     console.log(`Hi, ${this.name}`);
//   },
//   getName: function () {
//     return () => {
//       console.log(`Hi, ${this.name}`);
//     };
//   },
// };

// // user.sayHi();
// let usr = user;
// // user = null;
// // usr.sayHi();

// usr.getName()();

// function getName(name){
//     this.name =name
//     this.sayHi = ()=>{
//         return this
//     }
//     // console.log(this)
// }
// console.log( new getName("eshmat").name) // functoin o'zini nazarda tutadi 
// console.log( new getName("toshmat").sayHi()) 
// // local varibleni glabal holatda ham foysdalana olamiz 

// new getName() // func ichidagi ma'lumotni nazarda tutadi 

// let id = Symbol("id")
// let id1 = Symbol("id1")
// let id2 = Symbol("id2")
// let name = "symble"
// let obj = {
//     [id] : "Asliddin", //  Symbol("id"): "Asliddin", => ga teng     
//     [id1] :24523, 
//     [id2] :"Otabekovsss", // dynamic
//     id2 :"Otabekov", // teng
//     ["id2"] :"Otabekov",// teng
//     'id2' :"Otabekov",// teng
//     [name] : "qale "
// }
// // biz get qilishda ham set qilishda ham [] foydalanishimiz mumkin 
// // console.log(obj[id1])


// let obj = {
//     name : "Ali", 
//     title :'Axmat Uz ', 
//     age : 18 , 
//     child: {
//         name: "Asad", 
//         surname : 'Akbarjon'
//     }
// }

// let {name: newName, age , title ,child, child:{name, surname}} = obj
// // agar biz : keyin {} yozsak ichidagini nazarda tutadi o'zini yozadigan bolsak o'ziini nazarda tutadi 
// // doim takrorlanadigan kodeni oldini olish uchun biz objectning ichidan ajratib olishga aytiladi va distructure bolgan ma'lumot xuddi varible yasalganga o'xshaydi     

// console.log(surname)



// let obj1 = {
//     name : "Ali", 
//     title :'Axmat Uz ', 
    
// }

// let obj2 ={
//     age : 18 , 
//     child: {
//         names: "Asad", 
//         surname : 'Akbarjon'
//     },
// }

// Object.assign(obj1,obj2)
// console.log(obj1)
// obj3 = {...obj1,...obj2.child}

// console.log(obj3)

// let a = 0 || 20
// console.log(a);

// let obj = {a: 1 , b:2}

// let {a:first,b:second} = obj
// console.log(second)
// let x =  true + '1'
// console.log(x)

// const obj = {
//     name: "Asl"
// }

// const newObj = {}
// Object.assign(newObj,obj) // 1-usul 

// =========================

// const newObj = structuredClone(obj)
// =========================

// const newObj = {...obj}

// console.log(newObj === obj);

// let num = [1,2,3,4,5,6,6]
// let sum = null 
// num.map((value,index)=>{
//     sum += value 
// })
// console.log(sum)

// console.log(9_999_999_999_999_999)
// console.log(Math.sign('-01'));
// console.log(Math.sign('101'));
// console.log(Math.sign(-0));
// console.log(Math.sign(0));
// console.log(Math.sign("1212e2"));
// let str = "endklaskf;dsk00c \t cda"
// str.substring()
// console.log(str)
// console.log(0.1 + 0 );
// let str = "we;wdfnsd"


// const harf=(str)=>{
//     let result= {}  
//     for (i of str) i in result ? result[i]++ : result[i] = 1
//     return result
// }
// console.log(harf(str))

// // console.log(Object.is("saasa","saas"))
// console.log(isNaN("1a"));

// const sss =(srt)=>{
//     let numstr = ""
//     for (i of str){

//         if(!isNaN(i)){
//             numstr += i
//             console.log(i)
//         }
//     }
//     return Number(numstr)
// }
// console.log(sss(str))

let sl = "asasas"
 sl =sl.substr(0,sl.length -1)
console.log(sl);