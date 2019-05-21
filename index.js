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

// function domainName(url){
//   //your code here
//   const regex = /(http:\/\/)?(https:\/\/)?(www.)?/g
//   const regex2 = /\..*/g
//   return url.replace( regex, '').replace(regex2, '')
// }

// console.log(domainName("https://youtube.com"))

// Human readable time from only seconds 

// function humanReadable (seconds) {
//   let hours = Math.floor(seconds / 3600)

//   let hoursRemainder = seconds % 3600
//   let minutes = Math.floor(hoursRemainder / 60);

//   let minutesRemainder = hoursRemainder % 60;

//   if (hours < 10) {
//     hours = '0'+hours.toString()
//   }

//   if (minutes < 10) {
//     minutes = '0'+minutes.toString()
//   }

//   if (minutesRemainder < 10) {
//     minutesRemainder = '0'+minutesRemainder.toString()
//   }

//   return `${hours}:${minutes}:${minutesRemainder}`

// }

// console.log (120822 % 60 )

// Other's solution
// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }


// function rot13(message) {
//   //your code here
//   let decoded = '';

//   for (let i = 0; i < message.length; i++) {
//     let charCode = message.charCodeAt(i)

//     if (charCode >= 65 && charCode <= 90) {
//       charCode += 13
//       if (charCode > 90) {
//         charCode = (charCode % 91) + 65
//       }

//       decoded += String.fromCharCode(charCode)
//     } else if (charCode >= 97 && charCode <= 122) {
//       charCode += 13
//       if (charCode > 122) {
//         charCode = (charCode % 123) + 97
//       }

//       decoded += String.fromCharCode(charCode)
//     } else {
//       decoded += String.fromCharCode(charCode)
//     }
//   }

//   return decoded;
// }



// console.log(rot13('ng4pk'))

// /// Other's fancy solutions //

// function rot13(message) {
//   var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
// }

// const cl = str => 
//           str.replace(/[a-z]/gi, 
//           letter => 
//               String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));


// function pigIt(str) {
//   const reg = /\b/g

//   return str.split(reg).map((item) =>  item[0].search(/[a-z]/gi) < 0 ? item : item.slice(1) + item[0] + 'ay').join('')
// }

// console.log (pigIt('Hello another world') );



// How other smarter people did it

// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3")
// }


// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }

// 4 By 4 Skyscrapers

// function solvePuzzle (clues) {
//     // Start your coding here...

// }

// solvePuzzel ( [
//   2, 2, 1, 3,
//   2, 2, 3, 1,
//   1, 2, 2, 3,
//   3, 2, 1, 3
// ])

// function sockMerchant (n ,arr) {
//   arr.sort()
//   totalPairs = 0
//   for (let i= n-1 ; i>0 ; i--) {
//     if(arr[i] === arr[i-1]) {
//       totalPairs++;
//       i--
//     }
//   }
//   return totalPairs
// }

// console.log (sockMerchant ( 9 , [10, 20, 20, 10, 10 ,30, 50, 10 ,20]) );

// function countingValleys (n,s) {
//   let valleyCount = 0;
//   let altitude = 0;

//   for (let i = 0 ; i < n ; i++) {
//     let prevAltitude = altitude
//     if (s[i] === 'U') {
//       altitude ++
//     } else {
//       altitude--
//     }
//     if (prevAltitude < 0 && altitude === 0) {
//       valleyCount++
//     }
//   }

//   return valleyCount
// }


// console.log( countingValleys(8, 'DDUUUUDD') )

// function jumpingOnClouds (c) {
//   let jumps = 0;

//   for(let i = 0 ; i<c.length-1 ; i++) {

//     if (c[i+2] === 0) {
//       jumps++
//       i++
//     } else {
//       jumps++
//     }

//   }

//   return jumps
// }

// console.log(jumpingOnClouds([0,0,0,0,1,0]))

// function repeatedStrings(s,n) {
//   let totalA = 0;
//   let regex = /a/g
//   let aInString = s.match(regex) ? s.match(regex).length : 0 
//   let stringLength = s.length;
//   let stringRemainder = n % stringLength
//   let repeatStringNumber = (n - stringRemainder) / stringLength
//   totalA += repeatStringNumber * aInString



