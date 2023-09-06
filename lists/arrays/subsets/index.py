# Given an integer array of unique elements, return all possible subsets (the power set).
# See: https://en.wikipedia.org/wiki/Power_set

from typing import List

def get_subsets(nums: List[int]) -> List[List[int]]:
    """
    Solution 1. 
    Cascading approach for subsets generation. Time complexity: O(N * 2^N).
    """

    subsets = [[]]
    
    for n in nums:
        subsets += [m + [n] for m in subsets]
    
    return subsets


def subsets(nums: List[int]) -> List[List[int]]:
    """
    Solution 2. 
    Bitmask mapping approach for subsets generation. Time complexity: O(N * 2^N).
    """
    n = len(nums)
    subsets = []
    k = 2 ** n
    
    for i in range(k, 2 * k):
        # generate bitmask, from 0..00 to 1..11
        bitmask = bin(i)[3:]
        
        # append subset corresponding to that bitmask
        subsets.append([nums[j] for j in range(n) if bitmask[j] == '1'])
    
    return subsets