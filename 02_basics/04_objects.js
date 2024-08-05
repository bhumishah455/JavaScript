// const utubeUser = new Object()   // singleton obj

const utubeUser = {}  // not singleton

utubeUser.id = "123bs"
utubeUser.email= "bhumi@gmail.com"
utubeUser.isLoggedIn = false

// console.log(utubeUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Bhumi",
            lastName : "Shah"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}

//  const obj4 = {obj1, obj2}
// // console.log(obj4);

// const obj5 = Object.assign(obj1, obj2, obj3)
// console.log(obj5);

// const obj6 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj6);

//mostly used
// const objnew = {...obj1, ...obj2, ...obj3}
// console.log(objnew);

const users = [
    {
        id:1,
        email : "B@gmail.com"
    },
    {
        id:1,
        email : "B@gmail.com"
    },
    {
        id:1,
        email : "B@gmail.com"
    }
]

users[1].email


console.log(utubeUser);

// mostly used
console.log(Object.keys(utubeUser));
console.log(Object.values(utubeUser));
console.log(Object.entries(utubeUser));

console.log(utubeUser.hasOwnProperty('isLoggedIn'));











