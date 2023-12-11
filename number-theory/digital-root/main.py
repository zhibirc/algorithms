def getDigitalRoot(n: int, radix: int = 10) -> int:
    if n == 0:
        return 0
    
    r = n % (radix - 1)

    if r == 0:
        return radix - 1
    
    return r

print(getDigitalRoot(459100297836)) # 9
print(getDigitalRoot(793508511097301)) # 5
print(getDigitalRoot(1)) # 1