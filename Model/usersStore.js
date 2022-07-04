const ACTIVE_USER_NAME = "activeUser";
const USERS_NAME = "users";

class UsersStore
{
    
    activeUser;
    users;

    constructor()
    {
        this.users = new Map();
    }

    signup(name, password)
    {
        if(this.users.has(name))
        {
            return false;
        }
        let newUser = new User(name, password);
        this.users.set(name, newUser);
        return true;
    }

    login(name, password)
    {
        if(this.activeUser != undefined || !this.users.has(name) || !this.users.get(name).checkPassword(password))
        {
            return false;
        }
        this.activeUser = this.users.get(name);
        return true;
    }

    logout()
    {
        this.activeUser = undefined;
    }

    saveState(){
        localStorage.setItem(USERS_NAME, JSON.stringify(Object.fromEntries(this.users)));
        localStorage.setItem(ACTIVE_USER_NAME, JSON.stringify(this.activeUser));
    }

    loadState(){
        let activeUser = localStorage.getItem(ACTIVE_USER_NAME);
        let users = localStorage.getItem(USERS_NAME);
        if(activeUser != undefined && users != undefined)
        {
            this.activeUser = JSON.parse(activeUser);
            this.users = new Map(Object.fromEntries(JSON.parse(state)));
        }
    }
}