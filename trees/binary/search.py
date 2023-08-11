# Determine if there is a node in binary tree which satisfies to given predicate.
#
# === Solution ===
# Use any tree traversal algorithm to search for target node.
# Pre-order DFS (Depth-first search) is used in the example, but here it's just a matter of taste.
# Instead of polluting the main function with validation logic, encapsulate this logic into external function.
#
# === Complexity ===
# Time complexity: O(N)
# Space complexity: O(N), for stack

# example with recursion
def search(node, check, n) -> bool:
    if not node:
        return False

    if check(node.value, n):
        return True

    return search(node.left, check, n) or search(node.right, check, n)

# iterativ example
def search(node, check, n) -> bool:
    stack = []

    while len(stack) or node:
        if node:
            if check(node.value, n):
                return True
            stack.append(node)
            node = node.left
        else:
            node = stack.pop().right
        
    return False