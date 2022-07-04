class LoginController{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.view.setLoginListener(this.login);
        this.view.setSignupListener(this.signup);
    }

    signup()
    {
        if(model.usersStore.signup(view.username, view.password))
        {
            model.usersStore.login(view.username, view.password);
            model.usersStore.saveState();
            view.moveToGameView();
        }
    } 
    
    login()
    {
        if(model.usersStore.login(view.username, view.password))
        {
            this.login();
        }
    }
}

var usersStore = new UsersStore();
usersStore.loadState();
var view = new LoginView();
var model = new Model(usersStore);
var controller = new LoginController(view, model);