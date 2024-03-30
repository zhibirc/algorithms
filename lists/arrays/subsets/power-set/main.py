from typing import List

def get_subsets_v1(nums: List[int]) -> List[List[int]]:
    subsets = [[]]
    
    for n in nums:
        subsets += [m + [n] for m in subsets]
    
    return subsets


def get_subsets_v2(nums: List[int]) -> List[List[int]]:
    n = len(nums)
    subsets = []
    k = 2 ** n
    
    for i in range(k, 2 * k):
        # generate bitmask, from 0..00 to 1..11
        bitmask = bin(i)[3:]
        
        # append subset corresponding to that bitmask
        subsets.append([nums[j] for j in range(n) if bitmask[j] == '1'])
    
    return subsets


def get_subsets_v3(nums: List[int]) -> List[List[int]]:
    def backtrack(start, subset):
        subsets.append(subset[:])
        for i in range(start, len(nums)):
            subset.append(nums[i])
            backtrack(i + 1, subset)
            subset.pop()

    subsets = []
    backtrack(0, [])

    return subsets


def get_subsets_v4(nums: List[int]) -> List[List[int]]:
    subsets = []
    n = len(nums)

    # Iterate over all possible combinations.
    for i in range(1 << n):
        subset = []
        for j in range(n):
            # Check if j-th bit is set in i.
            if i & (1 << j):
                subset.append(nums[j])
        subsets.append(subset)

    return subsets
