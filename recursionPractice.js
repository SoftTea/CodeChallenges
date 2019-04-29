// examples and tutorial from The Coding Delight
// https://www.thecodingdelight.com/understanding-recursion-javascript/

// reverseStr("cowbell") --> "llebwoc"

// base condition = ''

function reverseStr(str) {
    if (str === '') {
        return ''
    }
    let lastletter = str[str.length - 1]

    return lastletter + reverseStr(str.substring(0, str.length - 1))
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


function fibonacci(position) {
    if (position <= 0) {
        return 0
    }
    if (position === 1) {
        return 1
    }

    return fibonacci(position - 1) + fibonacci(position - 2)
}

// console.log ( fibonacci(15) )

//-----------------------------------------------------------------------//


//Using recursion, go through a string and remove characters that occur more than once. E.g. passing in "Troll" should return "trol". Passing in "abracadabra" should return "abrcd".

// removeDupLetter ('Troll') = > trol
// removeDupLetter ('abracadabra') = > abrcd

function removeDupLetter(str) {

    if (str.length <= 0) {
        return ''
    }

    let firstLetter = str[0]

    let regex = new RegExp(firstLetter, 'gi')

    str = str.replace(regex, '')


    return firstLetter + removeDupLetter(str)

}

// let testStr = 'ttttrrrrroooolll'
// console.log( removeDupLetter(testStr) )
// console.log(testStr)


/////////////// ARTICLE'S SOLUTION //////////
// Their solution is most likely better than mine given that apparently concatanation is apparently fairlt costly. Also my solution used regex that goes through the whole string for letter duplications. I'm pretty sure I've heard regex can be fairly costly as well 

// Their solution makes use of a map object look up that would be way faster 

// One main take away from this example is the use of scope in manipulating the scoped objects out side of the recurive function calls 

function removeReoccurringCharacters(str) {
    //1. Check if str is a empty, if empty throw error, if not, carry on
    if (typeof str !== "string") {
        throw new Error("Please enter a string!");
    }
    // init our charMap + result 
    // CharMap is going to keep track of which characters have already been used 
    // because the order of the results matter we will keep their order as they are removed in the results array.

    var charMap = {};
    var result = [];

    // removeRepeatingChar is actually our recursive function 

    var removeRepeatingChar = function (str) {
        var len = str.length;
        // base case
        if (len === 0) {
            return str;
        }

        var firstChar = str.charAt(0);
        if (!charMap.hasOwnProperty(firstChar)) { // check if the firstChar is a prop of our Map -- if it isnt then 
            charMap[firstChar] = true; // mark as having occurred
            result.push(firstChar); // push into results
        }
        removeRepeatingChar(str.substring(1, len)); // call our function again but this time cut off the first indexed letter with substring method 
    };


    removeRepeatingChar(str); // our function call
    return result.join('');
}

// console.log(removeReoccurringCharacters("creeeedisgiiiid")); 


//Count the number of reoccurring instances of a digit in a number (E.g. 79092342 has two 9s). For bonus points, create a generator function using closures to create a recursive function using the value passed.
// E.g. Function can generate instances such as
// count7, count8
// which counts for the digits 7 and 8 respectively.

// example of our  function digitCounter(number, digitToCount) 

function digitCounter(number, digitToCount) {
    if (typeof number !== 'number' || typeof digitToCount !== 'number') {
        throw 'Either the parameter number or digitToCount is not of type number';
    }

    let stringNum = number.toString();

    let digitToCountStr = digitToCount.toString();


    let occuranceCounter = 0;

    function recursiveDigitCount() {

        if (stringNum === '') {
            return ''
        }

        if (stringNum[0] === digitToCountStr) {

            occuranceCounter += 1
        }

        stringNum = stringNum.substring(1)


        return recursiveDigitCount()

    }

    recursiveDigitCount();

    return occuranceCounter


}


// console.log(digitCounter(2214201548, 1))

function digitCounterTwo (num, targetNum) {
    if (typeof num === 'string' || typeof targetNum === 'string') {
        // console.log(num)
        if (num === '') {
            return 0
        }
        
        if( num[0] === targetNum) {

            return 1 + digitCounterTwo(num.substring(1), targetNum)
        } 
        return 0 + digitCounterTwo(num.substring(1), targetNum)

    } 

    if (typeof num !== 'string' || typeof targetNum !== 'string') {
        
        return digitCounterTwo(num.toString(), targetNum.toString())
    }
}

console.log ( digitCounterTwo (2001220155,5) )
