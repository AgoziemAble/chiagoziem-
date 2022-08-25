// challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice
    humanChoice = yourChoice.id;
   
    botChoice = numberToChoice(randToRpsInt());
    console.log("computer choice:", botChoice);
   
    result = decideWinner(humanChoice, botChoice); // [1,0], [0.5,0.5], [0,1]
    console.log(result);
    
    message = finalMessage(result); //{"message": "you win", "color": "green"}
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message);
    //storage();
}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
        "scissors": {"paper": 1, "scissors": 0.5, "rock": 0}
    }

    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];
    
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        computerStorage();
        return {"message": "you lost", "color": "red"};
    } else if (yourScore === 0.5) {
       drawStorage();
        return {"message": "you tied", "color": "yellow"};
    } else {
        humanStorage();
        return {"message": "you won", "color": "green"};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDataBase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src,
    }

    // removing all the images 
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src = '" + imageDataBase[humanImageChoice] + "' width = 150% style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style = 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; text-transform: uppercase;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src = '" + imageDataBase[botImageChoice] + "' width = 150% style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    
    document.getElementById("rps-flex-box-div").appendChild(humanDiv);
    document.getElementById("rps-flex-box-div").appendChild(messageDiv);
    document.getElementById("rps-flex-box-div").appendChild(botDiv);

    document.getElementById("button-div").style.display = "block"
}

let button = document.getElementById("button-div");
button.addEventListener("click", () => {
    location.reload();
    
})

function humanStorage() {
        
    if (localStorage.humanCoreTotal) {
        localStorage.humanCoreTotal = Number(localStorage.humanCoreTotal)+1;
    } else {
        localStorage.humanCoreTotal = 1;
    }
    document.getElementById("human-score-span").innerHTML = localStorage.humanCoreTotal;
}

function drawStorage() {
    if (localStorage.drawScoreTotal) {
        localStorage.drawScoreTotal = Number(localStorage.drawScoreTotal)+1;
    } else {
        localStorage.drawScoreTotal = 1;
    }
    document.getElementById("draw-score-span").innerHTML = localStorage.drawScoreTotal;
}

function computerStorage() {
    if (localStorage.computerScoreTotal) {
        localStorage.computerScoreTotal = Number(localStorage.computerScoreTotal)+1;
    } else {
        localStorage.computerScoreTotal = 1;
    }
    document.getElementById("computer-score-span").innerHTML = localStorage.computerScoreTotal;
}


console.log(localStorage.humanCoreTotal);

// window.onload = loadScores();

(function loadScores() {
    if (localStorage.humanCoreTotal === undefined) {
        document.getElementById("human-score-span").innerHTML = 0;
    } else{
        document.getElementById("human-score-span").innerHTML = localStorage.humanCoreTotal;
    };

    if (localStorage.computerScoreTotal === undefined) {
        document.getElementById("computer-score-span").innerHTML = 0;
    } else {
        document.getElementById("computer-score-span").innerHTML = localStorage.computerScoreTotal;
    };

    if (localStorage.drawScoreTotal === undefined) {
        document.getElementById("draw-score-span").innerHTML = 0; 
    } else {
        document.getElementById("draw-score-span").innerHTML = localStorage.drawScoreTotal;
    };
   
})();