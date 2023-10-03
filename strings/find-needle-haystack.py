# Naive/bruteforce approach to find substring pattern in a given string (needle in haystack).
# Complexity: O(M * N) in worst case where M - length of the "needle" and N - length of the "haystack".

def find_needle_haystack(needle: str, haystack: str) -> int:
    index = -1

    for i in range(len(haystack) - len(needle) + 1):
        for j in range(len(needle)):
            if needle[j] != haystack[i + j]:
                break
        else:
            index = i
            break

    return index