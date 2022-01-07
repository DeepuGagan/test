let p = (url) => {
    return new Promise((resolve, reject) => {
        let n = Math.ceil(Math.random() * 10);
        if (n <= 5) {
            resolve("Nice work");
            console.log(n)
        } else {
            reject("idiottttttttttttttttttttt");
            console.log(n)
        }
    })
}


// p("google.com/api/page1")
//     .then((msg) => {
//         console.log(`Connected and ${msg}`);
//         p("google.com/api/page2")    
//         .then((msg) => {
//             console.log(`Connected and ${msg}`);
//             p("google.com/api/page3")      
//             .then((msg) => {
//                 console.log(`Connected and ${msg}`);
//                 p("google.com/api/page3")
//             })
//             .catch((msg) => {
//             console.log(`Connection Error and you are a ${msg}`);
//             })
//         })
//         .catch((msg) => {
//             console.log(`Connection Error and you are a ${msg}`);
//         })
//     })
//     .catch((msg) => {
//         console.log(`Connection Error and you are a ${msg}`);
//     })

// p("google.com/api/page1")
//     .then((msg) => {
//         console.log(`Connected and ${msg}`);
//         return p("google.com/api/page2")
//     })
//     .then((msg) => {
//         console.log(`Connected and ${msg}`);
//         return p("google.com/api/page3")
//     })
//     .then((msg) => {
//         console.log(`Connected and ${msg}`);
//     })   
//     .catch((msg) => {
//         console.log(`Connection Error and you are a ${msg}`);
//     })


let a  = async () => {
throw new Error("guruuuuu")
}