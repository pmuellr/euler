#!/usr/bin/env node

// https://projecteuler.net/problem=7

// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
//
// What is the 10 001st prime number?


init()

which  = 10001
primes = [2]
test   =  2

while (primes.length < which) {
  test++

  if (isPrime(test, primes)) {
    primes.push(test)
    console.log("%d: %d", primes.length, test)
  }
}

console.log("The", which, "th prime is", primes.pop())


//------------------------------------------------------------------------------
function isPrime(num, primes) {
  var numSqrt = Math.sqrt(num)

  for (var i=0; i<primes.length; i++) {
    var prime = primes[i]

    if (prime > numSqrt)  return true
    if (0 == num % prime) return false
  }

  return true
}

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
