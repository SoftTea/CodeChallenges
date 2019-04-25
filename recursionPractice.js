

// reverseStr("cowbell") --> "llebwoc"

// base condition = ''

function reverseStr(str) {
    if (str === '') {
        return ''
    } 
    let lastletter = str[str.length-1]
    
    return lastletter + reverseStr(str.substring(0,str.length-1))
}

// console.log( reverseStr("cat") )

//fibonacci(5) --> 5
// fibonacci(10) --> 55
// fibonacci(15) --> 610

// Notes on thinking through my code.
// firstly The Rule is xn = xn-1 + xn-2  
// from mathisfun.com is the rule which lead me to my solution. 
// Walking through our code,
// we have two base cases; essentially if pos = 0 then we return 0 if pos = 1 then we return 1 
// This is what I consider our 'known' base cases through which any other pos > 1 are known

// an example to demonstate this: (essentially imagine the program asking ' do I know what fib of x is? ' or more accuretly I know what the fib of x is it is fib(x-1 ) + fib(x-2))
// fibonacci(4) => fib(3) + fib(2)
// fibonacci(4) => (fib(2) + fib(1)) + (fib(1) + fib(0))
// fibonacci(4) => ((fib(1) + fib(0)) + fib(1)) + (fib(1) + fib(0))
// fibonacci(4) => ((1) + fib(1)) + (fib(1) + fib(0))
// fibonacci(4) => ((1) + fib(1)) + (1 + 0)
// fibonacci(4) => ((1) + 1) + (1 + 0)
//  fibonacci(4) => 3

// In the example of recursion we may think of the answer to a question as leading to another question.  What is the fib of 4? Well it is the fib of 2 + fib of 3, well what is the fib of 2 or fib of 3? Well the fib of 2 is fib of 1 + fib of 0 ,(etc) 







function fibonacci (position) {
    if (position <= 0) {
        return 0 
    } 
    if (position === 1) {
        return 1
    }

    return fibonacci(position-1) + fibonacci(position-2)
} 

console.log ( fibonacci(15) )