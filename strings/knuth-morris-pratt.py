# Implementation of Knuth–Morris–Pratt algorithm (KMP).
#
# Asymptotic complexity is linear in the worst case.

from typing import List

def find(needle: str, haystack: str) -> int:
    index = -1
    prefix_list = calculate_prefix_func(needle)
    j = 0

    for i in range(len(haystack)):
        while j > 0 and needle[j] != haystack[i]:
            j = prefix_list[j - 1]
        
        if needle[k] == haystack[i]:
            j += 1

        if j == len(needle):
            index = i - j + 1
            break

    return index

def calculate_prefix_func(template: str) -> List[int]:
    """ Complexity: O(N), where N is the length of input string. """

    pi: List[int] = [0] * len(template)
    j: int = 0
    
    for i in range(1, len(template)):
        while j > 0 and template[j] != template[i]:
            j = pi[j - 1]

        if template[j] == template[i]:
            j += 1
        
        pi[i] = j
    
    return pi

print(calculate_prefix_func('aabaab')) # 0 1 0 1 2 3