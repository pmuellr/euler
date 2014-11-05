#!/usr/bin/env node

// https://projecteuler.net/problem=6

// Sum square difference
// Problem 6
// The sum of the squares of the first ten natural numbers is,
//
//     1^2 + 2^2 + ... + 10^2 = 385
//
// The square of the sum of the first ten natural numbers is,
//
//     (1 + 2 + ... + 10)^2 = 55^2 = 3025
//
// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

init()

sum          = 0
sumOfSquares = 0

forRange(1, 100, function(num){
  sum          += num
  sumOfSquares += num*num
})

console.log(sum*sum, "-", sumOfSquares, "=", sum*sum - sumOfSquares)

//------------------------------------------------------------------------------
function forProperties(object, fn) {
  for (var key in object) {
    fn(key, object[key])
  }
}

//------------------------------------------------------------------------------
function forRange(start, stop, fn) {
  for (var i=start; i<=stop; i++) {
    fn(i)
  }
}

//------------------------------------------------------------------------------
function init() {
  _factors = {}
  _isPrime = {}
}
