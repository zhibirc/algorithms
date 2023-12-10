# Prime factorization

If there is a high chance that input can be actually a prime number, consider performing a probabilistic (or a fast deterministic) [primality test](../primality-test/) before trying to factorize the number, because otherwise most of factorization algorithms will be slow. It shouldn't affect general performace significantly, because time complexity of these two are comparable.

## Implementation

### Plain division

#### Complexity

**Time**: $O(\sqrt{n})$

## More information

[Wikipedia](https://en.wikipedia.org/wiki/Factorization)
[Algorithms for Competitive Programming](https://cp-algorithms.com/algebra/factorization.html)