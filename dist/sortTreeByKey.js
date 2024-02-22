// 根据某个属性排序
const sortTreeByKey = (tree, sort = 'desc', { keyName = 'id', childrenName = 'children' } = {}) => {
    tree.sort((a, b) => {
        if (sort === 'desc') {
            if (typeof b[keyName] === 'number' && typeof a[keyName] === 'number') {
                return b[keyName] - a[keyName];
            }
            return b[keyName].localeCompare(a[keyName]);
        }
        else if (sort === 'asc') {
            if (typeof a[keyName] === 'number' && typeof b[keyName] === 'number') {
                return a[keyName] - b[keyName];
            }
            return a[keyName].localeCompare(b[keyName]);
        }
        return 0;
    });
    for (let node of tree) {
        if (node[childrenName]) {
            sortTreeByKey(node[childrenName], sort, { keyName, childrenName });
        }
    }
};
export default sortTreeByKey;
