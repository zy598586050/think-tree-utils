interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

// 遍历更新字段名
const rewriteFields = (tree: TreeNode[], transformFn: (node: TreeNode) => TreeNode, childrenName: string = 'children') => {
    return tree.map((node: TreeNode) => {
        const newNode = transformFn(node)
        if (node[childrenName] && node[childrenName].length > 0) {
            newNode[childrenName] = rewriteFields(node[childrenName], transformFn, childrenName);
        }
        return newNode
    })
}

export default rewriteFields