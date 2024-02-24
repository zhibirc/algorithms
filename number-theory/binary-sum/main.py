def sum_v1(x: str, y: str) -> str:
    return bin(int(x, 2) + int(y, 2))[2:]

def sum_v2(x: str, y: str) -> str:
    maxLen = max(len(x), len(y))
    x, y = x.zfill(maxLen), y.zfill(maxLen)
    carry = 0
    result = []

    for i in range(maxLen - 1, -1, -1):
        carry += (x[i] == '1') + (y[i] == '1')
        result.append('1' if carry & 1 else '0')
        carry >>= 1

    if carry == 1:
        result.append('1')

    return ''.join(result[::-1])
