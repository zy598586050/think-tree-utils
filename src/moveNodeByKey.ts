import getParentNodeByKey from './getParentNodeByKey';

interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}

interface TreeOptions {
    keyName: string;
    childrenName: string;
}

// 根据某个属性向上或向下移动
const moveNodeByKey = (
    key: string,
    tree: TreeNode[],
    type: 'up' | 'down' = 'up',
    num: number = 1,
    { keyName = 'id', childrenName = 'children' }: Partial<TreeOptions> = {}
): void => {
    let parent: TreeNode | TreeNode[] | null = getParentNodeByKey(key, tree, { keyName, childrenName });

    if (parent === null) {
        parent = tree;
    }

    if (!Array.isArray(parent)) {
        console.log('Parent node is not at a level where moving is possible');
        return;
    }

    const index = parent.findIndex(item => item[keyName] === key);

    if (index === -1) {
        console.log('Node not found');
        return;
    }

    const newIndex = type === 'up' ? index - num : index + num;

    if (newIndex < 0 || newIndex >= parent.length) {
        console.log('Beyond the range of movement');
        return;
    }

    const [node] = parent.splice(index, 1);
    parent.splice(newIndex, 0, node);
};

export default moveNodeByKey;