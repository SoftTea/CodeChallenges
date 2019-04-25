

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