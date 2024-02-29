interface TreeNode {
    [key: string]: any;
    children?: TreeNode[];
}
interface TreeOptions {
    keyName: string;
    childrenName: string;
}
declare const searchTreeByKey: (key: string, tree: TreeNode[], { keyName, childrenName }?: Partial<TreeOptions>) => TreeNode[];
export default searchTreeByKey;
