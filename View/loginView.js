class LoginView{
    constructor()
    {
        this.loginButton = document.getElementById('login');
        this.signupButton = document.getElementById('signup');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
    }

    get username() 
    {
        return this.usernameInput.value;
    }

    get password() 
    {
        return this.passwordInput.value;
    }

    setLoginListener(listener)
    {
        this.loginButton.addEventListener('click', listener);
    }

    setSignupListener(listener)
    {
        this.signupButton.addEventListener('click', listener);
    }

    moveToGameView()
    {
        window.location.replace('game.html');
    }
}