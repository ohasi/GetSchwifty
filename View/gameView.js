class GameView{
    constructor()
    {
        this.view = document.getElementById('game');
        this.userInfo = document.getElementById('user-info');
        this.changeUser = document.getElementById('change-user');
    }

    generateView(board, onClick){
        let boardView = document.createElement("table");
        for(let i = 0; i < board.length; i++)
        {
            let row = document.createElement("tr");
            for(let j = 0; j < board.length; j++)
            {
                row.appendChild(this.generateCell(i, j, onClick, board));
            }
            boardView.appendChild(row);
        }
        this.view.appendChild(boardView);
    }

    generateCell(row, column, onClick, board){
        let cell = document.createElement("td");
        cell.addEventListener("click", () => onClick(row,column));
        cell.innerHTML = board[row][column];
        return cell;
    }
}