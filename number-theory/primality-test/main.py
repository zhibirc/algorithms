from math import sqrt

def isPrime(n: int) -> bool:
    if n < 2:
        return False
    
    if n < 4:
        return True

    if n % 2 == 0 or n % 3 == 0:
        return False
    
    d = 5
    limit = sqrt(n)

    # or use: d * d <= n
    while d <= limit:
        if n % d == 0 or n % (d + 2) == 0:
            return False
        d += 6

    return True

assert isPrime(0) == False
assert isPrime(1) == False
assert isPrime(2) == True
assert isPrime(3) == True
assert isPrime(4) == False
assert isPrime(503) == True
assert isPrime(841) == False
assert isPrime(2 ** 31 - 1) == True