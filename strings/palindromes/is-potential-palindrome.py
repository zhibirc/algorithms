# Check if a given string is a potential palindrome.
# "Potential" means that the given string could be a true palindrome after shuffling its characters.
# Given string could be shuffled unlimited times.
# For example:
# 1. "mamaamam" is a real palindrome without any transformation.
# 2. "abcd" couldn't be transformed to palindrome by just shuffling its characters.
# 3. "xxyzxzx" could be and the result will be "xxzyzxx", or "xzxyxzx", or "zxxyxxz".

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