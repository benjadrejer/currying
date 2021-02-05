// Ramda = currying/functional library
// Lodash contains a curry

// Closures
function outer(name) {
  return function(occupation) {
    return `${name} - ${occupation}`
  }
}

const closureCall = outer('benjamin');
// console.log(closureCall);
// console.log(closureCall('developer'));
// console.log(closureCall('warehouse worker'));

// Currying = transform function to be callable with a series of single arguments
// Partial Application = Specializing a currying function

// Helper function to transform regular function into a currying function
// func is the function to transform
function curry(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
}

// Regular functions that can be curried
const add = (a, b, c) => {
    return a + b + c;
}
const curry_add = curry(add);

const result = curry_add(1)(2)(3);
const result2 = curry_add(1)(2)
// console.log(result2(5))
// console.log(result2(3));

// -----------------------------

const log = (topic, code, message) => {
    return `Logging: ${topic} - Code ${code} - ${message}`;
}
const curry_log = curry(log);

const backendLogger = curry_log('Backend');

// console.log(backendLogger(1)('Successfully updated property'))
// console.log(backendLogger(4)('Failed to write to DB'))


// Use of currying / partial application?
// 1. reusable code/functions
// 2. minimize amount of function calls

// Currying of functions with variable # of arguments?

// Few notable resources:
// https://medium.com/front-end-weekly/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1
// https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983