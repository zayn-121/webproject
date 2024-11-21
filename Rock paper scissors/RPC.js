let userScore = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector(".result")

const userscorepara = document.querySelector("#you");
const computerscorepara = document.querySelector("#computer");


const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        console.log("you win!");
        msg.innerText = "you win"
        userscorepara.innerText = userScore;


        
    }else {
        computer++;
        console.log("you lose");
        msg.innerText = "you lose" ;
        computerscorepara.innerText = computer;
    }
}

const drawGame = () => {
    console.log("Game was draw")
       msg.innerText = "Game was draw // play again"
};

const playGames = (userChoice) =>{
    console.log("user choice = " , userChoice);
    //generate compueters choice---------------
    
    const compuetersChoice = compueterChoice();
    console.log("Computers Choice =" ,compuetersChoice);


    if (userChoice === compuetersChoice) {
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
          userwin =  compuetersChoice === "paper" ? false : true ;}

     else if (userChoice === "paper") {
        userWin = compuetersChoice === "scissors" ? false : true;}

        else{
            userwin = compuetersChoice === "rock" ? false : true ;
        }

        showWinner(userWin);
        
    
}
    

}

const compueterChoice = () => {
    const options = ["rock" , "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];


}
choices.forEach((choice) => {
    
   
    

    
    choice.addEventListener("click" , () =>{
         const userChoice = choice.getAttribute("id")
    
        console.log("Choice was clicked" ,userChoice);

        playGames(userChoice)
        

    });
    
});