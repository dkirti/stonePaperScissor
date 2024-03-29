let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const uScore=document.querySelector("#user-score")
const cScore=document.querySelector("#comp-score")
const button=document.querySelector("button");

const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let optionIndex=Math.floor(Math.random()*3);
    return options[optionIndex];
}

const playGame=(userChoice)=>{
    console.log("userChoice = ",userChoice);
    //generate computer choice
    let user=true;
    let compChoice=genCompChoice();
    console.log("CompChoice = ",compChoice)
    if(userChoice===compChoice){
        console.log("Game is drawn")
        msg.innerText="Game is drawn Play again"
        msg.style.backgroundColor="black"
    }
    else{
        if(userChoice==="rock"){
            user=compChoice==="scissors" ? true: false
        }
        else if(userChoice=="scissors"){
            user=compChoice==="paper"?true:false
        }
        else{
            user=compChoice==="rock"?true:false
        }
        winGame(user,userChoice,compChoice);
    }
    
}

const winGame=(user,userChoice,compChoice)=>{
    if(user==true){
        userScore++;
        console.log("User Win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        uScore.innerText=userScore;
    }
    else{
        compScore++;
        console.log("User Lose");
        msg.innerText=`You lose!  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
        cScore.innerText=compScore;
    }
}

choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice is clicked ",userChoice)
        playGame(userChoice)
    })
})

button.addEventListener(("click"),()=>{
    uScore.innerText="0";
    cScore.innerText="0";
    userScore=0;
    compScore=0;
})
