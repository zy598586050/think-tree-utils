// 根据某个属性获取父节点
const getParentNodeByKey = (key, tree, { keyName = 'id', childrenName = 'children' }) => {
    for (let node of tree) {
        if (node[childrenName]?.some(child => child[keyName] === key)) {
            return node
        } else if (node[childrenName]?.length) {
            let parent = getParentNodeByKey(key, node[childrenName], { keyName, childrenName })
            if (parent) return parent
        }
    }
    return null
}
export default getParentNodeByKey