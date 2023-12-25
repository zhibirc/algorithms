from typing import Optional

class ListNode:
    def __init__(self, value, next = None) -> None:
        self.value = value
        self.next = next

def printV1(head: Optional[ListNode]) -> None:
    """ Solution using stack. Complexity: O(n)/O(n). """
    stack = []

    # start --> end
    while head:
        stack.append(head.value)
        head = head.next

    # end --> start
    while stack:
        print(stack.pop())

def printV2(head: Optional[ListNode]) -> None:
    """ Solution using recursion. Complexity: O(n)/O(n). """
    if not head:
        return

    printV2(head.next)
    print(head.value)


def printV3(head: Optional[ListNode]) -> None:
    """ Solution using constant space. Complexity: O(n^2)/O(1). """
    end = None

    while head != end:
        current = head

        while current.next != end:
            current = current.next

        print(current.value)
        end = current