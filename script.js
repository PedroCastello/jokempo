 const result = document.querySelector(".result")
 const myScore = document.querySelector("#my-score")
 const machineScore = document.querySelector("#alexaScore")

 let humanScr = 0
 let machineScr = 0

 const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine())
 }

 const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber =  Math.floor(Math.random() * 3)

    return choices[randomNumber]

    
 }

 const playTheGame = (human, machine) => {
    console.log('Humano:' + human +  'Maquina:'  + machine) 
    
    if(human === machine){
        result.innerHTML = "Empatou"


        
    } else if ((human === 'paper' && machine === 'rock') ||
     (human === 'rock' && machine ==='scissors') ||
      (human === 'scissors' && machine=== 'paper')) {

        result.innerHTML = "Você ganhou!😊";
        humanScr++
        myScore.innerHTML = humanScr 
        
    } else {
        result.innerHTML = "Você perdeu😞";
        machineScr++
        machineScore.innerHTML = machineScr
    }

    result.style.textDecoration = 'underline';
}


