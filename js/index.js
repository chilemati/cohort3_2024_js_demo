// keyword variableName = value;
var a = 5;
let b = 6;
const c = 7;
console.log(a)
console.log(b)
console.log(c);

// updating a variable
var a = 15;
console.log(a)
b= 16;
console.log(b)
//  c = 17;

console.log(c);

//! operators

//? arithematic operators
let d = 4; e = 2;

console.log(d+ e) // 6
console.log(d/ e) // 2
console.log(d* e) // 8
console.log(d** e) // 16
console.log(d % e) // 0
console.log(++d) // 5
console.log(--d) // 4

//? comparison operators
let f = 7;
console.log(f > 9); // false
console.log(f < 9); // true 
console.log(f == 9); // false 
console.log(f >= 9); // false 
console.log(f <= 9); // true 
console.log(f != 9); // true 
console.log(f == '7'); // true 
console.log(f === '7'); // false 
console.log(f !== '7'); // false 

//? logical operators
 /* 
   && is like multiplication

   in truth table 0=false and 1= true;

   condition1  condition 2  result action
      0            1          0      false
      1            0          0      false
      0            0          0      false
      1            1          1      true
 
   || is like addition

   in truth table 0=false and 1= true;

   condition1  condition 2  result action
      0            1          1      true
      1            0          1      true
      0            0          0      false
      1            1          1      true
 
 */

let isMarried = false;

console.log(!isMarried,'married') // true
console.log(f > 9 && f<9); // false
console.log(f > 9 && f< 19); // false
console.log(f < 9 && f< 19); // true
console.log(f > 9 || f<9); // true
console.log(f > 9 || f< 19); // true
console.log (f < 9|| f< 19); // true

// compound operation

let g = 6;
/* 
  a +=b equivalent to  a = a +b;
  a -=b equivalent to  a = a -b;
*/
console.log(g += 1); // 7
console.log(g += 8); // 15
console.log(g += 15); // 30
console.log(g -= 15); // 15
console.log(g *= 15); // 225
console.log(g /= 15); // 15
console.log(g %= 15); // 0

//? other operators
/* 
  = assignment operator
*/

let v = 99;


//? boolean variable
console.log('******* today *************')
let isMale = true;
console.log(isMale)
console.log(typeof isMale);

let blogs = null; /// declaring blogs and initializing it
console.log(blogs,typeof blogs);
 blogs = []; // updating blogs
 console.log(blogs);

 let age; // declaring age without initializing it
 let age2 = undefined;

 console.log(age,age2)
 age= 969;
 console.log(age);

 let num = 10;
 let num2 = 33.5;
 console.log(num,num2)
//  number methods
console.log(3**3);
console.log(Math.pow(3,3));
console.log(Math.round(num2));
console.log(Math.PI);
console.log(Math.sin(60));
console.log(Math.log(10))
console.log(Math.random());

// Learn how to use Math.random() to generate random numbers form 0 to any number

//? strings

let Name = 'Chile';
console.log(typeof Name)
// stringVariable.length;
console.log(Name.length)
// how to get any letter from a string value
// a string is like an array
/* index:01234 
         chile
  items: 12345

  to get i from chile
  stringVariable[index]
*/

console.log(Name[2]);
let fullName = 'Amadi Chile';
console.log(fullName.length)

// how to replace a letter in a sring
fullName = fullName.replace('Chile',"White");
console.log(fullName)

/* 
  assignment 2
  > learn how delete letter from a string
  // >
*/

let Fruit = 'Apple';

// delete A
console.log(Fruit)
Fruit = Fruit.replace('A','');
console.log(Fruit)
// convert a string to an array
let arrFruit = Fruit.split('');
let sentence = 'I love to swim';
let arrSentence = sentence.split('o')
console.log(arrFruit)
console.log(arrSentence);
// joining two strings using .concat()
let text1 = 'sea';
let text2 = 'food';
let result = text1.concat(text2);
console.log(result)
// joining two strings using +
console.log(text1+text2);

let n1 = 1;
let n2 = '1';
console.log(n1+n2)
// how to inject a variable into a string
let hobby = 'dance';
// I love to swim
let sent = "I love to " + hobby;
console.log(sent);

let name = 'Wofai';
let country = 'Syrialone';
let occupation = 'Investor';

// My name is chile. I am from Nigeria and I am a web developer;
let ans = "My name is " + name + ". "+ "I am from " + country + " I am an "+ occupation;
console.log(ans);
// using template string
// how to inject variable in template string `${varialbe}`;
let ans2 = `My Name is ${name}. I am from ${country} and I am an ${occupation}`;
console.log(ans2);


//! Arrays

// let arr = [item,item2]

let cars = ['toyota','BMW','lexus','Benz','Volvo'];
console.log(cars)
// accessing array items
// arrName[index];
console.log(cars[0])

// length of an array
let lenght = cars.length;
console.log(lenght)
// add to array
// cars.push('Venza','Kia'); // adds from the front
// cars.unshift('Toyota','Truck')
// cars.pop(); // removes from the back
// cars.shift(); // removes from the front

// how to delete items from an array
// delete cars[2];
cars.splice(2,1) // using splice to delete
cars.splice(1,0,'venza','kia')
console.log(cars);

// how to check if an item exist in an array
console.log(cars.includes('venza'))
console.log(cars.indexOf('Venza'))
// searching a string
let question = 'how to check if an item exist in an array';

console.log(question.includes('array'))
console.log(question.indexOf('a'))
console.log(question.lastIndexOf('a'))

//! object

let remote = {
  // key:value
  name: 'LG',
  color: 'Black',
  "owner": 'Elitepath'
}
// the key:value pairs forms the properties on an object

// how to get object values
// objectName.key or ObjectName['key']
console.log(remote.name)
// adding new properties

Object.defineProperty(remote,'age',{value: '1 year'});
remote.button= true; // if the key exist then update the value else add the key and value
// delete key from object
delete remote.button;
console.log(remote);

//! functions
// uses of function

// how to create a function
//? using function keyword
/* 
 function functionName () {
  code block
 }
  calling the function
  functionName();
*/
function greetUser () {
  console.log('Good Morning Mr. Chile!')
}
//? using arrow function
const greetUser2 = ()=> {
  console.log('Good After Mr. Chile!');
}

greetUser()
greetUser2()
//? hoisting
// how to make a function dynamic
// how to return values from a function



