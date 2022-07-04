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
                    this.emptyIndex = [i,j];
                }
                values.splice(index, 1);
            }
        }
        return this.state;
    }

    isAdjacentToEmpty(row,column)
    {
        return (Math.abs(row - this.emptyIndex[0]) == 1 && column - this.emptyIndex[1] == 0) ||
                (Math.abs(column - this.emptyIndex[1]) == 1 && row - this.emptyIndex[0] == 0);
    }

    isSolvable()
    {
        let inversionCount = 0;
        let checkableFormat = [];
        this.state.forEach((row) => checkableFormat.concat(row));
        for(let i = 0; i < checkableFormat.length; i++)
        {
            inversionCount += this.countInversions(checkableFormat, i);
        }
    }

    countInversions(arr, startIndex){

    }

    changePlaces(row,column){
        if(this.isAdjacentToEmpty(row,column)){
            this.state[this.emptyIndex[0]][this.emptyIndex[1]] = this.state[row][column];
            this.state[row][column] = '';
            this.emptyIndex = [row, column];
            return true;
        }
        return false;
    }
}