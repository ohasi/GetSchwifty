class GameController{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
        this.view.generateBoard.addEventListener("click", () => this.generateBoard());
    }
    
    generateBoard()
    {
        let board = model.generateBoard(view.boardSize);
        view.generateView(board, this.tryMoveSquare);
    }

    tryMoveSquare(row,column)
    {
        if(model.board.changePlaces(row,column))
        {
            var board = model.state;
            view.generateView(board, this);
        }
    }
}

var usersStore = new UsersStore();
var prevStore = JSON.parse(localStorage.getItem('usersStore'));
if(prevStore != null)
{
    usersStore.users = new Map(Object.entries(prevStore.users));
    usersStore.activeUser = prevStore.activeUser;
}
localStorage.removeItem('usersStore');
var view = new GameView();
var model = new Model(usersStore);
var controller = new GameController(view, model);