# Generate all possible balanced bracket sequences of N pairs.
#
# Let's use "()" as brackets.

from typing import List

def generate_bracket_sequences(n: int) -> List[str]:
    result: List[str] = []

    generate('', 0, 0, n, result)

    return result

def generate(current: str, opened: int, closed: int, n: int, result: List[str]):
    if len(current) == 2 * n:
        result.append(current)

        return
    if opened < n:
        generate(current + '(', opened + 1, closed, n, result)
    if closed < opened:
        generate(current + ')', opened, closed + 1, n, result)