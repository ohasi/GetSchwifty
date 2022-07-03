class View{
    constructor()
    {
        this.login = document.getElementById('login');
        this.signup = document.getElementById('signup');
        this.username = document.getElementById('username')
        this.password = document.getElementById('password');
    }

    startGame(){
        window.location = "/game.html";
        return new GameView();
    }
}