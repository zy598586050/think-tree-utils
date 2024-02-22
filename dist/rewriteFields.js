// 遍历更新字段名
const rewriteFields = (tree, transformFn, childrenName = 'children') => {
    return tree.map((node) => {
        const newNode = transformFn(node);
        if (node[childrenName] && node[childrenName].length > 0) {
            newNode[childrenName] = rewriteFields(node[childrenName], transformFn, childrenName);
        }
        return newNode;
    });
};
export default rewriteFields;
