// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// let digitalRoot = (number)=>{
//     let stringyfied = String(number);
//     let digitalResult = 0;
//     for(let i= 0; i<stringyfied.length; i++) {
//         console.log(i)
//         digitalResult += Number(stringyfied[i])
//     }
//     if (digitalResult>9) {
//         digitalResult = digitalRoot(digitalResult)
//     }
//     return digitalResult

// }

// console.log(digitalRoot(493193) );


//  In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//     //may the code be with you
//     return Number(num.toString().split('').reduce((accum, ele) => {
//         accum.push(ele ** 2)
//         return accum
//     }, []).join(''))
// }

// console.log(squareDigits(9119) )


// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// function findShort(s){
//     return s.split(' ').sort( (a,b)=> {
//         return a.length -b.length
//     })[0].length
// }

// findShort("bitcoin take over the world maybe who knows perhaps")

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// function findNb(m) {
//     // your code
//     let n= 1;
//     while(m>0) {
//     m = m-(n**3)
//     n++
//     }

//     if (m==0) {
//     return n}
//     return (-1);
// }

// console.log( findNb(36) );

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

// Input to the function is guaranteed to be a single string.

// function isValidIP(str) {
//      return str.split('.').every((ele,index,array)=>{
//         if( ele[0] == 0 && ele[1] != undefined) {
//         return false
//         }
//      return ele <= 255 && ele >=0 && array.length == 4
//     } ) 
//   }

//  console.log( isValidIP('01.02.03.04') )

// function towerBuilder(nFloors) {
//     // build here
//     let floors = []
//     for (let i = 1; i <= nFloors; i++) {
//         let astr = '*';

//         if (i == 1) {
//             floors.push( astr )
//         } else {
//             let regEx = /(\*)+/ ; 
//             let lengthOfFloors = floors[i-2].match(regEx)[0].length;
//             floors.push(astr.repeat(lengthOfFloors + 2))
//         }
//     }
//     for (let i = 0; i < floors.length-1; i++) {

//         let regEx = /(\*)+/ ; 
//         let lengthOfFloors = floors[i].match(regEx)[0].length;
//         console.log(lengthOfFloors)
//         let space = ' ';
//         floors[i] =  space.repeat( Math.floor( (floors[floors.length-1].length - lengthOfFloors) /2 )  )+ floors[i] + space.repeat( Math.floor( (floors[floors.length-1].length - lengthOfFloors) /2 )  )
//     }

//     return floors
// }

// console.log(towerBuilder(6))

// function songDecoder(song){
//     // ...
//     // ^((?!hede).)*$
//     let re = /WUB/g
//     let reWhiteSpace = /(\s+)/g
//     return song.replace(re, ' ').replace(reWhiteSpace, " ").trimLeft().trimRight()
//   }

//  console.log( songDecoder("AWUBWUBWUBBWUBWUBWUBC") )

// function validParentheses(parens) {
//     //TODO 

//     let re = /(\(\))+/g
//     parens = parens.replace(re, '')

//     if (re.test(parens) === true) {
//         return validParentheses(parens)
//     } else if (parens.length === 0) {
//         return true
//     }
//     return false

// }

// console.log(validParentheses('(((())))((()))'))

// function isValidWalk(walk) {
//     //insert brilliant code here
//     walkTracker = {
//         n: 0,
//         s: 0,
//         w: 0,
//         e: 0,
//         totalTime() {
//             return this.n + this.s + this.w + this.e
//         }

//     }
//     walk.forEach((ele) => {
//         walkTracker[ele]++
//     })
//     if (walkTracker.n === walkTracker.s && walkTracker.w === walkTracker.e && walkTracker.totalTime() === 10) {
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']))

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

// function scramble(str1, str2) {
//     //code me
//     str1 = str1.split('')
//     str2 = str2.split('')
// //     for (let i = 0; i<str2.length; i++){
// //             let replace = str2[i];
// //             let regex = new RegExp (replace, '')
// //             let testVar = str1
// //             str1 = str1.replace(regex, '')
// //             if (testVar === str1) {
// //                 return false
// //             }


// //    }
// //    return true
//   if scrabl
// }

//    console.log( scramble('codaezfdsasdf','codezz') )

// //    console.log (scramble('rkqodlw','world') ,
// //    scramble('cedewaraaossoqqyt','codewars'),
// //    scramble('katas','steak'),
// //    scramble('scriptjava','javascript'),
// //    scramble('scriptingjava','javascript'),
// //    scramble('scriptsjava','javascripts'),
// //    scramble('jscripts','javascript'),
// //    scramble('aabbcamaomsccdd','commas'),
// //    )

// function zero(x) {
//     console.log(x)
//     if (x === undefined) {
//         return 0
//     }
//     console.log(x[0], 'x')
//     switch(x[0]) {
//        case 'plus': 

//        return 0 + x[1]

//        case 'minus': 
//         return 0 - x[1]

//         case 'times': 
//         return 0 * x[1]

//         case 'dividedBy': 
//         return Math.floor(0 / x[1])
//     }

// }
// function one(x) {
//     if (x === undefined) {
//         return 1
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 1 + x[1]

//         case 'minus': 
//         return 1 - x[1]

//         case 'times': 
//         return 1 * x[1]

//         case 'dividedBy': 
//         return Math.floor(1 / x[1])
//      }

// }
// function two(x) {
//     if (x === undefined) {
//         return 2
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 2 + x[1];

//         case 'minus': 
//         return 2 - x[1];

//         case 'times': 
//         return 2 * x[1];

//         case 'dividedBy': 
//         return Math.floor(2 / x[1]);
//      }
// }
// function three(x) {
//     if (x === undefined) {
//         return 3
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 3 + x[1];

//         case 'minus': 
//         return 3 - x[1];

//         case 'times': 
//         return 3 * x[1];

//         case 'dividedBy': 
//         return Math.floor(3 / x[1]);
//      }
// }
// function four(x) {
//     if (x === undefined) {
//         return 4
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 4 + x[1];

//         case 'minus': 
//         return 4 - x[1];

//         case 'times': 
//         return 4 * x[1];

//         case 'dividedBy': 
//         return Math.floor(4 / x[1]);
//      }
// }
// function five(x) {
//     if (x === undefined) {
//         return 5
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 5 + x[1];

//         case 'minus': 
//         return 5 - x[1];

//         case 'times': 
//         return 5 * x[1];

//         case 'dividedBy': 
//         return Math.floor(5 / x[1]);
//      }
// }
// function six(x) {
//     if (x === undefined) {
//     return 6
// }
// switch(x[0]) {
//     case 'plus': 
//     return 6 + x[1];

//     case 'minus': 
//     return 6 - x[1];

//     case 'times': 
//     return 6 * x[1];

//     case 'dividedBy': 
//     return  Math.floor(6 / x[1]);
//  }}
// function seven(x) {
//     if (x === undefined) {
//     return 7
// }
// switch(x[0]) {
//     case 'plus': 
//     return 7 + x[1];

//     case 'minus': 
//     return 7 - x[1];

//     case 'times': 
//     return 7 * x[1];

//     case 'dividedBy': 
//     return Math.floor(7 / x[1]);
//  }}
// function eight(x) {
//     if (x === undefined) {
//         return 8
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 8 + x[1];

//         case 'minus': 
//         return 8 - x[1];

//         case 'times': 
//         return 8 * x[1];

//         case 'dividedBy': 
//         return Math.floor(8 / x[1]);
//      }
// }
// function nine(x) {
//     if (x === undefined) {
//         return 9
//     }
//     switch(x[0]) {
//         case 'plus': 
//         return 9 + x[1];

//         case 'minus': 
//         return 9 - x[1];

//         case 'times': 
//         return 9 * x[1];

//         case 'dividedBy': 
//         return Math.floor( 9 / x[1]);
//      }
// }

// function plus(x) {
//     console.log(x, 'pluss')
//     return ['plus', x]
// }
// function minus(x) {
//     return ['minus', x]
// }
// function times(x) {
//     return ['times', x]
// }
// function dividedBy(x) {
//     return ['dividedBy', x]
// }

// console.log(zero(minus(six())), 'main test')

// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// function incrementString (strng) {
//     // return incrementedString

//     let re = /[0-9]/g
//     let re2 = /[a-z]/g
//     let leadingZeros = 0
//     let letters = strng.match(re2) != undefined ? strng.match(re2).join('') : [];
//     if (letters.length === strng.length) {
//         return letters + '1'
//     }
//     let numbersArray = strng.match(re)

//     let numbers = Number(strng.match(re).join('')  ) ;
//     console.log(numbers, 'numbers')
//     let numbersPlusOne = numbers + 1

//     console.log( String(numbersPlusOne).length, 'plus one lenght', String(numbers).length )
//     if (String(numbersPlusOne).length > String(numbers).length || numbersPlusOne === 1){
//         console.log(true)
//         leadingZeros--
//     }
//    console.log(leadingZeros);

//     for (let i = 0 ; i< numbersArray.length; i++) {
//         if (numbersArray[i] === '0') {

//             leadingZeros++
//         } else {
//             break
//         }
//     }
//     console.log(numbers, letters, leadingZeros)
//     if (leadingZeros < 0) {
//         leadingZeros = 0;
//     }
//     return letters + '0'.repeat(leadingZeros) + numbersPlusOne
//   }

// console.log( incrementString('') , 'main rest' )

