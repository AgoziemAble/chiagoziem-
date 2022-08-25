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
        return {"message": "you lost", "color": "red"};
    } else if (yourScore === 0.5) {
        return {"message": "you tied", "color": "yellow"};
    } else {
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
}