interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 根据某个属性修改节点
const setNodeByKey = (
    tree: TreeNode[],
    newNode: TreeNode,
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): void => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i][keyName] === newNode[keyName]) {
            tree[i] = newNode;
        }
        if (tree[i][childrenName]) {
            setNodeByKey(tree[i][childrenName], newNode, { keyName, childrenName });
        }
    }
};

export default setNodeByKey;