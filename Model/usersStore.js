class UsersStore{
    
    activeUser;
    users;

    constructor(){
        this.users = new Map();
    }

    signup(name, password){
        if(this.users.has(name)){
            return false;
        }
        newUser = new User(name, password);
        this.users.set(name, newUser);
    }

    login(name, password){
        if(this.activeUser != undefined || !this.users.has(name) || !this.users.get(name).checkPassword(password)){
            return false;
        }
        this.activeUser = this.users.get(name);
        return true;
    }

    logout(){
        this.activeUser = undefined;
    }
}