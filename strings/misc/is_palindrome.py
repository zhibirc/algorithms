from collections import Counter

def is_potential_palindrome(s: str) -> bool:
    count_list = Counter(s).values()

    if len(s) % 2 == 0:
        for k in count_list:
            if k % 2 != 0:
                return False
        return True 
    else:
        odds = 0
        for k in count_list:
            if k % 2 != 0:
                odds += 1
            if odds > 1:
                return False
        return True