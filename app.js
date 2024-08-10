let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")

const msg = document.querySelector("#msg")

const compscorepara = document.querySelector("#comp-score")
const userscorepara = document.querySelector("#user-score")

const compgenchoice = () =>{ 
    const options = ["rock","paper","scissors"]
    const randomInx = Math.floor(Math.random()*3)
    return options[randomInx]
}
    const drawGame = () => {
        // console.log("Game is Drawm")
        msg.innerText="Game is Drawn"
        msg.style.backgroundColor="orange"
    }
    
const showWinner = (userWin,userchoice,compchoice) =>{
    if(userWin){
        // console.log("You Win")
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You Win ! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "Green"
    }else{
        // console.log("You Lose")
        compScore++;
        compscorepara.innerText= compScore;

                msg.innerText=`You Lost ! ${compchoice} beats Your ${userchoice} `
                msg.style.backgroundColor="red"
    }
}

const playgame = (userchoice) => {
    // console.log("User's Choice is ", userchoice);
    //Computer Generate Choice
    const compchoice = compgenchoice();
    // console.log("Comp Choice Is",compchoice)

if(userchoice === compchoice){
    drawGame();
}else{
    let userWin=true;
if(userchoice === "rock"){
    userWin = compchoice === "paper" ? false : true;
}else if(userchoice === "paper"){
    userWin = compchoice === "rock" ? true : false;
}
else{
    userWin = compchoice === "paper" ? true : false;
}
    showWinner(userWin,userchoice,compchoice);
}
};

choices.forEach((choice) => {
    // console.log(choice);
    const userchoice = choice.getAttribute("id")
    choice.addEventListener("click",()=>{
        // console.log("Choice is Clicked",userchoice);    
        playgame(userchoice);

});

});