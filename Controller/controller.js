class Controller{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.view.login.addEventListener("click", this.login());
        this.view.signup.addEventListener("click", this.onGenerateBoard());
    }

    login(){
        if(this.model.usersStore.login(this.view.username, this.view.password))
        {
            this.view = this.view.startGame();
        }
    }

    signup(){
        if(this.model.usersStore.signup(this.view.username, this.view.password))
        {
            this.login(this.view.username, this.view.password);
            this.view = this.view.startGame();
        }
    }
}