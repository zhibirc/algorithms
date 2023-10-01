# Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is
# the smallest in lexicographical order
# among all possible results.

from collections import Counter

def removeDuplicateLetters(s: str) -> str:
    result_stack, visit_map = [], dict(Counter(s))
    
    for key in visit_map:
        visit_map[key] = {
            'last_idx': s.rfind(key),
            'visited': False
        }

    for i, char in enumerate(s):
        if len(result_stack) == 0:
            result_stack.append(char)
            visit_map[char]['visited'] = True
        else:
            if visit_map[char]['visited']:
                continue
            while (result_stack and char < result_stack[-1] and visit_map[result_stack[-1]]['last_idx'] > i):
                visit_map[result_stack.pop()]['visited'] = False
            result_stack.append(char)
            visit_map[char]['visited'] = True
    
    return ''.join(result_stack)