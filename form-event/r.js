let forms = document.querySelector("form");
let uls = document.querySelector("#list");

forms.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log(e)
    let proD = forms.elements.product;
    let quanT = forms.elements.qty;
    addFunc(proD.value,quanT.value);
    proD.value = ""
    quanT.value = "";
    //forms.reset();
});

let addFunc = (product, qty) => {
    let liS = document.createElement("li");
    //console.log("product")
    //liS.append(`${qty} ${product}`);
    // uls.append(liS)
    liS.innerText = `${qty} ${product}`;
    uls.appendChild(liS)   
};