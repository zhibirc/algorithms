# Generate Power set of given array

Generate all subsets (Power set) of elements of the given array (including the empty-set and the original set).

## General theory and analysis

It should be noted that here we extend the concept of a Power set to an array, despite originally it relates to a set as a collection of unique elements. An array in turn can have duplicated members.

## Implementation notes

It's important to note that the time complexity won't be better than $O(2 ^ N)$ because there are $2 ^ N$ subsets to generate.

**Version 1**
Cascading approach.

**Version 2**
Bitmask mapping approach.

**Version 3**
Recursive backtracking approach.

**Version 4**
Bit manipulation approach.

**Time complexity**: $O(N * 2 ^ N)$ for versions 1 and 2, $O(2 ^ N)$ for version 3

**Space complexity**: $O(1)$ (just several literal constants) if exclude the output from consideration (which is often the case).

## Links

[Wikipedia](https://en.wikipedia.org/wiki/Power_set)