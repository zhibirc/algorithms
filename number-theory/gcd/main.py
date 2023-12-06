# Euclidean algorithm
def getGcdV1 (a: int, b: int) -> int:
    while b:
        a, b = b, a % b

    return a

print(getGcdV1(13, 52)) # 13
print(getGcdV1(14, 63)) # 7