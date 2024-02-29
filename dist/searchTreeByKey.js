// 根据某个属性模糊查询树结构
const searchTreeByKey = (key, tree, { keyName = 'id', childrenName = 'children' } = {}) => {
    const result = [];
    const searchNode = (node) => {
        if (node[keyName].toString().includes(key)) {
            const filteredNode = { ...node };
            if (node[childrenName] && node[childrenName].length > 0) {
                filteredNode[childrenName] = [];
                for (const childNode of node[childrenName]) {
                    searchNode(childNode);
                }
            }
            result.push(filteredNode);
        }
        else if (node[childrenName] && node[childrenName].length > 0) {
            const filteredNode = { ...node };
            filteredNode[childrenName] = [];
            for (const childNode of node[childrenName]) {
                searchNode(childNode);
            }
            if (filteredNode[childrenName].length > 0) {
                result.push(filteredNode);
            }
        }
    };
    for (const node of tree) {
        searchNode(node);
    }
    return result;
};
export default searchTreeByKey;
