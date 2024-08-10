class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher("bhumi", "bhumi@teacher.com", "123")

teacher.logMe();
teacher.addCourse();

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(teacher === User)

console.log(teacher instanceof User);