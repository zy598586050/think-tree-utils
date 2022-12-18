import getParentNodeByKey from './getParentNodeByKey.js'
// 根据某个属性向上或向下移动
const moveNodeByKey = (key, tree, type = 'up', num = 1, { keyName = 'id', childrenName = 'children' }) => {
    let parent = getParentNodeByKey(key, tree, { keyName, childrenName })
    if (parent === null) parent = tree
    const index = parent.findIndex(item => item[keyName] === key)
    if (type === 'up') {
        const idx = index - num
        if (idx < 0) {
            console.log('超出移动范围')
        } else {
            const node = parent.splice(index, 1)[0]
            parent.splice(idx, 0, node)
        }
    } else if (type === 'lower') {
        const idx = index + num
        if (idx > parent.length - 1) {
            console.log('超出移动范围')
        } else {
            const node = parent.splice(index, 1)[0]
            parent.splice(idx, 0, node)
        }
    }
}
export default moveNodeByKey