class LoginView{
    constructor()
    {
        this.login = document.getElementById('login');
        this.signup = document.getElementById('signup');
    }

    get username() 
    {
        return document.getElementById('username').value;
    }

    get password() 
    {
        return document.getElementById('password').value;
    }

    startGame()
    {
        window.location.replace('game.html');
    }
}