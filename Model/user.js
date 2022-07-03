class User{
    constructor(name, password){
        this.name = name;
        this.password = Symbol(password);
    }

    checkPassword(password){
        return this.password.toString() == Symbol.for(password).toString();
    }
}