//   for (let i = 0; i< stringRemainder; i++) {

//     if (s[i] === 'a') {
//       totalA++
//     }
//   }

//   return totalA
// }


// console.log(repeatedStrings('wwwwww', 10) )


// function checkMagazine(magazine, note) {

//    let replicable = true
//    let magazineGettingCut = magazine

//    for ( let i = 0 ; i < note.length; i++) {
//      if ( !magazineGettingCut.includes(note[i]) ) {
//        replicable = false 
//        break
//      } else {

//        let magazineIndex = magazineGettingCut.indexOf(note[i]);

//        magazineGettingCut.splice(magazineIndex, 1);

//      }
//    }

//    console.log(replicable ? 'Yes' : 'No');



// }

// console.log(checkMagazine (['give', 'me', 'one', 'grand', 'today', 'night'] , ['give' ,'stugg', 'grand' ,'today'] ))


// function countSwaps (a) {
//   let arrayLength = a.length 
//   let numSwaps = 0

//   for (let i = 0; i < arrayLength - 1 ; i ++) {

//     for (let j = 0; j < arrayLength - 1 ; j++) {
//       if (a[j] > a[j + 1]) {
//         let movedEl = a[j+1];
//         a[j+1] = a[j];
//         a[j] = movedEl;
//         numSwaps++
//       }
//     }
//   }
//   console.log(`Array is sorted in ${numSwaps} swaps.`)
//   console.log(`First Element: ${a[0]}`)  
//   console.log( `Last Element:${a[arrayLength-1]}`)
//   return;
// }

// console.log(countSwaps([3,2,1]) )

// console.log({} ['test'])

// function fetchProfile(api) {
//   return api.fetchCompany().then(res => {
//     let companyName = res.data.name
//     return api.fetchCompanyEmployees(res.data.id).then(res => {
//       return {
//         company: companyName,
//         employees: res.data.employees
//       }
//     })
//   }).catch(e => console.log(e, 'Error in fetchProfile promises'))
// }

// function toTree(data) {
//   // first lets make sure our id's are sorted 
//   data.sort((a,b) =>  a.id - b.id )
//   let root;

//   for (let i = 0; i < data.length; i++) {
//     if (data[i].parent === null) {
//       root = data[i]
//       data.splice(i,1)
//     }
//   }
//   for(let i = 0; i<data.length; i ++) {
//     if(data[i].parent === root.id) {
//       root.children = [];
//       root.children.push(data[i]);
//       data.splice(i,1)

//       }
//   }

//   for (let i = 0 ; i <data.length; i++) {
//     for (let j = 0; j < root.children.length; j++) {
//       if (root.children[j].id === data[i].parent ) {
//         root.children[j].children = [];
//         root.children[j].children.push(data[i])
//         data.splice(i,1);

//       }
//     }
//   }

//   console.log(root.children[0].children)
//   return root 

// }


let testVar = [{
    id: 1,
    parent: null,
    value: 'Make breakfast'
  },
  {
    id: 2,
    parent: 1,
    value: 'Brew coffee'
  },
  {
    id: 3,
    parent: 2,
    value: 'Boil water'
  },
  {
    id: 4,
    parent: 2,
    value: 'Grind coffee beans'
  },
  {
    id: 5,
    parent: 2,
    value: 'Pour water over coffee grounds'
  }
]

function toTree(arr) {

  const root = [];

  arr.forEach(node => {
    // No parent means top level
    if (!node.parent) return root.push(node);

    // Insert node as child of parent in arr array
    const parentIndex = arr.findIndex(el => el.id === node.parent);
    if (!arr[parentIndex].children) {
      return arr[parentIndex].children = [node];
    }

    arr[parentIndex].children.push(node);
  });

  console.log(root)
  return root
}

// function getNestedChildren(arr, parent) {
//   var out = []
//   for(var i in arr) {
//       if(arr[i].parent == parent) {
//           var children = getNestedChildren(arr, arr[i].id)

//           if(children.length) {
//               arr[i].children = children
//           }
//           out.push(arr[i])
//       }
//   }
//   return out
// }


