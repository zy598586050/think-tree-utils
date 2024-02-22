type TreeNode = {
    [key: string]: any;
};

type TreeOptions = {
    parentId: string | number | null;
    idName: string;
    parentIdName: string;
    childrenName: string;
};

// 数组整理成树结构
const buildTree = (
    data: TreeNode[],
    { parentId = null, idName = 'id', parentIdName = 'pid', childrenName = 'children' }: Partial<TreeOptions> = {}
): TreeNode[] => {
    const tree: TreeNode[] = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i][parentIdName] === undefined) {
            data[i][parentIdName] = null;
        }
        if (data[i][parentIdName] === parentId) {
            data[i][childrenName] = buildTree(data, { parentId: data[i][idName], idName, parentIdName, childrenName });
            tree.push(data[i]);
        }
    }
    return tree;
}

export default buildTree;