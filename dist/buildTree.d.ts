type TreeNode = {
    [key: string]: any;
};
type TreeOptions = {
    parentId: string | number | null;
    idName: string;
    parentIdName: string;
    childrenName: string;
};
declare const buildTree: (data: TreeNode[], { parentId, idName, parentIdName, childrenName }?: Partial<TreeOptions>) => TreeNode[];
export default buildTree;
