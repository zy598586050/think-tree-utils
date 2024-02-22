type TreeNode = {
    [key: string]: any;
};
type TreeOptions = {
    keyName: string;
    childrenName: string;
};
declare const delNodeByKey: (key: string, tree: TreeNode[], { keyName, childrenName }?: Partial<TreeOptions>) => void;
export default delNodeByKey;
