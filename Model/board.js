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
        if(!this.isSolvable()){
            this.generateBoard();
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
        let inversionCount = this.countInversions(checkableFormat);
        if(this.state.length % 2 == 1)
        {
            return inversionCount % 2 == 0;
        }
        return (inversionCount+this.emptyIndex[0]+1) % 2 == 0;
    }

    countInversions()
    {
        let arr = [].concat(...this.state);
        arr.splice(this.emptyIndex[0]*this.state.length + this.emptyIndex[1], 1);
        if(arr.length == 1){
            return 0;
        }
        
        let count = 0;
        arr.forEach((num) => {
            if(num < arr[0])
            {
                count++;
            }
        })
        return count + this.countInversions(arr.slice(1, arr.length));
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