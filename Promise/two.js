// async function z () {
//     console.log("simple")
//     throw new Error("error")
//     return "done"
// }

// let z = async() => {
//     console.log("simple")
//    // throw new Error("error")
//     return "done"
// }

// let x = z();
// x.then((msg) => {
//     console.log(`its ${msg} goooooooooood`)
// })
// .catch((msg) => {
//     console.log(`its an ${msg} idiooooooooot`)
// })


let login = async (uName,pWord) => {
    if(!uName || !pWord){
        throw "Missing credentials"
    }                                                               
    if(pWord === 9141099655){
        return `${uName}, You are ` 
    }
    throw `${uName}, You have entered an ` 
}

let l = login("Deepu" , 9141099655)

l.then((msg) => {
    console.log(`${msg} Logged in >>>>>>>>>>>>`)
})
.catch((err)=>{
    console.log(`${err} Invalid password //////////// `)
})

