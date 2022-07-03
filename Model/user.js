class User{
    constructor(name, password)
    {
        this.name = name;
        this.password = Symbol(password);
        this.playerLevel =  1;
        this.moveCount = 0;
        this.boardSize = 3;
        this.joinDate = Date.now;
    }

    checkPassword(password)
    {
        return this.password.toString() == Symbol.for(password).toString();
    }
}