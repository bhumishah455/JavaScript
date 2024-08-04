const name = "bhumi"
const repocount = 45

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gameName = new String('bhumiert')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('u'))

console.log(gameName.substring(0,4))
console.log(gameName.indexOf('u'))

const newString = gameName.slice(-4,4)
console.log(newString)

const anotherString = gameName.substring(0,4)
console.log(anotherString)

const newStringOne = "   bhumi   "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://bhumishah.com/bhumi%23shah"

console.log(url.replace('%23','-'))

console.log(url.includes('bhumi'))

console.log(gameName.split('i'))