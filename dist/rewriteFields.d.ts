interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
declare const rewriteFields: (tree: TreeNode[], transformFn: (node: TreeNode) => TreeNode, childrenName?: string) => TreeNode[];
export default rewriteFields;
