class LoginController{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.view.login.addEventListener("click", this.login);
        this.view.signup.addEventListener("click", this.signup);
    }

    signup()
    {
        if(model.usersStore.signup(view.username, view.password))
        {
            model.usersStore.login(view.username, view.password);
            localStorage.setItem('usersStore', JSON.stringify(model.usersStore));
            view.startGame();
        }
    } 
    
    login()
    {
        if(model.usersStore.login(view.username, view.password))
        {
            localStorage.setItem('usersStore', JSON.stringify(model.usersStore));
            view.startGame();
        }
    }
}

var usersStore = new UsersStore();
var prevStore = JSON.parse(localStorage.getItem('usersStore'));
if(prevStore != null)
{
    usersStore.activeUser = prevStore.activeUser;
}
localStorage.removeItem('usersStore');
var view = new LoginView();
var model = new Model(usersStore);
var controller = new LoginController(view, model);