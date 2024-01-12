# Rabin–Karp algorithm

Determine if string *haystack* contains string *needle* using Rabin–Karp algorithm.

## General theory and analysis

It's not the fastest string search algorithm, but it has one significant advantage -- this algorithm can be used for non-strict search.

## Implementation notes

**Time complexity**:
- $O(n * m + m)$
- $\Theta(n + m)$
- $\Omega(n + m)$

where $n$ is the length of *haystack* and $m$ is the length of *needle*

**Space complexity**:
- $O(1)$

## Links

[Wikipedia](https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm)