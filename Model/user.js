const MAX_SCORE = 10

class User
{
    constructor(name)
    {
        this.name = name;
        this.playerLevel =  1;
        this.moveCount = 0;
        this.boardSize = 0;
        this.joinDate = Date.now;
    }

    calculateScore()
    {
        return maxScore - this.moveCount
    }
}