// function parseMolecule(formula) {
//   // do your science here
//   const reg = /[^\(\)\d]/g
// const regDigit = /\d/g
//   const reg2 = /[\(\)\d]|([A-Z][a-z]*)/g
// let formulaArray = formula.split('');
// let result = {};

// for (let i= 0 ; i<formulaArray.length; i++) {
//     let arrayItem = formulaArray[i];
//     if(regDigit.test(formulaArray[i])) {
//         console.log(formulaArray[i], 'test')
//     }
//     result[arrayItem] = 1
// }

//   console.log( formula.split(""))
//   console.log()
// }

// parseMolecule('H202');

// *** Proper text parser style ***
// ***********************************************************************
// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}

// **************************************************************************

// function parseMolecule(formula) {
//     console.log(formula, 'formula')
//       var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];

//       while (tokens = tokenExp.exec(formula)) {

//       console.log(tokens, 'tokens')
//         tokens[2] = tokens[2] || 1;
//         if (/^[A-Z]/.test(tokens[1])) {
//           while (tokens[2]--) {
//           console.log(stack, 'first inst of stack' )
//           stack.push(stack.pop().concat([tokens[1]])); }
//         } else if (/[{\(\[]/.test(tokens[1])) {
//           console.log(tokens, 'token with (')
//           stack.push([]);
//         } else {
//           console.log(stack, 'stack after )num')
//           group = stack.pop();
//           console.log(stack, 'after group pop')
//           while (tokens[2]--) stack.push(stack.pop().concat(group))
//         }
//       }
//       console.log(stack, 'stack')
//       return stack[0].reduce(function (count, x) {
//         count[x] = (count[x] || 0) + 1;
//         console.log(count, 'count')
//         return count;
//       }, {});
//     }


// function curry(fn) {
//     // Let the currying begin!

//     return (...xs) => {
        
//         if (xs.legnth === 0) {
//             throw Error('EMPTY INVOCATION')
//         }

//         if (xs.length >= fn.length) {
//             return fn(...xs)
//         }

//         return curry(fn.bind(null, ...xs))

//     }


//     // function nest (N,args) {
//     //     return (...xs) => {
//     //         // console.log(x)
//     //         if (xs.length === 0) {
//     //             throw Error ('EMPTY INVOCATION')
//     //         }


//     //         // console.log(args)
//     // //         if (N - xs.length <= 0) {
//     // //             return fn(...args, ...xs);
//     // //         }
//     // //         return nest(N-xs.length, [...args, ...xs ]);
//     // //     }
//     // // }

//     // // return nest (fn.length , [])
// }


// const add = curry((x,y,z) => {
//     let sum = 0;
//     // console.log(args.length, 'arguments len')
//     // for (let i = 0; i < arguments[0].length; i++) {
//     //     sum += args[i]
//     //  }
//      return x + y + z
// })

// console.log(add(10,2)(2) )

// function add(n){
//     var fn = function(x) {
//       return add(n + x);
//     };
    
//     fn.valueOf = function() {
//       return n;
//     };
    
//     return fn;
//   }

//   console.log( add(2) ) 

// Maximum subarray sum 

// function maxSequence(array) {
//   let largest = 0
//   let currV = 0
 
//   for (let i = 0; i <array.length ; i++) {
    
//     currV = 0
  
//       for(let j = i; j < array.length ; j++) {
//        currV += array[j]
//        if (currV > largest) {
//          largest = currV;
//        }
//        console.log('i:', i , 'j:', j)
//       }
   
//   }
  
//   return largest
// }

// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5]) )


// function myFirstInterpreter(code) {
//   // Implement your interpreter here
//   let codeSplit = code.split('')
//   let currASCII = 0
//   let asciiArray = []

//   for(let i =0; i < codeSplit.length; i++) {
    
//     if (codeSplit[i] === '+') {
//       currASCII++
//       if (currASCII === 256) {
//         currASCII = 0
//       }
//     }  else if (codeSplit[i] === '.') {
//       asciiArray.push(currASCII)
//     }
//   }

//   for (let i = 0; i <asciiArray.length ; i++) {
//     asciiArray[i] = String.fromCharCode (asciiArray[i])
//   }

//   return asciiArray.join('')
// }


// let x = myFirstInterpreter('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.+.');

// console.log(x)

//Number of trailing zeros of N!

// function zeros (n) {
  
// let k = Math.floor((Math.log(n)/Math.log(5)))
// let trailingZeros = 0;
// for ( let i = 1; i<= k ; i++) {
//   trailingZeros += Math.floor( n/5**i)
// }
// return trailingZeros
// }



// console.log(zeros(777))

// Extract the domain name from a URL

function domainName(url){
  //your code here
  const regex = /(http:\/\/)?(https:\/\/)?(www.)?/g
  const regex2 = /\..*/g
  return url.replace( regex, '').replace(regex2, '')
}

console.log(domainName("https://youtube.com"))
