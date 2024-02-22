// 根据某个属性修改节点
const setNodeByKey = (tree, newNode, { keyName = 'id', childrenName = 'children' } = {}) => {
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
