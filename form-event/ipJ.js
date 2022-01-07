let hOne = document.querySelector("h1");
let ip = document.querySelector("input");

ip.addEventListener("input", (e) => {
    hOne.innerText = `Welcome, ${ip.value}`;
    if(ip.value==="" ){                                 //ip.value.length===0
        hOne.innerText = "Enter Your Username"
    }
})

