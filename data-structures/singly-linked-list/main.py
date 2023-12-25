from typing import Optional

class ListNode:
    def __init__(self, value, next = None):
        self.value = value
        self.next = next

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
        # pseudo or sentinel node
        self._dummy = ListNode(None, self.head)

    def insert(self, value) -> None:
        node = ListNode(value)

        if self.tail:
            self.tail.next = node
            self.tail = node
        elif self.head:
            self.head.next = node
            self.tail = node
        else:
            self.head = node
            self._dummy.next = self.head

        self.size += 1

    def remove(self, value, first = True) -> Optional[ListNode]:
        previousNode, currentNode = self.head, self.head.next

        while currentNode:
            if currentNode.value == value:
                previousNode.next = currentNode.next

                self.size -= 1

                if first:
                    return currentNode

            previousNode = currentNode
            currentNode = currentNode.next
