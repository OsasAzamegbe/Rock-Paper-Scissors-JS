class Game{
    constructor() {
        this.userScore = document.getElementById("user-score");
        this.compScore = document.getElementById("comp-score");
        this.choice = ['rock', 'paper', 'scissors'];
    }

    // returns 0, 1 or 2
    getRandom(upper){
        return Math.floor( Math.random() * Math.floor(upper));
    }
    
    // user chooses paper
    paper(){
        const user = 'paper';
        const comp = this.choice[this.getRandom(3)];
        this.evaluateScore(user, comp);
    }

    // user chooses paper
    rock(){
        const user = 'rock';
        const comp = this.choice[this.getRandom(3)];        
        this.evaluateScore(user, comp);
    }

    // user chooses paper
    scissors(){
        const user = 'scissors';
        const comp = this.choice[this.getRandom(3)];
        this.evaluateScore(user, comp);
    }

    // evaluate the scores
    evaluateScore(user, computer){
        let userScore = parseInt(this.userScore.textContent);
        let compScore = parseInt(this.compScore.textContent);
        console.log(user, computer);

        // if it is not a draw
        if (user != computer){
            if (user === 'paper'){
                if (computer === 'rock'){
                    userScore ++;
                } else{
                    compScore ++;
                }
            }
            if (user === 'rock'){
                if (computer === 'scissors'){
                    userScore ++;
                } else{
                    compScore ++;
                }
            }
            if (user === 'scissors'){
                if (computer === 'paper'){
                    userScore ++;
                } else{
                    compScore ++;
                }
            }

            // increment scoreboard
            this.userScore.textContent = userScore;
            this.compScore.textContent = compScore;
        }
    }
    
}
function eventListeners() {
    const game = new Game();
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    rock.addEventListener("click", (e)=>{        
        e.preventDefault();
        game.rock();
    });

    paper.addEventListener("click", (e)=>{
        e.preventDefault();
        game.paper();
    });

    scissors.addEventListener('click', (e)=>{
        e.preventDefault();
        game.scissors();
    });
};

document.addEventListener('DOMContentLoaded', (e)=>{
    eventListeners();
});