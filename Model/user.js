class User{
    constructor(name)
    {
        this.name = name;
        this.playerLevel =  1;
        this.moveCount = 0;
        this.boardSize = 3;
        this.joinDate = Date.now;
    }
}