// var arr = [
//   {'id':1 ,'parentid' : 0},
//   {'id':4 ,'parentid' : 2},
//   {'id':3 ,'parentid' : 1},
//   {'id':5 ,'parentid' : 0},
//   {'id':6 ,'parentid' : 0},
//   {'id':2 ,'parentid' : 1},
//   {'id':7 ,'parentid' : 4},
//   {'id':8 ,'parentid' : 1}
// ];
// function unflatten(arr) {
// var tree = [],
//     mappedArr = {},
//     arrElem,
//     mappedElem;

// // First map the nodes of the array to an object -> create a hash table.
// for(var i = 0, len = arr.length; i < len; i++) {
//   arrElem = arr[i];
//   mappedArr[arrElem.id] = arrElem;
//   mappedArr[arrElem.id]['children'] = [];
// }


// for (var id in mappedArr) {
//   if (mappedArr.hasOwnProperty(id)) {
//     mappedElem = mappedArr[id];
//     // If the element is not at the root level, add it to its parent array of children.
//     if (mappedElem.parentid) {
//       mappedArr[mappedElem['parentid']]['children'].push(mappedElem);
//     }
//     // If the element is at the root level, add it to first level elements array.
//     else {
//       tree.push(mappedElem);
//     }
//   }
// }
// return tree;
// }

// var tree = unflatten(arr);
// console.log(tree);


// Traverse is a function which accepts an [Arr of objects with properties of parent and id ] and a parrentId which desinates the parent node's id

// 1.  Filter the array to only those objects whose parent is the parentId (children is either an empty arr or an arr with object elements )

// 2. For every child of the parentNode add property of subcatergories which recursively calls the traverse function with the paramters of: same data arr given during first call , but using this child element as the parent id

// the recursive call will return either another filter arr with objects or an empty arr

// our base case (i believe ) is the [] returned when there are no nodes with the parentId passed to the traverse function , in which case the forEach never calls

function traverse(data, parentId) {
  const children = data.filter(each => each.parent === parentId);
  children.forEach(child => {
    child.subcategories = traverse(data, child.id);
  });
  console.log(children)
  return children;
}

// console.log( traverse(testVar, null) )


let twoDemArr = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7]
]

function hourglassSum(arr) {

  let highestHourglassSum = -Infinity
  for (let i = 0; i < arr.length; i++) {

    if (arr[i + 2] == undefined) {
      break
    }

    for (let j = 0; j < arr[i].length; j++) {


      let currentValue = arr[i][j] + arr[i][j - 1] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j - 1]

      highestHourglassSum = currentValue > highestHourglassSum ? currentValue : highestHourglassSum
    }
  }

  return highestHourglassSum

}



// console.log(twoDemArr[3][9])

// console.log( hourglassSum(twoDemArr) ) ;

// console.log(NaN > -1)

// let testArr = [1,2,3,4]
// let copyArr = testArr.slice()
// copyArr.pop()
// console.log(testArr);


function rotLeft(a, d) {

  let aLength = a.length
  let rotateMod = d % aLength

  for (let i = 0; i < rotateMod; i++) {


    a.push(a.shift())


  }
  return a

}


// console.log ( rotLeft([1,2,3,4,5], 2) )

// function rotLeftTwo (a,d) {

//   let aLength = a.length
//   let rotateMod = d % aLength

//   let aCopy = a.slice(0)


//   for (let i = 0; i < aLength ; i++) {
//     let newIndex = i-rotateMod

//     if(newIndex < 0) {
//       newIndex = aLength + newIndex
//     }

//     aCopy[newIndex] = a[i]

//   }

//     return aCopy

// }

// console.log(rotLeftTwo([1,2,3,4,5], 1))

// Notes on minBribe: 
// Original starting position  === q[i] -1

// if i < originalIndex - 2 
// then too chaotic

// if CurrentI(i) > Original I = 0 bribes

// q[i] - Orriginal[i] = 0 no bribe 
// q[i] - Orriginal[i] < 0 no bribe
// q[i] - Orriginal[i] > 0 < 3 value for bribe 

function minBribe(q) {

  const arrayLength = q.length
  let originalArray = []
  let numOfBribes = 0

  for (let i = 0, j = 1; i < arrayLength; i++, j++) {


    originalArray[i] = j
    const diffBetween = q[i] - originalArray[i]


    if (diffBetween > 2) {
      console.log('Too chaotic')
      return 'Too chaotic'
    }

    for (let p = i; p < arrayLength; p++) {

      if (q[i] > q[p]) {
        numOfBribes++
      }
    }





  }

  console.log(numOfBribes)
  return numOfBribes
  // console.log(originalArray)



}

