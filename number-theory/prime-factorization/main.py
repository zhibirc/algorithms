from typing import List
from math import floor, sqrt

def factorizeV1(n: int) -> List[int]:
    result = []

    for d in range(2, floor(sqrt(n))):
        while n % d == 0:
            result.append(d)
            n //= d
    
    if n > 1:
        result.append(n)

    return result

print(factorizeV1(39)) # [3, 13]
print(factorizeV1(40)) # [2, 2, 2, 5]
print(factorizeV1(41)) # [41], already prime


def factorizeV2(n: int) -> List[int]:
    result = []

    return result
