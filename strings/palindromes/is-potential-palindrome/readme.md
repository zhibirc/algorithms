# Check if a given string is a potential palindrome

"Potential" means that the given string could be a true palindrome after shuffling its characters.
Given string could be shuffled unlimited times.

For example:
1. "mamaamam" is a real palindrome without any transformation.
2. "abcd" couldn't be transformed to palindrome by just shuffling its characters.
3. "xxyzxzx" could be and the result will be "xxzyzxx", or "xzxyxzx", or "zxxyxxz".

## General theory and analysis

The core idea here is the following. If a string with an even length is a palindrome, every character in the string must always occur an even number of times. If the string with an odd length is a palindrome, every character except one of the characters must always occur an even number of times. Thus, in case of a palindrome, the number of characters with odd number of occurrences can't exceed 1(1 in case of odd length and 0 in case of even length).

## Implementation notes

**Time complexity**:
- $O(N)$

**Space complexity**:
- $O(1)$

## Links