function minBribeTwo(q) {

  const arrayLength = q.length
  let originalArray = []
  let numOfBribes = 0

  for (let i = 0; i < arrayLength; i++) {
    originalArray.push(i + 1)

    const diffBetween = q[i] - originalArray[i]


    if (diffBetween > 2) {
      console.log('Too chaotic')
      return 'Too chaotic'
    }
  }

  for (let i = 0; i < arrayLength; i++) {




    if (q[i] === originalArray[i]) {

    } else if (q[i] === originalArray[i + 1]) {
      let currItem = originalArray[i]
      originalArray[i] = originalArray[i + 1]
      originalArray[i + 1] = currItem

      numOfBribes++
    } else if (q[i] === originalArray[i + 2]) {
      let currItem = originalArray[i]
      originalArray[i] = originalArray[i + 2]
      originalArray[i + 2] = originalArray[i + 1]
      originalArray[i + 1] = currItem

      numOfBribes += 2
    }

  }


  console.log(numOfBribes)
  return numOfBribes
  // console.log(originalArray)



}

// console.log( minBribe([2,1]) )

// minBribeTwo([2,5,1,3,4]) // 7

// let arr= []
// arr[3] = 3
// console.log( arr[2] )

// if (q[i] < q[i-2]) {
//   let currentI = q[i];

//   const newStartIndex = (i-3 < -1 ) ? -1 : i-3 

//   q.splice(i,1)
//   q.splice(i-2,0,currentI)

//   numOfBribes+=2

//   i = newStartIndex

// } else if (q[i] < q[i-1]) {
//   let currentI = q[i];

//   const newStartIndex = (i-2 < -1 ) ? -1 : i-2 

//   q.splice(i,1)
//   q.splice(i-1,0,currentI)

//   numOfBribes+=1

//   i = newStartIndex

// }



// Min Swaps 2 

function minSwapsTwo(arr) {
  let valueKeyForArr = [];
  let numOfSwaps = 0;

  for (let i = 0; i < arr.length; i++) {
    let arrValue = arr[i]
    valueKeyForArr[arrValue] = i
  }

  for (let i = 0; i < arr.length; i++) {
    let expectedValue = i + 1

    if (arr[i] !== expectedValue) {
      let indexOfExpectedValue = valueKeyForArr[expectedValue];

      valueKeyForArr[arr[i]] = valueKeyForArr[expectedValue]
      valueKeyForArr[expectedValue] = i


      arr[indexOfExpectedValue] = arr[i]
      arr[i] = expectedValue



      numOfSwaps++



    }
  }
  console.log(numOfSwaps);
  return numOfSwaps;

}

// minSwapsTwo([7, 1, 3, 2, 4, 5, 6])

function arrayManipulation(n, queries) {
  let mainArr = new Array(n).fill(0);
  let highestValue = 0;

  for (let i = 0; i < queries.length; i++) {
    const beginningIndex = queries[i][0] - 1;
    const endIndex = queries[i][1] - 1;
    const addedValue = queries[i][2];

    for (let j = beginningIndex; j <= endIndex; j++) {
      mainArr[j] += addedValue

      if (mainArr[j] > highestValue) {
        highestValue = mainArr[j];
      }
    }

  }

  // highestValue = mainArr.sort( (a,b)=>  b - a )[0]

  console.log(highestValue)
  return highestValue;


}

// arrayManipulation(10 , [[1,5,3] , [4,8,7] , [6 , 9, 1]])




function arrayManipulationTwo(n, queries) {
  let mainArr = new Array(queries.length).fill(new Array(n));
  let highestValue = 0;

  for (let i = 0; i < queries.length; i++) {
    const beginningIndex = queries[i][0] - 1;
    const endIndex = queries[i][1] - 1;
    const addedValue = queries[i][2];

    // console.log(i)
    mainArr[i].fill(addedValue, beginningIndex)
    console.log(mainArr[i])

  }

  // highestValue = mainArr.sort( (a,b)=>  b - a )[0]

  console.log(mainArr)
  return highestValue;


}

