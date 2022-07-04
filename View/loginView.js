class LoginView{
    constructor()
    {
        this.startGameButton = document.getElementById('startGame');
        this.usernameInput = document.getElementById('username');
        this.leaderboard = document.getElementById('highScores');
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

    displayLeaderboard(result)
    {
        let list = document.createElement("ol");
        highScores.forEach(result => {
            let item = document.createElement("li");
            item.innerHTML = `${result.user.name}: ${result.size}*${result.size} in ${result.moves} moves.`
            list.appendChild(item);
        });
        this.leaderboard.firstChild.remove();
        this.leaderboard.appendChild(list);
    }
}