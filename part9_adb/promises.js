function fetchdata(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let success = true;
            if(success){
                resolve("data fectched successfully")
            }else{
                reject("error fetching data")
            }
        }, 3000);
    })
}

fetchdata()
  .then((data) => {console.log(data);
    return data.toUpperCase()})
    .then((value)=>{
        console.log(value);
        
    })
  .catch((error) => console.error(error));

  // The promise "holds" the data and you can check, 
  // transform, and control it at each .then() 
  // stage before it moves forward.