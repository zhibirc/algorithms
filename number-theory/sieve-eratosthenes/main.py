from typing import List
from math import sqrt, floor

def getPrimesV1(n: int) -> List[int]:
    primes = [n for n in range(n + 1)]
    current = primes[2]

    for i in range(2, n + 1):
        if primes[i]:
            current = 2 * i
            while current <= n:
                primes[current] = False
                current += i

    return [*filter(bool, primes)][1:]

print(getPrimesV1(30)) # [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


def getPrimesV2(n: int) -> List[int]:
    primes = [n for n in range(n + 1)]
    current = primes[2]

    for i in range(2, floor(sqrt(n))):
        if primes[i]:
            current = i ** 2
            while current <= n:
                primes[current] = False
                current += i

    return [*filter(bool, primes)][1:]

print(getPrimesV2(31)) # [2, 3, 5, 7, 11, 13, 17, 19, 23, 25, 29, 31]