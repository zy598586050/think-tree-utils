import TreeUtil from '../index.js'

const items = [
    {
        id: 1,
        name: '张三'
    },
    {
        id: 2,
        parentid: 1,
        name: '李四'
    },
    {
        id: 3,
        parentid: 1,
        name: '王五'
    },
    {
        id: 4,
        parentid: 2,
        name: '赵六'
    },
    {
        id: 5,
        parentid: 3,
        name: '刘七'
    },
    {
        id: 6,
        name: '周大生'
    },
    {
        id: 7,
        parentid: 1,
        name: '陈翔六点半'
    }
]

const tree = TreeUtil.buildTree(items, { childrenName: 'child' })
console.log('构建树结构', tree)

const node2 = TreeUtil.getNodeByKey(2, tree, { childrenName: 'child' })
console.log('ID为2的节点', node2)

TreeUtil.setNodeByKey(tree, { ...node2, name: '李达康' }, { childrenName: 'child' })
console.log('修改id=2的这个节点后的树', tree)

TreeUtil.delNodeByKey(3, tree, { childrenName: 'child' })
console.log('删除id=3的这个节点后的树', tree)

TreeUtil.sortTreeByKey(tree, 'desc', { keyName: 'id', childrenName: 'child' })
console.log('根据id对数结构进行降序', tree)

const node4 = TreeUtil.getParentNodeByKey(4, tree, { childrenName: 'child' })
console.log('获取id=4的父节点', node4)

TreeUtil.insertNode(4, tree, {id: 8, parentid: 2, name: '老六'}, 'before', { childrenName: 'child' })
console.log('给id=4的节点前插入节点', tree)

TreeUtil.insertNode(4, tree, {id: 9, parentid: 2, name: '老七'}, 'after', { childrenName: 'child' })
console.log('给id=4的节点后插入节点', tree)

TreeUtil.insertNode(4, tree, {id: 10, parentid: 4, name: '老八'}, 'children', { childrenName: 'child' })
console.log('给id=4的节点插入子节点', tree)

TreeUtil.moveNodeByKey(6, tree, 'lower', 1, { childrenName: 'child' })
console.log('id=6的节点向下移动一位', tree)