function outer() {
    let counter = 4;
    return function(){
        counter++
        return counter
    }
}

let increment = outer()
console.log(increment());
console.log(increment());
console.log(increment());

// Closure is when an inner function retains access to its outer function's scope 
// even after the outer function has finished executing. 
// outer() is done, counter should be gone — but it isn't, 
// because increment holds a reference to that scop