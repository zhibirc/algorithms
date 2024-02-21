from collections import Counter

def get_largest_palindrome_size_v1(s: str) -> int:
    if len(set(s)) == 1:
        return len(s)

    counter, answer, remainder = Counter(s), 0, 0

    for value in counter.values():
        if value & 1 == 0:
            answer += value
        elif value == 1:
            remainder = 1
        else:
            answer += value - 1
            remainder = 1
    
    return answer + remainder

def get_largest_palindrome_size_v2(s: str) -> int:
    values = Counter(s).values()
    pairs = remainder = 0

    for value in values:
        pairs += value >> 1
        remainder += value & 1
        
    return 2 * pairs + (1 if remainder else 0)
