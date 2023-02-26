  
const numbersEl = document.getElementById("numbers");
const scoreEl = document.getElementById("score"); 

const campoEl = document.getElementById("campo"); 
const submitEl = document.getElementById("submit"); 

let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));

let res = x * y;
console.log(res, " mult");

numbersEl.innerText = `What is ${x} multiply by ${y}?`;

if(!score) { 
    score = 0; 
}

scoreEl.innerText = `score: ${score}`; 

submitEl.addEventListener("click", scoring); 

function scoring() {
    let userAns = parseInt(campoEl.value, 10);
    if (isNaN(userAns)) {
       alert('Please must be a number'); 
        return;
    }

    if (res == userAns) {
        score++;
        scoreEl.textContent = score;
        updateLocalStorage();
        console.log(score, " somando contador");
    } else {
        score--;
    
        scoreEl.textContent = score;
        updateLocalStorage();
        console.log(score, " subtraindo contador");
    }
} 

function updateLocalStorage() { 
    localStorage.setItem("score", JSON.stringify(score));
}  

 

