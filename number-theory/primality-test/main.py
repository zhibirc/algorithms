from math import sqrt, gcd
from random import randint

def checkTrivial(n: int) -> bool:
    if n < 2:
        return False
    
    if n < 4:
        return True

    if n % 2 == 0 or n % 3 == 0:
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

def isPrimeV2(n: int) -> bool:
    """ The Fermat test """

    fastCheckResult = checkTrivial(n)

    if fastCheckResult is not None:
        return fastCheckResult

    # we could choose several integers to increase probability
    a = randint(2, n - 2)

    if gcd(a, n) > 1:
        return False

    if power(a, n - 1, n) != 1:
        return False

    return True

def isPrimeV3(n: int) -> bool:
    """ The Miller-Rabin test """

    pass



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
assert isPrimeV2(841) == False
assert isPrimeV2(2 ** 31 - 1) == True

# tests for Miller-Rabin test implementation