// 获取某个字段值所在的链路
const getFieldPathByKey = (key, tree, { keyName = 'id', childrenName = 'children' }) => {
    const search = (node, path) => {
        if (node[keyName] === key) {
            return [...path, node[keyName]];
        }
        if (node[childrenName]) {
            for (const child of node[childrenName]) {
                const resultPath = search(child, [...path, node[keyName]]);
                if (resultPath.length) {
                    return resultPath;
                }
            }
        }
        return [];
    };
    for (const rootNode of tree) {
        const result = search(rootNode, []);
        if (result.length) {
            return result;
        }
    }
    return [];
};
export default getFieldPathByKey;
