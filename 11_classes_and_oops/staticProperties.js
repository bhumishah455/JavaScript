class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    /*
    Static class methods are defined on the class itself.
    You cannot call a static method on an object, only on an object class.
    */

    static createId(){       
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())   // give error after defining method as static

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
//console.log(iphone.createId());       // give error after defining method as static