let con = document.querySelector("#container");
const LINK = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";



for(i=1; i<=150 ; i++){
    let divEle = document.createElement("div");
    let spanEle = document.createElement("span");
    con.appendChild(divEle);
    
    spanEle.innerText = `#${i}`;

    let image = document.createElement("img");
    image.src = `${LINK}${i}.png`;
    divEle.appendChild(image);
    divEle.appendChild(spanEle);

    divEle.classList.add("abc")
}



















//let b = document.querySelector("button");
// let cont = document.getElementById("container");


// btn.innertext = "Hey";
// cont.appendChild(btn);

// let cont = document.getElementById("container");

// for(i=0; i<100; i++){
//     let btn = document.createElement("button");
   
//     btn.innerText= "Hey!";
//     cont.appendChild(btn);
// }