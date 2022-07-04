class GameView{
    constructor()
    {
        this.gameView = document.getElementById('game');
        this.userInfo = document.getElementById('user-info');
        this.changeUserButton = document.getElementById('change-user');
        this.generateBoardButton = document.getElementById('generate-board');
    }

    get boardSize()
    {
        return document.getElementById('board-size').value;
    }

    generateView(board)
    {
        let boardView = document.createElement("table");
        for(let i = 0; i < board.length; i++)
        {
            let row = document.createElement("tr");
            for(let j = 0; j < board.length; j++)
            {
                row.appendChild(this.generateCell(i, j, board));
            }
            boardView.appendChild(row);
        }
        this.gameView.firstChild.remove();
        this.gameView.appendChild(boardView);
    }

    setBoardClickListener(func){
        this.boardClickListener = func;
    }

    setGenerateBoardClickListener(func){
        this.generateBoardButton.addEventListener("click", func);
    }

    generateCell(row, column, board)
    {
        let cell = document.createElement("td");
        cell.addEventListener("click", () => this.boardClickListener(row,column));
        cell.innerHTML = board[row][column];
        return cell;
    }
}