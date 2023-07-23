

usr = {
    name : 'aaa',
    getData(){
        return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then((res) => res.json())
    }
}

function getCache (func){
    let cache = new Map()
    console.log(func)
    return function (x){
        if(cache.has(x)){
            console.log(cache.get(x),"");
            return  cache.get(x)
        }
        return cache.set(x, func())
    }
}


 usr.getData = getCache(usr.getData)



// let usr = {
//   name: "users",
//   getData() {
//     return fetch(`https://jsonplaceholder.typicode.com/${this.name}`).then(
//       (res) => res.json()
//     );
//   },
// };

// function getCached(func) {
//   let cache = new Map();
//   return function (x) {    
//     if (cache.has(x)) {
//       console.log(cache.get(x));
//       return cache.get(x);
//     }
//     let res = func.call(this);
//     return cache.set(x, res);
//   };
// }

// usr.getData = getCached(usr.getData);














    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // }
    
    // function getCached(func) {
    //     let cache = new Map();
    //     return () => {
    //         let x = undefined
    //         if (cache.has(x)) {
    //             console.log(x)
    //             console.log(func);
    //             console.log(cache.get(func));
    //             return cache.get(x);
    //         }
    //         let res = func();
    //         return cache.set(x, res);
    //     };
    // }
    
    // getData = getCached(getData);
    // setInterval(() => {
    //     // getData()
    // }, 0)