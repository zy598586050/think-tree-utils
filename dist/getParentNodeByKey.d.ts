interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const getParentNodeByKey: (key: string, tree: TreeNode[], { keyName, childrenName }?: Partial<TreeOptions>) => TreeNode | null;
export default getParentNodeByKey;
