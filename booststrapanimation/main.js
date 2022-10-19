// template strings

// const number1 = 30,
//       number2 = 20,
//       number3 = -10;


//       let result;
//       result = ( 20 + 30 ) * 2;

//     //   30% discount payment

//     const cartItems = (30+20+50+25);
//     const discount = (cartItems / 100) * 30;
//     const totalPay = cartItems - discount;


    
//     const power = 'her superpower is flying!!!';
        

//     let output;


//     output = power.replace('flying','teleportation');
//     output = power.toUpperCase()

    

// let chinny;


// split method, replace, IndexOf, slice, substring, repeat, length 

// creating an array
// const numbers = [10,20,30,40,50];
// console.log(numbers);

// array of months
// const months = new Array('January','Febuary','March','April','May','June');

// sort numbers
// const arrayNumbers = [3,1,25,100,67,1,10,5,5,9,4];


// order from lower to higher numbers

// arrayNumbers.sort(function(number1, number2){
//     return number1 - number2;
// })

// // order from higher to lower numbers

// arrayNumbers.sort(function(number1, number2){
//     return number2 - number1;
// })


// console.log(arrayNumbers);



// order an array(sort)
// let fruits = ['Banana', 'Apple', 'Strawberry', 'Orange', 'Watermelon'];

// console.log(fruits.sort().reverse());

// reverse
// months.reverse();
// concatenate 2 arrays
// const array1 = [1,2,3],
//       array2 = [9,8,7];

// console.log(array1.concat(array2));



// console.log(months);


// remove elements from the end(pop)
// months.pop();
// remove element from the beginning(shift)
// months.shift();

// remove from the middle of the array also using splice first one = position, 2nd one = how many to remove starting from the position picked
// 3rd one = name of element
// months.splice(3, 1);

// console.log(months);

// check the length of the array
// console.log(months.length);
// check if it is an array


// let name = 'Chinny'
// console.log(Array.isArray(name));

// change the values of the array
// months[4] = 'My Birthday';
// console.log(months);

// find something in the array
// console.log(months.indexOf('January'));

// add more items into the array push(at the end of the array)
// months.push('July');
// add more items into the array unshift(at the beginning of the array)
// months.unshift('Month 0')

// add an element in the middle of the srray(splice)
// months.splice(3, null, 'a New Month')

//     print results
//     console.log('Total: ' + cartItems);
//     console.log('Discount: ' + discount);
//     console.log('Pay: $' + totalPay);
//     console.log(output);
//     console.log(chinny);

// const sum = 10 + 10

// // types of functions
// // 1. anonymous functions: allows function names to appear hidden in the declaration itself
// let greet = function () {  
//     console.log("greet1", sum);
// };
// greet();


// // 2. Arrow functions
// // cleaner way of creating JS functions
// let greet2 = () => {
//             const sum = 5 + 5
//             console.log("greet2",sum);
//             // greet()
//         }
// greet2();
// // console.log("y",sum)

// 3. asynchronous functions
// a technique that enables your program 
// to start a potentially long-running
// task and still be able to be responsive
// to other events while that task runs
// eg callbacks, promises, async wait
// setTimeout(myFunction("Andre"), 10000);

// function myFunction(name) {
//     document.getElementById("demo").innerText = "I Love You!!" + name;
// }

// 4. synchronous function
// runs in sequence. meaning each operation
// must wait for the previous one to complete before executing

// function makeGreeting(name) {
//     return 'Hi guys, my name is ${name}!';
// }

// const name = 'Chinny';
// const greeting = 
// makeGreeting(name);
// console.log(greeting);

// 5. Named functions
// a way of referring to a function that
// employs the function keyword followed by a
// name that can be used as a callback to that function
// function createPerson(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         getFullName() {
//             return firstName + ' ' + lastName;
//         }
//     }
// }

// let name = createPerson('Ebuka', 'Ezeokoye');
// console.log(name.getFullName());




