let btn = document.querySelector("#button");
let hone = document.querySelector("h1");

btn.addEventListener("click", () => {
   // colourFunc();
    document.body.style.backgroundColor = colourFunc();
    hone.innerText = `Your colour is of value of ${colourFunc()}`;
    
})

let colourFunc = () => {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
