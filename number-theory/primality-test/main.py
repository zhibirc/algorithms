from math import sqrt, gcd
from random import randint

def checkTrivial(n: int) -> bool:
    if n < 2:
        return False
    
    if n < 4:
        return True

    if n % 2 == 0 or n % 3 == 0:
        return False
    
    # first Carmichael numbers: composite numbers n such that a^(n-1) == 1 (mod n) for every a coprime to n
    # see: https://oeis.org/A002997, there are in fact infinitely many Carmichael numbers
    # especially important for probabilistic tests, because they pass the Fermat primality test but are not actually prime
    carmichaelNumbers = {561,1105,1729,2465,2821,6601,8911,10585,15841,
 29341,41041,46657,52633,62745,63973,75361,101101,
 115921,126217,162401,172081,188461,252601,278545,
 294409,314821,334153,340561,399001,410041,449065,
 488881,512461}
    if n in carmichaelNumbers:
        return False

def power(a: int, n: int, p: int) -> int:
    res = 1
    a = a % p
 
    while n > 0:
        if n & 1:
            res = (res * a) % p
 
        n = n >> 1
        a = (a * a) % p

    return res

def isPrimeV1(n: int) -> bool:
    """ The Trial division test """

    fastCheckResult = checkTrivial(n)

    if fastCheckResult is not None:
        return fastCheckResult
    
    d = 5
    limit = sqrt(n)

    # or use: d * d <= n
    while d <= limit:
        if n % d == 0 or n % (d + 2) == 0:
            return False
        d += 6

    return True

def isPrimeV2(n: int, k: int = 1) -> bool:
    """ The Fermat test """

    fastCheckResult = checkTrivial(n)

    if fastCheckResult is not None:
        return fastCheckResult

    # we could increase number of tests to increase probability
    while k > 0:
        # a in the interval 1 < a < n − 1 or [2, n − 2]
        a = randint(2, n - 2)

        if gcd(a, n) > 1:
            # n is composite
            return False

        if power(a, n - 1, n) != 1:
            # n is composite
            return False

        k -= 1

    # n is probably prime
    return True

def isPrimeV3(n: int) -> bool:
    """ The Miller-Rabin test """

    fastCheckResult = checkTrivial(n)

    if fastCheckResult is not None:
        return fastCheckResult
    
    # a in the interval 1 < a < n − 1 or [2, n − 2]
    a = randint(2, n - 2)

    # @todo



# tests for Trial division implementation
assert isPrimeV1(0) == False
assert isPrimeV1(1) == False
assert isPrimeV1(2) == True
assert isPrimeV1(3) == True
assert isPrimeV1(4) == False
assert isPrimeV1(503) == True
assert isPrimeV1(841) == False
assert isPrimeV1(2 ** 31 - 1) == True

# tests for Fermat test implementation
assert isPrimeV2(0) == False
assert isPrimeV2(1) == False
assert isPrimeV2(2) == True
assert isPrimeV2(3) == True
assert isPrimeV2(4) == False
assert isPrimeV2(503) == True
assert isPrimeV2(841, 5) == False
assert isPrimeV2(2 ** 31 - 1) == True

# tests for Miller-Rabin test implementation