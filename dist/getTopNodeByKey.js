// 根据某个属性获取顶级节点
const getTopNodeByKey = (key, tree, { keyName = 'id', childrenName = 'children' } = {}) => {
    const path = [];
    const find = (node, key) => {
        if (node[keyName] === key) {
            path.push(node);
            return true;
        }
        if (node[childrenName] && node[childrenName].length > 0) {
            for (const child of node[childrenName]) {
                if (find(child, key)) {
                    path.push(node);
                    return true;
                }
            }
        }
        return false;
    };
    for (const node of tree) {
        if (find(node, key)) {
            return path[path.length - 1];
        }
    }
    return null;
};
export default getTopNodeByKey;
