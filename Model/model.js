class Model{
    constructor(usersStore, board){
        this.usersStore = usersStore;
        this.board = board;
    constructor(usersStore){
        this.usersStore = usersStore;
    }

    generateBoard(size){
        this.board = new Board(size);
        return this.board;
    }
}