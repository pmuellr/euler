#!/usr/bin/env node

// https://projecteuler.net/problem=4

// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.


init()

palindromes = []

for (var i=100; i<1000; i++) {
  for (var j=100; j<1000; j++) {
    if (isPalindrome(i*j)) {
      palindromes.push([i*j, i, j])
    }
  }
}

palindromes.sort(function(a,b){ return a[0]-b[0]})

palindromes.forEach(function(palindrome){
  console.log(palindrome[0], palindrome[1], palindrome[2])
})

//------------------------------------------------------------------------------
function isPalindrome(num) {
  var digits = ("" + num).split("")

  while (digits.length > 1) {
    var top = digits.shift()
    var bot = digits.pop()

    if (top != bot) return false
  }

  return true
}

//------------------------------------------------------------------------------
function init() {
}
