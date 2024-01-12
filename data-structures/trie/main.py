class TrieNode:
    def __init__(self) -> None:
        self.next = dict()
        self.isTerm = False

class Trie:
    def __init__(self) -> None:
        self.root = TrieNode

    def insert(self, text: str) -> None:
        node = self.root

        for char in text:
            if char not in node.next:
                node.next[char] = TrieNode()
            node = node.next[char]

        node.isTerm = True