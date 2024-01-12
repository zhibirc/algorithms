from collections import Counter

def is_potential_palindrome(s: str) -> bool:
    count_list = Counter(s).values()

    odd_count = 0
    
    for n in count_list:
        if n % 2:
            odd_count += 1
        if odd_count > 1:
            return False
    
    return True