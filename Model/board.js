class Board
{
    constructor(size)
    {
        this.size = size;
        this.generateBoard();
    }

    generateBoard()
    {
        this.state = [];
        let values = [...Array(size*size).keys()];
        for(let i = 0; i < this.size; i++)
        {
            this.state[i] = []
            for(let j = 0; j < this.size; j++)
            {
                this.state[i][j] = values[Math.floor(Math.random() * values.length - 1)]
            }
        }
    }
}