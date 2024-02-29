interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 根据某个属性模糊查询树结构
const searchTreeByKey = (
    key: string,
    tree: TreeNode[],
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): TreeNode[] => {
    const result: TreeNode[] = [];

    const searchNode = (node: TreeNode) => {
        if (node[keyName].toString().includes(key)) {
            const filteredNode: TreeNode = { ...node };

            if (node[childrenName] && node[childrenName].length > 0) {
                filteredNode[childrenName] = [];
                for (const childNode of node[childrenName]) {
                    searchNode(childNode);
                }
            }

            result.push(filteredNode);
        } else if (node[childrenName] && node[childrenName].length > 0) {
            const filteredNode: TreeNode = { ...node };

            filteredNode[childrenName] = [];
            for (const childNode of node[childrenName]) {
                searchNode(childNode);
            }

            if (filteredNode[childrenName].length > 0) {
                result.push(filteredNode);
            }
        }
    };

    for (const node of tree) {
        searchNode(node);
    }

    return result;
}
export default searchTreeByKey