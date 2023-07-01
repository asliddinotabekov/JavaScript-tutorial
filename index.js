    // let i = 1
    // while(i<7){
    //     console.log(i)
    //     i ++ 
    // }

    // do{
    //     console.log(i)
    //     i--
    // }while(i == 0)
// let names = "Tashqi"
//     const test =()=>{
//          names = "Ichki"
//         console.log(names)
// }
// test()
// console.log(names)
      
// function func() {
//     let a = 'Geeks';
     
//     if (true) {
//          a = 'GeeksforGeeks';  // New value assigned
//         console.log(a);
//     }
     
//     console.log(a);
// }
// func();

// var a = 'Geeks "A"';
// let b = 'Geeks "B"';
// function func() {
     
//     if (true) {
//          a = 'Copy ""a""'; // Legal Shadowing
//          b = 'Copy ""b""'; // Illegal Shadowing
//         console.log(a); // It will print 'GeeksforGeeks'
//         console.log(b); // It will print error
//     }
// }
// func();
// console.log(a)
// console.log(b)

// const telegram =(name , surname)=>{
//     console.log(name,surname || "")
// }
// telegram("aslsa",)

// function outer(b,c) {
//     function inner(a=c) {
            
//           console.log(a+b);
//      }
//     return inner();
//  }
//  outer(11,2)
// ================================== function with return ==============================================================//

// const getGpa = (a=0,b=0,c=0,d=0)=>(a+b+c+d)/4

// console.log(getGpa(12,21,21,32)) 
// let Info ={
//     name: "Asliddin",
//     age : 18,
//     founded: 2022
//     }
//     Info.name = "Hasan"
//     console.log(Info.name) // Hasan


// let name = "Sdfafasfa"
// let age = 12
//     let Info ={
//         name:name,
//         age : age ,
//         }
//         console.log(Info)



// const In1 ={
//     name: "Asliddin", 
//     age:18
//     }
//     const In2 ={
//     name: "Asliddin", 
//     age:18
//     }
//     const In3=In1

//         console.log(In1 === In2); // false
//         console.log(In1 === In3); // true
    
    const In1 ={
        name: "Asliddin", 
        age:18
        }
    
        const In3={}
        Object.assign(In3,In1)
        console.log(In3)// { name: 'Asliddin', age: 18 }


            console.log(In1 === In3); // false                              

    for(let i in In1 ){
        console.log(In1[`${i}`])
    }