# Find the Longest Increasing Subsequence (LIS) in the given array.
#
# === Solution ===
# O(N * log(N))
import math

def longestIncreasingSubsequence(arr):
    l = len(arr)
    s1 = [None] * l
    s2 = [None] * (l + 1)
    result = 0
    tmp = 0

    for i in range(0, l):
        left = 1
        right = result
        while left <= right:
            mid = math.ceil((left + right) / 2)

            if arr[s2[mid]] < arr[i]:
                left = mid + 1
            else:
                right = mid - 1

        tmp = left
        s1[i] = s2[tmp - 1]
        s2[tmp] = i
        if tmp > result: result = tmp
    
    return result