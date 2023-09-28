# Possible strategies;
# 1. Create new array. Traverse source array from 0 to N - 1. On each iteration check if int is even.
#    If so, put it in the end of source array, otherwise push to the end. Complexity: O(N * N) CPU, O(N) RAM.
# 2. Create two arrays, one for even ints and one for odd ints. Traverse source array from 0 to N - 1.
#    On each iteration check push int to appropriate array. Return concatenated array.
#    Complexity: O(N) CPU, O(N) RAM.
# 3. Computation complexity apparently couldn't be increased, but memory consumption could be.
#    Let's traverse using two indices and swap  elements in case left one is odd and right one is even.
#    Stop when pointers touch. Complexity: O(N) CPU, O(1) RAM.

from typing import List

def sortArrayByParity(nums: List[int]) -> List[int]:
    left, right = 0, len(nums) - 1

    while left < right:
        if not nums[left] % 2:
            left += 1
        elif nums[right] % 2:
            right -= 1
        else:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
        
    return nums