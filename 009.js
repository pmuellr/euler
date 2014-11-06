#!/usr/bin/env node

// https://projecteuler.net/problem=9

// Special Pythagorean triplet
// Problem 9
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
//    a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

init()

forRange(1, 998, function(a){
  forRange(1, 999-a, function(b){
    var c = 1000 - a - b

    if (a*a + b*b == c*c) {
      console.log(a + "^2 + " + b + "^2 == " + c + "^2")
      console.log(a + " * " + b + " * " + c + " == " + a*b*c)
      process.exit()
    }
  })
})

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
}
