#!/usr/bin/env node

// https://projecteuler.net/problem=1

// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

sum = 0
for (var i=1; i<1000; i++) {
  if (!div3or5(i)) continue
  sum += i
}

console.log(sum)

//------------------------------------------------------------------------------
function div3or5(num) {
  if (num % 3 == 0) return true
  if (num % 5 == 0) return true
  return false
}
