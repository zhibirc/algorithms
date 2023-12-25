class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BSTree:
    def __init__(self):
        self.root = None

    def search(self, root: TreeNode, value: int) -> TreeNode:
        if root is None or value == root.value:
            return root

        return self.search(root.left, value) if value < root.value \
            else self.search(root.right, value)

    def insert(self, root: TreeNode, value: int) -> TreeNode:
        if not root:
            return TreeNode(value)

        if value > root.value:
            # insert into the right subtree
            root.right = self.insert(root.right, value)
        elif value == root.value:
            return root
        else:
            # insert into the left subtree
            root.left = self.insert(root.left, value)
        return root

    def successor(self, root):
        """
        One step right and then always left
        """
        root = root.right
        while root.left:
            root = root.left
        return root.value

    def predecessor(self, root):
        """
        One step left and then always right
        """
        root = root.left
        while root.right:
            root = root.right
        return root.value

    def delete(self, root: TreeNode, value: int) -> TreeNode:
        if not root:
            return None

        # delete from the right subtree
        if value > root.value:
            root.right = self.delete(root.right, value)
        # delete from the left subtree
        elif value < root.value:
            root.left = self.delete(root.left, value)
        # delete the current node
        else:
            # the node is a leaf
            if not (root.left or root.right):
                root = None
            # the node is not a leaf and has a right child
            elif root.right:
                root.value = self.successor(root)
                root.right = self.delete(root.right, root.value)
            # the node is not a leaf, has no right child, and has a left child
            else:
                root.value = self.predecessor(root)
                root.left = self.delete(root.left, root.value)

        return root
