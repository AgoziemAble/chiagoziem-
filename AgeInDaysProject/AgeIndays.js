// DOM element

let header = document.querySelector(".header");

let clickMe = document.querySelector(".click-me");
let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    document.getElementById("result1").remove();
})

clickMe.addEventListener("click", () => {
    let currentYear = new Date().getFullYear();

    let user = prompt("What is your name?");
    let yearBorn =parseFloat(prompt("What Year Were You Born? "));
    if (user.length !== 0 && yearBorn !== NaN) {

        let AgeInDays = (currentYear - yearBorn)*365;

        let result = document.createTextNode(" you are " + AgeInDays + " days old")
            
        let h2 = document.createElement("h2");
        h2.setAttribute("id", "result1")
        h2.appendChild(result);
        document.getElementById("result").appendChild(h2);
    }

});



