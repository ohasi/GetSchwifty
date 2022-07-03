class Model{
    constructor(usersStore){
        this.usersStore = usersStore;
    }

    generateBoard(size){
        this.board = new Board(size);
        return this.board;
    }
}