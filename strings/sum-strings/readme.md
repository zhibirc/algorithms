# Sum strings

Given two strings which consist of decimal digits, i.e. two integers represented as strings, return their sum. This task implies that 
integers are non-negative.

## General theory and analysis

At first glance, task looks very simple because we're talking just about apply addition operator `+`. The task becomes much less trivial due to the fact that integers can be very, very large. This means that standard numeric types can be easily overflowed in case of straightforward solution and we should find another way to crack it.

To solve this we could use digit-by-digit addition of column method.

## Implementation notes

**Time complexity**: $O(max(N, M))$, where `N` and `M` are lengths of input strings correspondingly

**Space complexity**: $O(N)$

## Links

N/A
