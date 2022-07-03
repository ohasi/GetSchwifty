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
        if(model.usersStore.signup(view.getUsername(), view.getPassword()))
        {
            controller.login();
        }
    } 
    
    login()
    {
        if(model.usersStore.login(view.getUsername(), view.getPassword()))
        {
            view.startGame();
        }
    }
}

var view = new LoginView();
var usersStore = new UsersStore();
var model = new Model(usersStore);
var controller = new LoginController(view, model);