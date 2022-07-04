class GameController{
    constructor(view, model, leaderboard)
    {
        this.leaderboard = leaderboard;
        this.view = view;
        this.model = model;
        this.view.setGenerateBoardClickListener(this.generateBoard);
        this.view.setBoardClickListener(this.tryMoveSquare);
        this.model.board.setsetOnSolvedListener(() => alert('solved'));
    }
    
    generateBoard()
    {
        let board = model.generateBoard(view.boardSize);
        view.generateView(board);
    }

    tryMoveSquare(row,column)
    {
        if(model.board.changePlaces(row,column))
        {
            let board = model.board.state;
            view.generateView(board);
        }
    }
}

var leaderboard = new Leaderboard();
var usersStore = new UsersStore();
var view = new GameView();
var model = new Model(usersStore);
var controller = new GameController(view, model, leaderboard);