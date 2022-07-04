class LoginController{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.view.setStartGameListener(() => this.login());
    }
    
    login()
    {
        this.model.usersStore.signup(this.view.username.trim());
        if(this.model.usersStore.login(this.view.username.trim()))
        {
            this.model.usersStore.saveState();
            this.view.moveToGameView();
        }
    }
}

var usersStore = new UsersStore();
var view = new LoginView();
var model = new Model(usersStore);
var controller = new LoginController(view, model);