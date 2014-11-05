#!/usr/bin/env node

// https://projecteuler.net/problem=5

// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?

init()

console.log("smallest multiple (10):", smallestMultiple(10))
console.log("smallest multiple (20):", smallestMultiple(20))

// prime < 10:  [ 2, 3, 5, 7 ]
// add prime to get 4: add a 2
// add prime to get 6: already there (2,3)
// add prime to get 8: add a 2
// add prime to get 9: add a 3
// [ 2, 3, 5, 7, 2, 2, 3 ] - multiply
// 2 * 3 * 5 * 7 * 2 * 2 * 3 = 2520

//------------------------------------------------------------------------------
function smallestMultiple(max) {
  var totalPFs = {}

  forRange(2, max, function(num){
    var pfs = primeFactors(num)

    forProperties(pfs, function(pf, count){
      totalPFs[pf] = totalPFs[pf] || 0
      totalPFs[pf] = Math.max(totalPFs[pf], count)
    })
  })

  printPFs = []
  forProperties(totalPFs, function(key, val){
    printPFs.push(key + "^" + val)
  })
  console.log(printPFs.join(" * "))

  var value = 1

  forProperties(totalPFs, function(pf, exp){
    pf = parseInt(pf)
    forRange(1, exp, function(){
      value = value * pf
    })
  })

  return value
}

//------------------------------------------------------------------------------
// Return the prime factors of a number as an object where the properties
// are the factors, and the values are the exponent of the factor.  eg 12
// as input would return {"2":2, "3":1}
//------------------------------------------------------------------------------
function primeFactors(num) {
  pfs = {}

  numSqrt = Math.sqrt(num)

  for (var factor=2; factor<=numSqrt; factor++) {
    if (!isPrime(factor)) continue

    while (true) {
      if (0 != num % factor) break

      pfs[factor] = pfs[factor] || 0
      pfs[factor]++

      num = num / factor
    }
  }

  if (isPrime(num)) {
    pfs[num] = pfs[num] || 0
    pfs[num]++
  }

  return pfs
}

//------------------------------------------------------------------------------
function isMultiple(test, max) {
    var factors = getFactors(test)

    for (var i=1; i<=max; i++) {
      if (-1 == factors.indexOf(i)) return false
    }

    return true
}

//------------------------------------------------------------------------------
function isPrime(num) {
  if (num <= 1) return false

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
