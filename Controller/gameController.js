
MAX_SCORE=10;

class GameController{
    constructor(view, model, leaderboard)
    {
        this.leaderboard = leaderboard;
        this.view = view;
        this.model = model;
        this.view.setGenerateBoardClickListener(() => this.generateBoard());
        this.view.setChangeUserClickListener(() => this.changeUser());
        this.view.setBoardClickListener((row,column) => this.tryMoveSquare(row,column));
    }
    
    generateBoard(size = this.view.boardSize)
    {
        if(size >= 2)
        {
            this.boardSize = size;
            this.moveCount = 0;
            let board = model.generateBoard(this.boardSize);
            this.model.board.setOnSolvedListener(() => this.onBoardSolved());
            this.view.generateView(board);
        }
        else 
        {
            alert("Board can't be smaller than 2*2")
        }
    }

    changeUser()
    {
        model.usersStore.logout();
        view.moveToLoginView();
    }

    tryMoveSquare(row,column)
    {
        this.moveCount++;
        if(this.model.board.changePlaces(row,column))
        {
            let board = model.board.state;
            this.view.generateView(board);
        }
        else
        {
            this.moveCount--;
        }
    }

    onBoardSolved()
    {
        if(this.model.usersStore.activeUser.level < this.boardSize)
        {
            this.model.usersStore.activeUser.level++;
            usersStore.saveState();
        }
        let today = new Date();
        let result = new Result(this.model.usersStore.activeUser.name, this.boardSize, this.moveCount, this.calculateScore(), 
        `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`);
        leaderboard.addResult(result);
        alert('Board solved! can you solve the next one?');
        this.generateBoard(Number(this.boardSize) + 1);
    }

    calculateScore()
    {
        return ((this.boardSize ** 4) * MAX_SCORE) - this.moveCount;
    }

    displayUserData()
    {

    }
}

var leaderboard = new Leaderboard();
var usersStore = new UsersStore();
var view = new GameView();
var model = new Model(usersStore);
var controller = new GameController(view, model, leaderboard);