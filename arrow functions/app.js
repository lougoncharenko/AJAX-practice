// const sayHello=function(){
//     console.log('Hello')
// }

// sayHello()

const sayHello=() => console.log('Hello');
sayHello();

//return objects 
//single param does not need parenthesis
const greeting = name => console.log(`Hello ${name}`);
greeting('sarah');

//multiple parameters
//multiple  params needs parentheses
const greeting2 = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
greeting2('Lou',"Boo")


const users= ['nathan', 'john', 'will']
// const nameLengths=users.map(function(name){
//     return name.length
// });
// console.log(nameLengths)

const nameLengths= users.map((name) => name.length);
console.log(nameLengths)

