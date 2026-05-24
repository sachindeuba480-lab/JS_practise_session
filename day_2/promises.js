let myPromise = new Promise(
    (resolve, reject)=>{
        let merokasam = false
        if(merokasam){
            resolve("Maile tara jharay hai")
        }else{
            reject("Maile tara jharna sakina, i am very sorry")
        }
    }
)

let handlePromise =()=>{
    myPromise.then(
        (data)=>{
            console.log("sucess: ", data)
        }
    ).catch(
        (e)=>{
            console.log("Error: ", e)
        }
    ).finally(
        ()=>{
            console.log("finally function called")
        }
    )
}
handlePromise()