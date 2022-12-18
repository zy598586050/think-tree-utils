import getParentNodeByKey from './getParentNodeByKey.js'
import getNodeByKey from './getNodeByKey.js'
// 插入节点在某节点之前或之后或子节点
const insertNode = (key, tree, obj, type = 'before', { keyName = 'id', childrenName = 'children' }) => {
    let parent = getParentNodeByKey(key, tree, { keyName, childrenName })
    const node = getNodeByKey(key, tree, { keyName, childrenName })
    if (parent === null) parent = tree
    if (type === 'before') {
        parent[childrenName].splice(parent[childrenName].findIndex(v => v[keyName] === key), 0, obj)
    } else if (type === 'after') {
        parent[childrenName].splice(parent[childrenName].findIndex(v => v[keyName] === key) + 1, 0, obj)
    } else if (type === 'children') {
        node[childrenName].push(obj)
    }
}
export default insertNode