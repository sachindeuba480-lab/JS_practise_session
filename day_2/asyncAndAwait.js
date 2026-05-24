// async: Asynchrounous, await
let myPromise = new Promise(
    (resolve, reject) => {
        let merokasam = false
        if (merokasam) {
            resolve("Maile tara jharay hai")
        } else {
            reject("Maile tara jharna sakina, i am very sorry")
        }
    }
)
let asyncExample = async () => {
    // error handling
    try {
        console.log("before await")
        let data = await myPromise
        console.log("data: ", data)
    }catch(e){
        console.log("error: ",e)
    }finally{
        console.log("finally block called")
    }
}
asyncExample()

let Todos = async() => {
    try{
    let res = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await res.jason()
    console.log(data)
    } catch (e){
        console.log("error fetching todos: ",e)
    }
      
}
Todos()