let p1 = {
    score : 0,
    button : document.querySelector("#p1Button"),
    display : document.querySelector("#p1Display")
}

let p2 = {
    score : 0,
    button : document.querySelector("#p2Button"),
    display : document.querySelector("#p2Display")
}


let winningScoreSelect = document.querySelector("#playTo");
let reset = document.querySelector("#reset");

let winningScore = 3;
let isGameOver = false;


function updateScore(player , opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success")
            opponent.display.classList.add("has-text-danger")
        }
        player.display.innerText = player.score;
    }  
}

p1Button.addEventListener("click", () =>{
    updateScore(p1, p2);
})

p2Button.addEventListener("click", () =>{
    updateScore(p2, p1);
})

winningScoreSelect.addEventListener("change", () => {
    winningScore = parseInt(winningScoreSelect.value);
    resetFunc();
})

let resetFunc = () => {
    for(let p of [p1,p2]){
        isGameOver = false;
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove("has-text-success","has-text-danger")
    }
}

reset.addEventListener("click",resetFunc)