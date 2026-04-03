console.log("hello");

function sayhello(){
    console.log("i would like to say hello");
}

setTimeout(() => {
    sayhello(); 
}, 4000);

for (let index = 0; index < 10; index++) {
    console.log(index);
    
    
}
 // set function will always run at lst because 
 // it runs later in node env