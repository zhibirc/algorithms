from typing import Optional

class ListNode:
    def __init__(self, value, next = None) -> None:
        self.value = value
        self.next = next

def detectCycle(head: Optional[ListNode]) -> bool:
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True
        
    return False