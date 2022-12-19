// 根据某个属性排序
const sortTreeByKey = (tree, sort = 'desc', { keyName = 'id', childrenName = 'children' } = {}) => {
    tree.sort((a, b) => {
        if (sort === 'desc') {
            return b[keyName] - a[keyName]
        } else if (sort === 'asc') {
            return a[keyName] - b[keyName]
        }
    })
    for (let node of tree) {
        if (node[childrenName]) {
            sortTreeByKey(node[childrenName], sort, { keyName, childrenName })
        }
    }
}
export default sortTreeByKey