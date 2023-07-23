// let str = " alsi'ddin' \n class \t name "
// let str1 = ' alsi"ddin" \n  \' class \t name '
// let str2 = ` alsi"ddin" \n  \' 'class' \t name
//  ${str} 
//  ${str1}
// `


//  let str = "zz"
//  let str2 = new String("Asliddin")

//  console.log("Asliddin" === str ) // true 
//  console.log(str2 === str ) // false 
//  console.log(str2); //[String: 'Asliddin']
//  console.log(str2.valueOf() === str ) // true 
// // yoki 
// console.log(str2.localeCompare(str))// 0=> ha bor degani 1=> qisman -1 => yo'q degani  xuddi includes bormi degani kabi 

//  let str = "Asliddin"
 
//  str[-1] = "B" //immutable
//  console.log(str[-1]) // A 
//  console.log(str.at(-2)) // A 
//  console.log(str.charAt(-1)) // A 


let str = "asl jon sds"

//  const Capitaliza =(str)=>{
//     let half = str.split(" ")
//     let  result = ""
//     for(item of half){
//         let sk = item.charAt(0).toUpperCase() + item.slice(1)
//         result =result +" "+ sk
//     }
//     result = result.trim()
//     return result
//     }

// console.log(Capitaliza(str));

//  const Capitaliza2 =(str)=>{
//     let res = ''
//     for(i in str ) res += (str[i - 1] === " " || str[i - 1] === undefined)?  str[i].toUpperCase(): str[i]
//     return res
//  }

// console.log(Capitaliza2(str),"  SAFASasdasda");
//  ================== Veryyyyyyyyyyyyyyyyyy Qiyin =============================

let str2 = " wbbrraaawwwwweree"
// const distangblish = (str)=>{
    //     let res = ""
    //     let res2 =""
    //     let sum = 0
    //     for (i in str){
        //         if(str[i] !== str[i-1]){
            //             res = res + str[i]
            //             sum = 0
            //         }
            //         else{
                //             sum ++
                //             res +=  sum+1
                //         }
                //     }
                
                //     for(i in res){
//         if(!isNaN(res[i] - res[i-1])){
//             res2= res2.substr(0,res2.length -1) + res[i]
//         }
//         else{
    //             res2 += res[i]
    //         }
    //     }
    //     return res2
    // }
    // console.log(distangblish(str2))
    
    //  ================== Veryyyyyyyyyyyyyyyyyy Qiyin  Bratish =============================
    
    // const Duble =(str)=>{
        //     let result = ''
        //     for(i of str ){
            //         result += (i + i);
            //     }
            //     return result
            // }
            //  console.log(Duble(str))
            // str = str.substr(1, str.length-2)
            
// =============================== PAlintron ==========================     
let str3 ="snsns"
const isPal =(strs)=>{
    let str =strs
    for(let i = 0 ; i < str.length; i++) str.charAt(0) === str.at(-1) && (str = str.substr(1, str.length-2))
        return str.length >1 ? "Yo'q palintron emas" : "Ha palintron"
    }
    
console.log(isPal(str3));
//  ======================  slice  =========================
// str = 'asliddin Jons  '
// console.log(str.padEnd( 11,"."))
// // return “aslidd..”
// str = str.substring(2)  // 1-indexdan to oxirigacha degani 
// console.log(str)
// str = str.slice(1,3) // bu degani 1-indexdan 3-idexgacha kesish degani 
// console.log(str)
// console.log(str.slice(0, 2)) // accept -+

//  ======================  substring  =========================
// console.log(str.substring(2,0)) // switch greate value 
// console.log(str.substr(2,5)) // substr(index, length) // accept -+ 

// console.log(str.split("",2));
// console.log(str.concat("Bro"))
// let newStr =new String("Asliddin")
// console.log(newStr.valueOf())

// ===================================== replace ==================

// let str = " webweb developer web site webIpad" #$%^&
// console.log(str.replace("web", "WEB")) //WEB developer website webIpad
// console.log(str.replaceAll("web", "WEB")) //WEB developer website webIpad
// console.log(str.replace(/web/ig, "WEB")) //WEB developer WEBsite WEBIpad // ignor global

 

// const replaceFull =(str,old,news)=>{
    
// }
// replaceFull(str,"web")



let a =1122264324324 
const maxOne =(a)=>{
    let bin = a.toString(2)
    record = 0
    arr =bin.split("0")
    let result = arr.map((val,index)=>{
        return val.length
    } )
    console.log(bin)

    record = Math.max(...result)
    return record

}

console.log(maxOne(a));
const maxOnes =(a)=>{
    let bin = a.toString(2)
    record = 0
    res = 0
    for(i of bin){
        if(i == true) {
            record ++ 
        }
        else{
            record > res ? res = record : record = 0
        }

    }
    return res
}
console.log(maxOnes(a))
