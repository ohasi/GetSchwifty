class Board
{
    constructor(size)
    {
        this.size = size;
    }

    generateBoard()
    {
        this.state = [];
        let values = [...Array(this.size**2).keys()];
        for(let i = 0; i < this.size; i++)
        {
            this.state[i] = []
            for(let j = 0; j < this.size; j++)
            {
                let index = Math.floor(Math.random() * values.length);
                this.state[i][j] = values[index];
                if(this.state[i][j] == 0){
                    this.state[i][j] = '';
                }
                values.splice(index, 1);
            }
        }
        return this.state;
    }
}