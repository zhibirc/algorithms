# Check if a given string is a palindrome

Check if a given string is a palindrome. Return `true` if it's palindrome and `false` if it's not.

## General theory and analysis

Basically, the fundamental property of any palindrome is that is reads the same from both ends. So, we could just compare the original string with its reversed representation. However, reversing a string in programming languages where strings are immutable objects, requires using additional memory for reversed copy. Consequently, memory consumption will be $O(N)$ in that case.

From the other side, in those cases where we know an input string will be small enough, comparing original string with its reversed copy (in many languages reversing a string could be done as $O(N)$ operation using library functions) will be preferential due to better readability and smaller room for errors.

## Implementation notes

The proposed algorithm uses two pointers approach for checking complementary characters for equality.
If this invariant is violated use early return with negative result.

**Time complexity**: $O(N/2)$ -> $O(N)$

**Space complexity**: $O(1)$

We do our check in-place, without creating auxiliary data structures, so no additional space is required.

## Links