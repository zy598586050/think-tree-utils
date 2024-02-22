interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const setNodeByKey: (tree: TreeNode[], newNode: TreeNode, { keyName, childrenName }?: Partial<TreeOptions>) => void;
export default setNodeByKey;
