const ACTIVE_USER_NAME = "activeUser";
const USERS_NAME = "users";

class UsersStore
{
    
    activeUser;
    users;

    constructor()
    {
        this.users = new Map();
        this.loadState();
    }

    signup(name, password)
    {
        if(this.users.has(name) || this.isNameInvalid(name))
        {
            return false;
        }
        let newUser = new User(name);
        this.users.set(name, newUser);
        return true;
    }

    login(name)
    {
        if(this.isNameInvalid(name))
        {
            return false;
        }
        let user = this.users.get(name);
        this.activeUser = user;
        return true;
    }

    isNameInvalid(name)
    {
        return name == "";
    }

    logout()
    {
        this.activeUser = undefined;
    }

    saveState()
    {
        localStorage.setItem(USERS_NAME, JSON.stringify(Object.fromEntries(this.users)));
        localStorage.setItem(ACTIVE_USER_NAME, JSON.stringify(this.activeUser));
    }

    loadState()
    {
        let activeUser = localStorage.getItem(ACTIVE_USER_NAME);
        let users = localStorage.getItem(USERS_NAME);
        if(activeUser != undefined && users != undefined)
        {
            this.activeUser = JSON.parse(activeUser);
            this.users = new Map(Object.entries(JSON.parse(users)));
        }
    }
}