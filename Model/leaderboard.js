const SCORE_COUNT = 5;
const RESULTS_NAME = "results";

class Leaderboard
{
    constructor()
    {
        this.highScores = [];
        this.loadState();
    }

    addResult(result)
    {
        this.highScores.push(result);
        this.highScores.sort((result1, result2) => result2.score-result1.score);
        while(this.highScores.length > SCORE_COUNT)
        {
            this.highScores.pop();
        }
        this.saveState();
    }

    saveState()
    {
        localStorage.setItem(RESULTS_NAME, JSON.stringify(this.highScores));
    }

    loadState()
    {
        let results = localStorage.getItem(RESULTS_NAME);
        if(results != undefined)
        {
            this.highScores = JSON.parse(results);
        }
    }
}