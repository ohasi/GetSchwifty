class LoginController{
    constructor(view, model, leaderboard)
    {
        this.leaderboard = leaderboard;
        this.view = view;
        this.model = model;
        this.view.setStartGameListener(() => this.login());
        this.displayLeaderboard();
    }
    
    login()
    {
        this.model.usersStore.signup(this.view.username.trim());
        if(this.model.usersStore.login(this.view.username.trim()))
        {
            this.view.moveToGameView();
        }
    }

    displayLeaderboard()
    {
        if(leaderboard.highScores.length != 0)
        {
            view.displayLeaderboard(leaderboard.highScores);
        }
    }
}

var leaderboard = new Leaderboard();
var usersStore = new UsersStore();
var view = new LoginView();
var model = new Model(usersStore);
var controller = new LoginController(view, model, leaderboard);