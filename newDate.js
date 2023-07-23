// obj =  {name: "Asliddin",age:18}
// let {age:yosh,name,data:{surname:familya}} = {name: "Asliddin",age:18, data:{surname:"Xoliq"}}
// console.log(familya)
// yo'q bolgan keylar undefine qaytaradi

// ======================================================

// let ar = ["apple","orange","kiwi","dfgdf"]

// let [bir , ikki , uch] = ar
// indexga qarab distructure boladi
// let [bir , ...res ] = ar

// console.log(bir)
// ======================================================

// const getData =({id,name})=>{
//     console.log(id);
// }
// getData({name:"Asliddin",id:1})

// ======================================================

// const getData =(data = {})=>{
//     console.log(data?.id);
// }
// getData()
// ======================================================

// let data = {name: "Asliddin",age:18, form:2020}

// Object.entries(data).map(([key,value],index)=>{
//     console.log(key,value)
// })


// let map = new Map([
//     ['name',"Asliddin"],
//     ['desc',"Web"]
// ])
// let gen = {name:map}
// map = null
// console.log(gen.name)

// n= 3
// const sum =(n)=>{
//     count = n
//     if(n ===1){
//         return 1
//     }else{
//         count += n
//         return sum(n-1)
//     }
//     console.log(count)
// }
// sum(n)

// [
//             {salary:9000},
//             {salary:5000}
//         ],
let comp = {
    sales: [
        { salary: 1000 },
        { salary: 1000 }
    ],
    develop: {
        sites: [
            { salary: 1000 },
            { salary: 1000 }
        ],
        inter: [
            { salary: 1000 },
            { salary: 1000 }
        ],
        frontends: {
            dovlads: {
                saas: [
                    { salary: 1000 },
                    { salary: 1000 }
                ],
                hakim: {
                    hukim: [
                        { salary: 1000 },
                        { salary: 1000 }
                    ],
                    yarson: {
                        harson: [
                            { salary: 1000 },
                            { salary: 1000 }
                        ],
                        Narson: [
                            { salary: 1000 },
                            { salary: 1000 }
                        ]
                    }
                }

            }
        }
    }
}

let user = {
    id: 1,
    name: 'Odil',
    age: 78,
    children: [
        {
            id: 1,
            name: 'Umar',
            age: 54,
            children: [
                { id: 1, name: 'Asmo', age: 34 },
                { id: 2, name: 'Osim', age: 30 },
                { id: 3, name: 'Xattob', age: 25 },
            ]
        },
        { id: 2, name: 'Umar', age: 54 },
        { id: 3, name: 'Umar', age: 54 },
    ]
}
const getCalc = (par) => {
    if (Array.isArray(par)) {
        return par.reduce((prev, current) => prev + current.salary, 0)
    } else {
        calc = null
        for (item of Object.values(par)) {
            console.log(item)
            console.log(calc += getCalc(item), "Amaml")
        }
    }
    return calc
}
console.log(getCalc(comp), "Natija ");

const getAge = (user) => {

}


// str = "/courses/Dasturlash-tilidsadasPythonsadfasdasd/Varble-def-funcdsadasdasdation"
// son = str.lastIndexOf("/")
// console.log(son);
// front = str.slice(son + 1)
// console.log(front)
// str = "/courses/Dasturlash-tilidsadasPythonsadfasdasd/Varble-def-funcdsadasdasdation"

// count = null
// for (i of str) {
//     i === "/" && (count += 1)

// }

// let result = null
// if (count >= 5) {
//     let oxiri = str.lastIndexOf("/")
//     let boshi = str.lastIndexOf("/", oxiri - 1)
//     result = str.slice(boshi + 1, oxiri)
//     let son = str.lastIndexOf("/")
//     result = str.slice(son + 1)
// }

// console.log(isNaN(1))
// console.log(result)

// let str = "Data Type"
// res = str.replace(/ /ig, "%20")
// console.log(res)

// var num = 122
// function as() {
//     var num = 234
//     console.log(num)
// }
// console.log(num);
// as()

// const This = function () {
//     this.name = "Bu Function chaqiryapti"
// }
// console.log(new This().name)

var val = "Var"
// const Constr = new Function(`return val`)
// return Constr

function getFunc() {
    let val = "asa"
    let func = new Function(`return ${val}`)
    return func
}
console.log(getFunc()());

