# Next Bracket Sequence

## Task

Given correct bracket sequence of $n$ pairs (sequence length is $2n$) of one type of brackets, find the lexicographically  next correct bracket sequence. If it's not possible, i.e. input sequence is already the greatest possible, return `no solution`.

**Examples**

Input: `()(())`
Output: `()()()`

Input: `()()()`
Output: `no solution`

## Solution

<details>
<summary>expand section 🔻🔺</summary>
<br>

1. Find the rightmost opening bracket (at position $i$) which we could close (replace with the closing) without loosing correctness of the sequence. In other words, we try to preserve the largest possible prefix unchanged.

2. Form the lexicographically minimal bracket sequence from the remaining brackets (from $i + 1$ position till the end of the string). Such minimal sequence can be formed by using opening brackets as much as we can (actually, half of the remainder), and then putting closing counterparts.

3. Return the result sequence.

4. Return `no solution` in case we iterated over the whole sequence and didn't find possibility to make requested changes.

### Complexity

**Time**: $O(N)$

**Space**: $O(1)$
</details>