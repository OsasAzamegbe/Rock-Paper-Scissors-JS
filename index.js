class Game{
    constructor() {
        this.userScore = document.getElementById("user-score");
        this.compScore = document.getElementById("comp-score");
        this.choice = ['rock', 'paper', 'scissors'];
        this.showTurn = document.getElementById("show-turn");
        this.hands ={
            'rock': `<span class="text-center">
                        <p class="h5 font-monospace text-uppercase">rock</p>
                        <i class="fas fa-hand-rock"></i>
                    </span>`,
            'paper': `<span class="text-center">
                        <p class="h5 font-monospace text-uppercase">paper</p>
                        <i class=" fas fa-hand-paper"></i>
                    </span>`,
            'scissors': `<span class="text-center">
                            <p class="h5 font-monospace text-uppercase">scissors</p>
                            <i class="fas fa-hand-scissors"></i>
                        </span>`,
            'win': `<span class="text-center">                        
                        <i class="fas fa-check"></i>
                    </span>`,
            'loss': `<span class="text-center">                        
                        <i class="fas fa-times"></i>
                    </span>`,
            'draw': `<span class="text-center">                        
                        <i class="fas fa-bars"></i>
                    </span>`,
            'face': `<span class="">
                        <i class="fas fa-user-circle"></i>
                    </span>`,
            'robot': `<span class="">
                        <i class="fas fa-robot"></i>
                    </span>`
        };
    }

    // returns 0, 1 or 2
    getRandom(upper){
        return Math.floor( Math.random() * Math.floor(upper));
    }
    
    // user chooses paper
    paper(){
        const user = 'paper';
        const comp = this.choice[this.getRandom(3)];
        const result = this.evaluateScore(user, comp);
        this.showCurrentTurn(user, comp, result);
    }

    // user chooses paper
    rock(){
        const user = 'rock';
        const comp = this.choice[this.getRandom(3)];        
        const result = this.evaluateScore(user, comp);
        this.showCurrentTurn(user, comp, result);
    }

    // user chooses paper
    scissors(){
        const user = 'scissors';
        const comp = this.choice[this.getRandom(3)];
        const result = this.evaluateScore(user, comp);
        this.showCurrentTurn(user, comp, result);
    }

    // evaluate the scores
    evaluateScore(user, computer){
        let userScore = parseInt(this.userScore.textContent);
        let compScore = parseInt(this.compScore.textContent);
        let result = '';

        // if it is not a draw
        if (user != computer){
            if (user === 'paper'){
                if (computer === 'rock'){
                    userScore ++;
                    result = 'win';
                } else{
                    compScore ++;
                    result = 'loss';
                }
            }
            if (user === 'rock'){
                if (computer === 'scissors'){
                    userScore ++;
                    result = 'win';
                } else{
                    compScore ++;
                    result = 'loss';
                }
            }
            if (user === 'scissors'){
                if (computer === 'paper'){
                    userScore ++;
                    result = 'win';
                } else{
                    compScore ++;
                    result = 'loss';
                }
            }

            // increment scoreboard
            this.userScore.textContent = userScore;
            this.compScore.textContent = compScore;
        } else{
            result = 'draw';
        }
        return result;
    }

    // shows the result of current turn to user
    showCurrentTurn(user, computer, result){        

        if (this.showTurn.innerHTML){          
            this.showTurn.classList.remove('fade-in');
            setTimeout(()=>{                
                this.showTurn.innerHTML= `${this.hands['face']} ${this.hands[user]} ${this.hands[result]} ${this.hands[computer]} ${this.hands['robot']} `;
                this.showTurn.classList.add('fade-in');
            }, 1000);                               
        } else{             
            this.showTurn.innerHTML= `${this.hands['face']} ${this.hands[user]} ${this.hands[result]} ${this.hands[computer]} ${this.hands['robot']} `;
            this.showTurn.classList.add('fade-in');
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