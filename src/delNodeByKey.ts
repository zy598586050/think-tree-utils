type TreeNode = {
    [key: string]: any;
};

type TreeOptions = {
    keyName: string;
    childrenName: string;
};

// 根据某个属性删除节点
const delNodeByKey = (
    key: string,
    tree: TreeNode[],
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): void => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i][keyName] === key) {
            tree.splice(i, 1);
            return;
        }
        if (tree[i][childrenName]) {
            delNodeByKey(key, tree[i][childrenName], { keyName, childrenName });
        }
    }
}

export default delNodeByKey;