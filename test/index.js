import TreeUtil from '../index.js'

const items = [
    {
        id: 1,
        name: '张三'
    },
    {
        id: 2,
        pid: 1,
        name: '李四'
    },
    {
        id: 3,
        pid: 1,
        name: '王五'
    },
    {
        id: 4,
        pid: 2,
        name: '赵六'
    },
    {
        id: 5,
        pid: 3,
        name: '刘七'
    },
    {
        id: 6,
        name: '周大生'
    },
    {
        id: 7,
        pid: 1,
        name: '陈翔六点半'
    }
]

const tree = TreeUtil.buildTree(items, { childrenName: 'child' })
console.log('构建树结构')
console.dir(tree, { depth: null })

const node2 = TreeUtil.getNodeByKey(2, tree, { childrenName: 'child' })
console.log('ID为2的节点')
console.dir(node2, { depth: null })

TreeUtil.setNodeByKey(tree, { ...node2, name: '李达康' }, { childrenName: 'child' })
console.log('修改id=2的这个节点后的树')
console.dir(tree, { depth: null })

TreeUtil.delNodeByKey(3, tree, { childrenName: 'child' })
console.log('删除id=3的这个节点后的树')
console.dir(tree, { depth: null })

TreeUtil.sortTreeByKey(tree, 'desc', { keyName: 'id', childrenName: 'child' })
console.log('根据id对数结构进行降序')
console.dir(tree, { depth: null })

const node4 = TreeUtil.getParentNodeByKey(4, tree, { childrenName: 'child' })
console.log('获取id=4的父节点')
console.dir(node4, { depth: null })

TreeUtil.insertNode(4, tree, {id: 8, parentid: 2, name: '老六'}, 'before', { childrenName: 'child' })
console.log('给id=4的节点前插入节点')
console.dir(tree, { depth: null })

TreeUtil.insertNode(4, tree, {id: 9, parentid: 2, name: '老七'}, 'after', { childrenName: 'child' })
console.log('给id=4的节点后插入节点')
console.dir(tree, { depth: null })

TreeUtil.insertNode(4, tree, {id: 10, parentid: 4, name: '老八'}, 'children', { childrenName: 'child' })
console.log('给id=4的节点插入子节点')
console.dir(tree, { depth: null })

TreeUtil.moveNodeByKey(6, tree, 'lower', 1, { childrenName: 'child' })
console.log('id=6的节点向下移动一位')
console.dir(tree, { depth: null })

const node5 = TreeUtil.getTopNodeByKey(6, tree, { childrenName: 'child' })
console.log('获取id=6的顶级节点')
console.dir(node5, { depth: null })

const node6 = TreeUtil.rewriteFields(tree, (node) => {
    const { name, ...rest } = node
    return {
        nickname: name,
        ...rest
    }
}, 'child')
console.log('把字段name替换成nickname')
console.dir(node6, { depth: null })

const node7 = TreeUtil.getFieldPathByKey(10, tree, { childrenName: 'child' })
console.log('获取id=10的字段路径')
console.dir(node7, { depth: null })