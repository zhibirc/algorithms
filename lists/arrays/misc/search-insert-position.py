# Search Insert Position
# Given a sorted array of distinct integers and a target value, return the index if the target is found.
# If not, return the index where it would be if it were inserted in order.

from typing import List

def search(nums: List[int], target: int) -> int:
    """ Time complexity: O(log(N)). """

    start = 0
    end = len(nums) - 1

    while start <= end:
        mid = start + (end - start) // 2

        if nums[mid] == target:
            return mid
        
        if nums[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
    
    return start