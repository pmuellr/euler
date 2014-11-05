#!/usr/bin/env node

// https://projecteuler.net/problem=3

// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

init()

largestPrimeFactor(600851475143)

//------------------------------------------------------------------------------
function largestPrimeFactor(num) {
  var factors = getFactors(num)

  console.log("factors of", num)
  for (var i=0; i<factors.length; i++) {
    var factor = factors[i]
    var prime  = isPrime(factor) ? "PRIME!" : "!prime"

    console.log(prime, factor)
  }
}

//------------------------------------------------------------------------------
function isPrime(num) {
  if (_isPrime[num]) return true

  var factors = getFactors(num)

  if (factors.length == 2) {
    _isPrime[num] = true
    return true
  }

  return false
}

//------------------------------------------------------------------------------
function getFactors(num) {
  if (num <= 0) return [num]

  if (_factors[num]) return _factors[num]

  var sqrtNum = Math.sqrt(num)

  var factors = [1, num]
  for (var i=2; i<=Math.sqrt(num); i++) {
    if (num % i == 0) {
      factors.push(i)

      var other = num / i
      factors.push(other)
    }
  }
  factors.sort(function(a,b) {return a-b})

  _factors[num] = factors
  return factors
}

//------------------------------------------------------------------------------
function init() {
  _isPrime = {}
  _factors = {}
}
