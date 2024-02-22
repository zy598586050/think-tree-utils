interface Node {
    [key: string]: any;
    children?: Node[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 根据某个属性获取节点
const getNodeByKey = (
    key: string,
    tree: Node[],
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): Node | null => {
    for (const node of tree) {
        if (node[keyName] === key) {
            return node;
        }
        if (node[childrenName]) {
            const result = getNodeByKey(key, node[childrenName], { keyName, childrenName });
            if (result) return result;
        }
    }
    return null;
};

export default getNodeByKey;