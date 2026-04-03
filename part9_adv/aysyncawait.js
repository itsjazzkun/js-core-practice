function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({name: "jazz", url : "x.com/itsjazzkun"})
        }, 3000);
    })
}
// can only use await when you use async
async function getUserData(){
    try {
        console.log('fetching user data...');
      const UserData  = await fetchUserData()
      console.log("User data fetched successfully");
      
      console.log("User Data: ", UserData);
 // order is it fetch data             
    } catch (error) {
        console.log("error fetching data", error);
    }
}
getUserData();