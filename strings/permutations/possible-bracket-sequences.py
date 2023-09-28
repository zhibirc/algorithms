from typing import List

def get_possible_bracket_sequences(n: int) -> List[str]:
    return generate(n)

def generate(current: str, opened: str, closed: str, n: int, result: List[str] = []) -> List[str]:
    if len(current) == 2 * n:
        result.append(current)
        return
    if opened < n:
        generate(current + '(', opened + 1, closed, n, result)
    if closed < opened:
        generate(current + ')', opened, closed + 1, n, result)