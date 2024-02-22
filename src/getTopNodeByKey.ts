interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 根据某个属性获取顶级节点
const getTopNodeByKey = (
    key: string,
    tree: TreeNode[],
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): TreeNode | null => {
    const path: TreeNode[] = []
    const find = (node: TreeNode, key: string) => {
        if (node[keyName] === key) {
            path.push(node)
            return true
        }
        if(node[childrenName] && node[childrenName].length > 0) {
            for(const child of node[childrenName]) {
                if (find(child, key)) {
                    path.push(node)
                    return true
                }
            }
        }
        return false
    }
    for(const node of tree) {
        if (find(node, key)) {
            return path[path.length - 1]
        }
    }
    return null
}

export default getTopNodeByKey