// arrayManipulationTwo(5 , [[1,2,100] , [2,5,200] , [1 , 4, 300]])

function twoStrings(s1, s2) {
  let hashMap = {};

  for (let i = 0; i < s1.length; i++) {
    if (!hashMap[s1[i]]) {
      hashMap[s1[i]] = true;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (hashMap[s2[i]]) {
      console.log('YES')
      return 'YES'
    }
  }

  console.log('NO')
  return 'NO'
}

// twoStrings('hi', 'world')

function sherlockAndAnagrams(s) {

  let total = 0;

  for (let subLength = 1; subLength < s.length; subLength++) {
    for (let i = 0; i < s.length; i++) {
      let tempMap = {}
      let subString = Array.from(s.substring(i, i + subLength)).sort().join()
      tempMap[subString] = true
      for (let j = i + 1; j < s.length; j++) {
        let testSubStr = Array.from(s.substring(j, j + subLength)).sort().join()

        if (tempMap[testSubStr]) {
          total++
        }
      }
    }
  }

  console.log(total)
  return total

}

// sherlockAndAnagrams('mom')

function sherlockAndAnagramsTwo (s) {

  let allSubStrings = []
  let hashMap = {}
  let total = 0

  for (let subStringLength = 1 ; subStringLength < s.length; subStringLength++) {

    for(let j = 0 ; j + subStringLength  <= s.length ; j++) {
      allSubStrings.push(s.substring(j,j+subStringLength))
    }
  }

  for( let i = 0 ; i < allSubStrings.length ; i ++) {
   allSubStrings[i] = Array.from(allSubStrings[i]).sort().join('');

   if (!hashMap.hasOwnProperty(allSubStrings[i])) {
      hashMap[allSubStrings[i]] = 0
   } else if (hashMap.hasOwnProperty(allSubStrings[i])) {
     hashMap[allSubStrings[i]]++
     total+=hashMap[allSubStrings[i]]
   }
  }

  
  
  console.log(total)
  return total

}

// sherlockAndAnagramsTwo ('cdcd')


function maxiumumToys(prices , k) {
  let totalToys = 0
  let totalSpent = 0

  prices.sort((a,b) => a-b)

  console.log(prices)
 

  while( totalSpent + prices[totalToys] < k) {

    totalSpent += prices[totalToys];

    totalToys++

  }

  
  console.log( totalToys )
  return totalToys

}

// maxiumumToys([1 ,2,3,4] , 7 )


function maxiumumToysTwo(prices , k) {
  prices.sort((a,b) => a-b)
  let maxToys;
  let total = recursive(k)
  
  console.log(total)
  return total


  function recursive(k) {

    let totalSpent = prices.shift()
    

    if ( k - totalSpent < 0) {
      return 0
    }
  
    maxToys = 1 + recursive(k - totalSpent)
    
    return maxToys
    

  }
  


 

}

//  maxiumumToysTwo([1 ,2,3,4] , 7 ) 

 function alternatingCharacters(s) {
  let stringArr = s.split('')
  let delCount = 0;

  

  for (let i = 0 ; i < stringArr.length-1 ; i ++) {
    
    if (stringArr[i] === stringArr[i+1]) {
      stringArr.splice(i+1 ,1);
      i--;
      delCount++;
    }

  }

  console.log(delCount)
  return delCount
  
}




function alternatingCharactersTwo(s) {
  let delCount = 0;

  

  for (let i = 0 ; i < s.length -1 ; i ++) {
    
    if (s[i] === s[i+1]) {
  
      delCount++;
    }

  }

  console.log(delCount)
  return delCount
  
}


// alternatingCharactersTwo('ABABABAB')



function minimumAbsoluteDifference(arr) {

  let minAbso = Number.POSITIVE_INFINITY;

  for (let i = 0 ; i< arr.length ; i ++) {
    for (let j = i+1; j<arr.length ; j++) {
      const currAbsoluteValue = Math.abs(arr[i] - arr[j])

      if (currAbsoluteValue < minAbso) {
        minAbso = currAbsoluteValue;
      } 
    }
  }

  console.log(minAbso);
  return minAbso;


}

minimumAbsoluteDifference ([1, -3, 71, 68, 17])