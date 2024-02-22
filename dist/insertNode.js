import getParentNodeByKey from './getParentNodeByKey.js';
import getNodeByKey from './getNodeByKey.js';
// 插入节点在某节点之前或之后或子节点
const insertNode = (key, tree, obj, type = 'before', { keyName = 'id', childrenName = 'children' } = {}) => {
    let parent = getParentNodeByKey(key, tree, { keyName, childrenName });
    const node = getNodeByKey(key, tree, { keyName, childrenName });
    if (parent === null)
        parent = tree;
    if (Array.isArray(parent)) {
        throw new Error('Parent node cannot be an array');
    }
    if (type === 'before' || type === 'after') {
        const index = parent[childrenName].findIndex((v) => v[keyName] === key);
        if (index === -1) {
            throw new Error('Reference node not found in parent');
        }
        const insertIndex = type === 'after' ? index + 1 : index;
        parent[childrenName].splice(insertIndex, 0, obj);
    }
    else if (type === 'children') {
        if (node === null || !node[childrenName]) {
            throw new Error('Target node for child insertion not found or does not support children');
        }
        node[childrenName].push(obj);
    }
};
export default insertNode;
