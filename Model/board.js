const EMPTY_INDEX_NAME = "emptyIndex";
const STATE_NAME = "state";

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
                this.state[i][j] = values.splice(Math.floor(Math.random() * values.length), 1);
                if(this.state[i][j] == 0){
                    this.state[i][j] = '';
                    this.emptyIndex = [i,j];
                }
            }
        }
        if(!this.isSolvable() || this.isBoardSolved()){
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
        let arr = [].concat(...this.state);
        arr.splice(this.emptyIndex[0]*this.state.length + this.emptyIndex[1], 1);
        let inversionCount = this.countInversions(arr);
        if(this.state.length % 2 == 1)
        {
            return inversionCount % 2 == 0;
        }
        return (inversionCount+this.emptyIndex[0]+1) % 2 == 0;
    }

    isBoardSolved(){
        let arr = [].concat(...this.state);
        arr.splice(this.emptyIndex[0]*this.state.length + this.emptyIndex[1], 1);
        if(this.countInversions(arr) == 0){
            console.log("win");
        }
    }

    countInversions(arr)
    {
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
            this.isBoardSolved();
            return true;
        }
        return false;
    }

    saveState(){
        localStorage.setItem(EMPTY_INDEX_NAME, JSON.stringify(this.emptyIndex));
        localStorage.setItem(STATE_NAME, JSON.stringify(this.state));
    }

    loadState()
    {
        let emptyIndex = localStorage.getItem(EMPTY_INDEX_NAME);
        let state = localStorage.getItem(STATE_NAME);
        if(emptyIndex != undefined && state != undefined)
        {
            this.emptyIndex = JSON.parse(emptyIndex);
            this.state = JSON.parse(state);
        }
    }
}