<p align="center">
  <img width="300px" src="https://www.think-js.cn/icon.png">
</p>

<p align="center">
  <a href="http://www.think-js.cn">
    <img src="https://img.shields.io/badge/npm-v1.1.0-blue">
  </a>
  <a href="http://www.think-js.cn">
    <img src="https://img.shields.io/badge/downloads-110k/month-green">
  </a>
  <a href="http://www.think-js.cn">
    <img src="https://codecov.io/gh/element-plus/element-plus/branch/dev/graph/badge.svg?token=BKSBO2GLZI"/>
  </a>
  <br>
</p>

<p align="center">一个用于处理树结构数据的库</p>

## think-tree-utils

Think-Tree-Utils 是一个 JavaScript 库，用于处理树结构的数据。它提供了很多常用的方法来操作树结构，例如查询，排序，修改，删除等等

## 目录结构

```
.
├── src
│   ├── buildTree.ts             // 数组转树结构
│   ├── delNodeByKey.ts          // 根据某个属性删除节点
│   ├── getNodeByKey.ts          // 根据某个属性获取节点
│   ├── getParentNodeByKey.ts    // 根据某个属性获取父节点
│   ├── getTopNodeByKey.ts       // 根据某个属性获取顶级节点
│   ├── insertNode.ts            // 插入节点在某节点之前或之后或子节点
│   ├── moveNodeByKey.ts         // 根据某个属性向上或向下移动
│   ├── setNodeByKey.ts          // 根据某个属性修改节点
│   ├── rewriteFields.ts         // 遍历更新字段名
│   ├── getFieldPathByKey.ts     // 获取某个字段值所在的链路
│   ├── searchTreeByKey.ts       // 根据某个属性模糊查询树结构
│   └── sortTreeByKey.ts         // 根据某个属性排序
├── test
│    └── index.js
├── README.md
├── index.js
├── package.json
├── tsconfig.json
```

## 安装

```
npm install think-tree-utils
```

## 常用方法演示

### 1. 数组转树结构 (buildTree)

> 参数：(data, { parentId = null, idName = 'id', parentIdName = 'parentid', childrenName = 'children' } = {})

```
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
```

### 2. 根据某个属性获取节点 (getNodeByKey)

> 参数：(key, tree, { keyName = 'id', childrenName = 'children' } = {})

```
const node2 = TreeUtil.getNodeByKey(2, tree, { childrenName: 'child' })
console.log('ID为2的节点', node2)
```

### 3. 根据某个属性修改节点 (setNodeByKey)

> 参数：(tree, newNode, { keyName = 'id', childrenName = 'children' } = {})

```
TreeUtil.setNodeByKey(tree, { ...node2, name: '李达康' }, { childrenName: 'child' })
console.log('修改id=2的这个节点后的树', tree)
```

### 4. 根据某个属性删除节点 (delNodeByKey)

> 参数：(key, tree, { keyName = 'id', childrenName = 'children' } = {})

```
TreeUtil.delNodeByKey(3, tree, { childrenName: 'child' })
console.log('删除id=3的这个节点后的树', tree)
```

### 5. 根据某个属性排序 (sortTreeByKey)

> 参数：(tree, sort = 'desc', { keyName = 'id', childrenName = 'children' } = {})

```
TreeUtil.sortTreeByKey(tree, 'desc', { keyName: 'id', childrenName: 'child' })
console.log('根据id对数结构进行降序', tree)
```

### 6. 根据某个属性获取父节点 (getParentNodeByKey)

> 参数：(key, tree, { keyName = 'id', childrenName = 'children' } = {})

```
const node4 = TreeUtil.getParentNodeByKey(4, tree, { childrenName: 'child' })
console.log('获取id=4的父节点', node4)
```

### 7. 插入节点在某节点之前或之后或子节点 (insertNode)

> 参数：(key, tree, obj, type = 'before', { keyName = 'id', childrenName = 'children' } = {})

```
TreeUtil.insertNode(4, tree, {id: 8, parentid: 2, name: '老六'}, 'before', { childrenName: 'child' })
console.log('给id=4的节点前插入节点', tree)

TreeUtil.insertNode(4, tree, {id: 9, parentid: 2, name: '老七'}, 'after', { childrenName: 'child' })
console.log('给id=4的节点后插入节点', tree)

TreeUtil.insertNode(4, tree, {id: 10, parentid: 4, name: '老八'}, 'children', { childrenName: 'child' })
console.log('给id=4的节点插入子节点', tree)
```

### 8. 根据某个属性向上或向下移动 (moveNodeByKey)

> 参数：(key, tree, type = 'up', num = 1, { keyName = 'id', childrenName = 'children' } = {}) 

```
TreeUtil.moveNodeByKey(6, tree, 'lower', 1, { childrenName: 'child' })
console.log('id=6的节点向下移动一位', tree)
```

### 9. 根据某个属性获取顶级节点 (getTopNodeByKey)

> 参数：(key, tree, { keyName = 'id', childrenName = 'children' } = {})

```
const node5 = TreeUtil.getTopNodeByKey(6, tree, { childrenName: 'child' })
console.log('获取id=6的顶级节点', node5)
```

### 10. 遍历更新字段名 (rewriteFields)

> 参数：(tree, transformFn, childrenName = 'children')

```
const node6 = TreeUtil.rewriteFields(tree, (node) => {
    const { name, ...rest } = node
    return {
        nickname: name,
        ...rest
    }
}, 'child')
console.log('把字段name替换成nickname', node6)
```

### 11. 获取某个字段值所在的链路 (getFieldPathByKey)

> 参数：(key: string, tree: Node[], { keyName = 'id', childrenName = 'children' })

```
const node7 = TreeUtil.getFieldPathByKey(10, tree, { childrenName: 'child' })
console.log('获取id=10的字段路径', node7)
```

### 12. 根据某个属性模糊查询树结构 (searchTreeByKey)

> 参数：(key, tree, { keyName = 'id', childrenName = 'children' } = {})

```
const node8 = TreeUtil.searchTreeByKey('六', node6, { keyName: 'nickname', childrenName: 'child' })
console.log('模糊查询nickname里有六的节点，并得到新树', node8)
```