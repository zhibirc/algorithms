def sumStrings(x: str, y: str) -> str:
    if x == '0': return y
    if y == '0': return x

    mx = max(len(x), len(y))
    x, y = x.zfill(mx), y.zfill(mx)
    answer, carry, i = '', 0, mx - 1

    while i >= 0:
        carry, digit = divmod(int(x[i]) + int(y[i]) + carry, 10)
        answer = f'{digit}{answer}'
        i -= 1

    return f'{carry}{answer}' if carry else answer