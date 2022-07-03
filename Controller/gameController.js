class GameController{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.view.generateBoard.addEventListener("click", this.generateBoard);
    }

    generateBoard(){
        let board = model.generateBoard(view.boardSize)
        view.generateBoard(board);
    }
}

var view = new GameView();
var usersStore = new UsersStore();
var model = new Model(usersStore);
var controller = new GameController(view, model);