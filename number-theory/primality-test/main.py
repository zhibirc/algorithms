from math import floor, sqrt

def isPrime(n: int) -> bool:
    if n < 2:
        return False

    for d in range(2, floor(sqrt(n))):
        if n % d == 0:
            return False
    
    return True

print(isPrime(51)) # false
print(isPrime(2 ** 31 - 1)) # true
