import getParentNodeByKey from './getParentNodeByKey';
import getNodeByKey from './getNodeByKey';

interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 插入节点在某节点之前或之后或子节点
const insertNode = (
    key: string,
    tree: TreeNode[],
    obj: TreeNode,
    type: 'before' | 'after' | 'children' = 'before',
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): void => {
    let parent: TreeNode | TreeNode[] | null = getParentNodeByKey(key, tree, { keyName, childrenName });
    const node: TreeNode | null = getNodeByKey(key, tree, { keyName, childrenName });

    if (parent === null) parent = tree;

    if (Array.isArray(parent)) {
        throw new Error('Parent node cannot be an array');
    }

    if (type === 'before' || type === 'after') {
        const index = parent[childrenName].findIndex((v: TreeNode) => v[keyName] === key);
        if (index === -1) {
            throw new Error('Reference node not found in parent');
        }

        const insertIndex = type === 'after' ? index + 1 : index;
        parent[childrenName].splice(insertIndex, 0, obj);
    } else if (type === 'children') {
        if (node === null || !node[childrenName]) {
            throw new Error('Target node for child insertion not found or does not support children');
        }
        node[childrenName].push(obj);
    }
};

export default insertNode;