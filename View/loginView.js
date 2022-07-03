class LoginView{
    constructor()
    {
        this.login = document.getElementById('login');
        this.signup = document.getElementById('signup');
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
    }

    getUsername() {
        return this.username.value;
    }

    getPassword() {
        return this.password.value;
    }

    startGame(){
        window.location.replace('game.html');
    }
}