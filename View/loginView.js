class LoginView{
    constructor()
    {
        this.startGameButton = document.getElementById('startGame');
        this.usernameInput = document.getElementById('username');
    }

    get username() 
    {
        return this.usernameInput.value;
    }

    setStartGameListener(listener)
    {
        this.startGameButton.addEventListener('click', listener);
    }

    moveToGameView()
    {
        window.location.replace('game.html');
    }
}