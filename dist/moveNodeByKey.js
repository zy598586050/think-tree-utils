import getParentNodeByKey from './getParentNodeByKey.js';
// 根据某个属性向上或向下移动
const moveNodeByKey = (key, tree, type = 'up', num = 1, { keyName = 'id', childrenName = 'children' } = {}) => {
    let parent = getParentNodeByKey(key, tree, { keyName, childrenName });
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
