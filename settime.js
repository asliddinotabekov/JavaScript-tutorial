// let timerId = setTimeout(() => console.log("never happens"), 2000);
// timerId// timer identifier

// clearTimeout(timerId);
// console.log(timerId()()); // same identifier (doesn't become null after canceling)
// setInterval(() => timerId, 1000);

let user = [
    { name: "Asli", age: 18, id: 1 },
    { name: "Ilxom", age: 28, id: 2 }
]

function getAgeName(a, b) {
    console.log(this.id, a, b)
}
for (let usr of user) {
    getAgeName.call(usr, "asil", "botir")
}