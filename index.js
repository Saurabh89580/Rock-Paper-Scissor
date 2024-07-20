let userScore = document.querySelector("#your-score");
let compScore = document.querySelector("#comp-score");

let count1 = 1;
let count2 = 1;


const images = document.querySelectorAll(".choice");
const msg = document.querySelector("#last-msg")

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3 );
    return options[randIdx]
};

const drawGame = () => {
    msg.innerText= "Game was draw";
};

const shoWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice} `;
        userScore.innerText = count1++;
    }
    else {
        console.log("you lose");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice} `;
        compScore.innerText = count2++;
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        shoWinner(userWin, userChoice, compChoice);
    }
};

images.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})