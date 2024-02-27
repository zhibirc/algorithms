vowels = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

def reverseVowels_v1(s: str) -> str:
    answer, stack = '', []

    for ch in s:
        if ch in vowels:
            stack.append(ch)
    for ch in s:
        if ch in vowels:
            answer += stack.pop()
        else:
            answer += ch
    
    return answer
        

def reverseVowels_v2(s: str) -> str:
    answer, left, right = list(s), 0, len(s) - 1

    while left < right:
        if answer[left] in vowels:
            while answer[right] not in vowels:
                right -= 1
            answer[left], answer[right] = answer[right], answer[left]
            right -= 1
        left += 1

    return ''.join(answer)
