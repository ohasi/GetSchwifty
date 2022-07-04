class GameController{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.view.setGenerateBoardClickListener(this.generateBoard);
        this.view.setBoardClickListener(this.tryMoveSquare);
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

var usersStore = new UsersStore();
usersStore.loadState();
var view = new GameView();
var model = new Model(usersStore);
var controller = new GameController(view, model);