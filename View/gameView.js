class GameView{
    constructor(listener)
    {
        this.view = document.getElementById('game');
        this.userInfo = document.getElementById('user-info');
        this.changeUser = document.getElementById('change-user');
        this.generateBoard = document.getElementById('generate-board');
        this.firstClick = 0;
    }

    get boardSize()
    {
        return document.getElementById('board-size').value;
    }

    generateView(board, onClickListener)
    {
        let boardView = document.createElement("table");
        for(let i = 0; i < board.length; i++)
        {
            let row = document.createElement("tr");
            for(let j = 0; j < board.length; j++)
            {
                row.appendChild(this.generateCell(i, j, board, onClickListener));
            }
            boardView.appendChild(row);
        }
        this.view.firstChild.remove();
        this.view.appendChild(boardView);
    }

    generateCell(row, column, board, onClickListener)
    {
        let cell = document.createElement("td");
        cell.addEventListener("click", () => onClickListener(row,column));
        cell.innerHTML = board[row][column];
        return cell;
    }
}