# Algorithms

[![Maintenance](https://img.shields.io/maintenance/yes/2025.svg?style=flat)]()
![GitHub repo size](https://img.shields.io/github/repo-size/zhibirc/algorithms?style=flat&color=008080)
![Static Badge](https://img.shields.io/badge/algorithms-42-f0e68c)
![Static Badge](https://img.shields.io/badge/data_structures-4-f0e68c)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg?style=flat)]()
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)

---

This is yet another place where various algorithms live.

The main focus was made on algorithms themselves, so you can find their implementations in different programming languages (mostly Python, TypeScript and Go). Each algorithm to the much extent possible is provided with the necessary description, including its asymptotic complexity and memory consumption.

You and/or your company could use it as a source for coding skills assessment during technical interview process, as an additional resource for self-preparation or just as a source for your own awesome algorithms collection.

## Content

| Type                  | Problem                                                                                                                           |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|**Number theory**      |[🔗](./number-theory/)                                                                                                             |
|                       |[Sum of binary strings](./number-theory/binary-sum/)                                                                               |
|                       |[Primality test](./number-theory/primality-test/)                                                                                  |
|                       |[Sieve of Eratosthenes](./number-theory/sieve-eratosthenes/)                                                                       |
|                       |[Greatest common divisor (GCD)](./number-theory/gcd/)                                                                              |
|                       |[Digital root](./number-theory/digital-root/)                                                                                      |
|**Games**              |[Sudoku solver (backtracking)](./games/sudoku-solver.py)                                                                           |
|**Strings**            |[🔗](./strings/)                                                                                                                   |
|Palindromes            |[Check if a given string is a palindrome](./strings/palindromes/is-palindrome/)                                                    |
|Palindromes            |[Check if a given string is a potential palindrome](./strings/palindromes/is-potential-palindrome/)                                |
|Permutations           |[Generate all possible balanced bracket sequences of `N` pairs](./strings/permutations/balanced-bracket-sequences.py)              |
|Permutations           |[Generate all possible permutations of string letters (recursion)](./strings/permutations/generate-all-recursive.ts)               |
|Permutations           |[Reverse vowels](./strings/permutations/reverse-vowels/)                                                                           |
|Brackets               |[Check correctness of a given bracket sequence (one bracket type)](./strings/brackets/is-correct-onetype-bracket-sequence/)        |
|Brackets               |[Check correctness of a given bracket sequence (multiple bracket types)](./strings/brackets/is-correct-multitype-bracket-sequence/)|
|Brackets               |[Determine the maximum depth of nesting brackets in a given sequence](./strings/brackets/nesting-brackets-depth/)                  |
|Brackets               |[Generate all possible balanced bracket sequences of N pairs](./strings/brackets/generate-bracket-sequences-recursion/)            |
|Brackets               |[Total amount of correct bracket sequences for N bracket pairs](./strings/brackets/bracket-sequence-total-amount/)                 |
|Brackets               |[Next Bracket Sequence](./strings/brackets/next-bracket-sequence/)                                                                 |
|Search                 |[Boyer–Moore–Horspool (Horspool's) algorithm](./strings/search/boyer-moore-horspool/)                                              |
|Search                 |[Knuth–Morris–Pratt (KMP) algorithm](./strings/search/knuth-morris-pratt/)                                                         |
|Search                 |[Rabin–Karp (Karp-Rabin) algorithm](./strings/search/rabin-karp/)                                                                  |
|                       |[Find substring pattern in a given string (needle in haystack)](./strings/find-needle-haystack.py)                                 |
|                       |[Sum strings](./strings/sum-strings/)                                                                                              |
|**Sequences**          |[🔗](./sequences/)                                                                                                                 |
|                       |[Implementation of Boyer–Moore majority vote algorithm](./sequences/boyer-moore-majority-vote.go)                                  |
|**Lists**              |[🔗](./lists/)                                                                                                                     |
|Arrays/Subsets         |[Generate Power set of given array](./lists/arrays/subsets/power-set/)                                                             |
|Arrays                 |[Check if an array has a pair of numbers whose sum is match the given target](./lists/arrays/has-pair-sum-equal-n.js)              |
|Linked Lists           |[Find a middle/median element](./lists/linked-lists/find-median-element.js)                                                        |
|**Parsers**            |[🔗](./parsers/)                                                                                                                   |
|Conversions            |[Convert an integer to a roman numeral](./parsers/conversions/integer-to-roman.ts)                                                 |
|**Trees**              |[🔗](./trees/)                                                                                                                     |
|Binary                 |[Check if there is a node in binary tree which satisfies to given predicate](./trees/binary/search.py)                             |
|**Dynamic Programming**|[🔗](./dynamic-programming/)                                                                                                       |
|                       |[Coin Change (Change-making): find the least number of coins](./dynamic-programming/coin-change-least-number/)                     |
|                       |[Coin Change (Change-making): find the total number of ways (order matters)](./dynamic-programming/coin-change-total-number/)      |
|                       |[Coin Change (Change-making): get coins of the least number of coins](./dynamic-programming/coin-change-least-coins/)              |
|                       |[All possible pathways in given square matrix from one cell to another](./dynamic-programming/magic-square-all-paths/)             |
|                       |[Max possible earn among all pathways from point A to B in given square matrix](./dynamic-programming/magic-square-max-earn/)      |
|**Data Structures**    |[🔗](./data-structures/)                                                                                                           |
|                       |[Circular Buffer (Ring Buffer)](./data-structures/circular-buffer/)                                                                |
|                       |[Singly Linked List](./data-structures/singly-linked-list/)                                                                        |
|                       |[Doubly Linked List](./data-structures/doubly-linked-list/)                                                                        |
|                       |[Binary Heap](./data-structures/binary-heap/)                                                                                      |

## Links

- [The Algorithms](https://the-algorithms.com)
- [JavaScript Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)
- [Time Complexity of various Python operations](https://wiki.python.org/moin/TimeComplexity)

## Contributing

We encourage you to contribute to our growing knowledge base of algorithmic world! Please check out the [Contribution Guide](./CONTRIBUTING.md) for guidelines about how to proceed. In any activity in the project, please, follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is available under the [Unlicense](./UNLICENSE.txt) license or, in simple words, doesn't contain *any* restrictions on usage.
