
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop( map in objects)
for (const key in myObject) {
    //console.log(key)
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// For Array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for in loop is not work in map, as it is not iterable
// for (const key in map) {
//     console.log(key);
// }