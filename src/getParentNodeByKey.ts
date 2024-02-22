interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 根据某个属性获取父节点
const getParentNodeByKey = (
    key: string,
    tree: TreeNode[],
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): TreeNode | null => {
    for (let node of tree) {
        if (node[childrenName]?.some((child: TreeNode) => child[keyName] === key)) {
            return node;
        } else if (node[childrenName]?.length) {
            let parent = getParentNodeByKey(key, node[childrenName], { keyName, childrenName });
            if (parent) return parent;
        }
    }
    return null;
};

export default getParentNodeByKey;