# Reverse vowels

Given a string of ASCII printable characters, reverse the order of vowels $\{'a', 'e', 'i', 'o', 'u'\}$ in it. 
Vowels can be in lower and upper case and can be repeated. Return string after applying changes.

## General theory and analysis

### v1

Iterate over input string and use stack to collect vowel characters in order from left to right. After that, in second loop, 
iterate over the string again and if we face consonant just concatenate it with output string, otherwise `pop` a vowel from 
the head of our vowel-filled stack and do the same.

### v2

Apply two-pointers approach to simultaneously iterate over the string and access vowels which should be swapped. Despite two nested loops (we could omit that too!), each character is visited only once, so time complexity remains linear.

## Implementation notes

**Time complexity**: $O(N)$

**Space complexity**: $O(N)$

## Links

N/A
