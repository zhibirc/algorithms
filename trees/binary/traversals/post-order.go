type TreeNode struct {
	Value int
	Left *TreeNode
	Right *TreeNode
}

 func traversePostOrder(root *TreeNode) []int {
    var result []int

    if root == nil {
        return result
    }

    var traverse func(node *TreeNode)

    traverse = func(node *TreeNode) {
        if node.Left != nil {
            traverse(node.Left)
        }
        if node.Right != nil {
            traverse(node.Right)
        }
        result = append(result, node.Value)
    }

    traverse(root)

    return result
}