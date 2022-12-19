// 根据某个属性获取节点
const getNodeByKey = (key, tree, { keyName = 'id', childrenName = 'children' } = {}) => {
    for (const node of tree) {
        if (node[keyName] === key) {
            return node
        }
        if (node[childrenName]) {
            const result = getNodeByKey(key, node[childrenName], { keyName, childrenName })
            if (result) return result
        }
    }
    return null
}
export default getNodeByKey