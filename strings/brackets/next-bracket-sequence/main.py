def findNextBracketSequence(s: str) -> str:
    n = len(s) - 1
    depth = 0

    for i in range(n, -1, -1):
        if s[i] == ')':
            depth += 1
        else:
            depth -= 1
        
        if s[i] == '(' and depth > 0:
            opened = n - i >> 1
            closed = n - i - opened
            
            return s[:i] + ')' + '(' * opened + ')' * closed

    return 'no solution'