// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = ['Jen', 'Sam'];
// var groupB = ['Emma', 'Gemma'];
//
// var final = [ 3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Sam', 39]
var person2 = ['Josh', 35]

function hello(name, age) {
  console.log( 'Hi '+ name + ', you are ' + age);
}

hello(...person);
hello(...person2);

var names = ['Sam', 'Chris'];
var name = ['Josh'];

var all_names = [...name, ...names]
for (var i = 0; i < all_names.length; i++) {
  console.log('Hi ' + all_names[i]);
}
