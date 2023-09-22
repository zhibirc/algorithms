/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     value: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.value = value ?? 0;
 *         this.left = left ?? null;
 *         this.right = right ?? null;
 *     }
 * }
 */

type TreeNode  = {
    value: number
    left: TreeNode | null
    right: TreeNode | null
}
    
function traverseInOrder(root: TreeNode | null): number[] {
    const result: Array<number> = [];

    if (!root) return result;
    
    (function traverse(node) {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
    })(root);

    return result;
}